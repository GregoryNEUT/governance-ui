/**
 * This file generates typing files analyzing packages/ files and directories
 */

import fs from 'fs/promises'

// Read a folder and returns every directories name
async function getDirectoriesNames(path: string) {
  const files = await fs.readdir(path)

  const stats = await Promise.all(
    files.map((file) => fs.stat(`${path}/${file}`))
  )

  // Return directories only
  return files.filter((_, index) => stats[index].isDirectory())
}

function capitalize(str: string): string {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

function reverseCapitalize(str: string): string {
  return `${str[0].toLocaleLowerCase()}${str.slice(1)}`
}

// Turn 'PerpCreate' into 'Perp Create'
function getInstructionDescriptionFromInstructionName(
  instructionName: string
): string {
  const parts = instructionName.split(/(?=[A-Z])/)

  return parts.map(capitalize).join(' ')
}

function getFormattedInstructionName(
  packageName: string,
  nativeInstructionName: string
) {
  return `${reverseCapitalize(packageName)}${capitalize(nativeInstructionName)}`
}

function generateFileContent({
  path,
  packagesNames,
  packagesInstructions,
  logosNames,
  packagesIsVisibleFunction,
}: {
  path: string
  packagesNames: string[]
  packagesInstructions: string[][]
  logosNames: (string | undefined)[]
  packagesIsVisibleFunction: boolean[]
}): string {
  // Prefix instructions names with package name
  //
  // example:
  //   - package:        Foo
  //   - instruction:    bar
  //   - output:         fooBar
  const flattenInstructionsList = packagesInstructions
    .map((instructions, index) =>
      instructions.map((instructionName) =>
        getFormattedInstructionName(packagesNames[index], instructionName)
      )
    )
    .flat()

  return `
//
// File generated using ./scripts/generate-package-typing.ts
//

import { Governance, ProgramAccount, Realm, RealmConfigAccount } from '@solana/spl-governance'

// imports isVisible functions if needed
${packagesIsVisibleFunction
  .map((isVisibleFunction, index) => {
    const packageName = packagesNames[index]

    return isVisibleFunction
      ? `import is${packageName}Visible from '${path}/${packageName}/isVisible'`
      : ''
  })
  .filter((str) => str.length)
  .join('\n')}

// Parameters given to the function checking if a package should be visible
export type IsPackageVisibleFunctionParams = {
    symbol: string
}

export type IsInstructionVisibleFunctionParams = {
    realm?: ProgramAccount<Realm>
    config?: ProgramAccount<RealmConfigAccount>
    governances: {
        [governance: string]: ProgramAccount<Governance>
    }
    canUseAuthorityInstruction: boolean
    canUseTokenTransferInstruction: boolean
    canUseProgramUpgradeInstruction: boolean
}

export type Package = {
    name: string
    image?: string
    isVisibleFn?: (params: IsPackageVisibleFunctionParams) => boolean
}
      
export type PackagesMap = {
    [packageId in PackageEnum]: Package
}
      
export type PackageType = Package & {
    id: PackageEnum
}

export type Instruction = {
    name: string
    isVisible?: boolean
    packageId: PackageEnum
}
  
export type InstructionsMap = {
    [instructionId in InstructionEnum]: Instruction
}
  
export type InstructionType = {
    id: InstructionEnum
    name: string
    packageId: PackageEnum
}

export enum PackageEnum {
    ${packagesNames[0]} = 1,
    ${packagesNames.slice(1).join(',\n\t')}
}

export const packagesMap: PackagesMap = {
    ${packagesNames
      .map((packageName, index) => {
        let str = `[PackageEnum.${packageName}]: {
        name: '${packageName}',`

        if (logosNames[index]) {
          str = `${str}
        image: '${path}/${packageName}/${logosNames[index]}',`
        }

        if (packagesIsVisibleFunction[index]) {
          str = `${str}
        isVisibleFn: is${packagesNames[index]}Visible,`
        }

        return `${str}
    },`
      })
      .join('\n\t')}
}
    
export enum InstructionEnum {
    ${flattenInstructionsList[0]} = 1,
    ${flattenInstructionsList.slice(1).join(',\n\t')}
}

export const instructionsMap: InstructionsMap = {
    ${packagesInstructions
      .map((instructions, index) => {
        const packageName = packagesNames[index]

        return instructions
          .map(
            (
              instructionName
            ) => `[InstructionEnum.${getFormattedInstructionName(
              packageName,
              instructionName
            )}]: {
        name: '${getInstructionDescriptionFromInstructionName(
          instructionName
        )}',
        packageId: PackageEnum.${packageName},
    },
`
          )
          .join('\t')
      })
      .join('\t')}}
`
}

async function loadLogoName(path: string, packageName: string) {
  const files = await fs.readdir(`${path}/${packageName}`)

  return files.find((fileName) => /logo\.(svg|png|jpeg)/.test(fileName))
}

// Check if the isVisible.ts file exists for the given directory
async function checkFileExists(path: string): Promise<boolean> {
  try {
    await fs.access(path)
    return true
  } catch {
    return false
  }
}

async function generateTypingFiles() {
  const path = './packages'

  console.debug('Package/Instructions typing file generation ...')

  // Load packages (1 directory by package)
  const packagesNames = await getDirectoriesNames(path)

  console.debug(`${packagesNames.length} package found`)

  // Load instructions (1 directory by instruction)
  const packagesInstructions = await Promise.all(
    packagesNames.map((packageName) =>
      getDirectoriesNames(`${path}/${packageName}/instructions/`)
    )
  )

  console.debug(`${packagesInstructions.length} instructions found`)

  // Load logos
  const logosNames = await Promise.all(
    packagesNames.map((packageName) => loadLogoName(path, packageName))
  )

  // Check is isVisible.ts file is present for packages
  const packagesIsVisibleFunction = await Promise.all(
    packagesNames.map((packageName) =>
      checkFileExists(`${path}/${packageName}/isVisible.ts`)
    )
  )

  // Open the file in write mode, create the file if not exist, truncate if exists
  const fd = await fs.open(`${path}/generatedTypes.ts`, 'w+')

  // Use absolute path here. It's the path that will be in the generated file, used to interact with other project's files
  const fileContent = generateFileContent({
    path: '@packages',
    packagesNames,
    packagesInstructions,
    logosNames,
    packagesIsVisibleFunction,
  })

  console.debug(`Write in file ${`${path}/generatedTypes.ts`} ...`)

  await fd.write(fileContent)

  console.debug('Done')
}

generateTypingFiles()
