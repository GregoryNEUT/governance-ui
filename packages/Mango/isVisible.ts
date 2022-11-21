//
// This file exports a function executable to know if the package should be visible or not considering a given situation
//

import { IsPackageVisibleFunctionParams } from 'packages/generatedTypes'

export default ({ symbol }: IsPackageVisibleFunctionParams): boolean => {
  return symbol === 'MNGO'
}
