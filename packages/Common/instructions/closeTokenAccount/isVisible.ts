//
// This file exports a function executable to know if the package should be visible or not considering a given situation
//

import { IsInstructionVisibleFunctionParams } from 'packages/generatedTypes'

export default ({
  canUseTransferInstruction,
}: IsInstructionVisibleFunctionParams): boolean => {
  return canUseTransferInstruction
}
