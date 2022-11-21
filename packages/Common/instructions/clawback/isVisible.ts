//
// This file exports a function executable to know if the package should be visible or not considering a given situation
//

import { IsInstructionVisibleFunctionParams } from 'packages/generatedTypes'
import { vsrPluginsPks } from '@hooks/useVotingPlugins'

export default ({
  config,
  canUseTokenTransferInstruction,
}: IsInstructionVisibleFunctionParams): boolean => {
  const currentPluginPk = config?.account.communityTokenConfig.voterWeightAddin

  return !!(
    canUseTokenTransferInstruction &&
    currentPluginPk &&
    vsrPluginsPks.includes(currentPluginPk.toBase58())
  )
}
