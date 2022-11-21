//
// File generated using ./scripts/generate-package-typing.ts
//

import {
  Governance,
  ProgramAccount,
  Realm,
  RealmConfigAccount,
} from '@solana/spl-governance'

// imports isVisible functions if needed
import isForesightVisible from '@packages/Foresight/isVisible'
import isMangoVisible from '@packages/Mango/isVisible'

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
  Castle = 1,
  Change,
  Common,
  Everlend,
  Foresight,
  Friktion,
  GatewayPlugin,
  GoblinGold,
  Mango,
  MangoV4,
  Mean,
  NftVotingPlugin,
  Serum,
  Solana,
  Solend,
  Streamflow,
  Switchboard,
  Validators,
  Vsr,
  bpfUpgradeableLoader,
}

export const packagesMap: PackagesMap = {
  [PackageEnum.Castle]: {
    name: 'Castle',
    image: '@packages/Castle/logo.png',
  },
  [PackageEnum.Change]: {
    name: 'Change',
  },
  [PackageEnum.Common]: {
    name: 'Common',
  },
  [PackageEnum.Everlend]: {
    name: 'Everlend',
    image: '@packages/Everlend/logo.png',
  },
  [PackageEnum.Foresight]: {
    name: 'Foresight',
    image: '@packages/Foresight/logo.png',
    isVisibleFn: isForesightVisible,
  },
  [PackageEnum.Friktion]: {
    name: 'Friktion',
    image: '@packages/Friktion/logo.png',
  },
  [PackageEnum.GatewayPlugin]: {
    name: 'GatewayPlugin',
    image: '@packages/GatewayPlugin/logo.png',
  },
  [PackageEnum.GoblinGold]: {
    name: 'GoblinGold',
    image: '@packages/GoblinGold/logo.png',
  },
  [PackageEnum.Mango]: {
    name: 'Mango',
    image: '@packages/Mango/logo.png',
    isVisibleFn: isMangoVisible,
  },
  [PackageEnum.MangoV4]: {
    name: 'MangoV4',
    image: '@packages/MangoV4/logo.png',
  },
  [PackageEnum.Mean]: {
    name: 'Mean',
    image: '@packages/Mean/logo.png',
  },
  [PackageEnum.NftVotingPlugin]: {
    name: 'NftVotingPlugin',
  },
  [PackageEnum.Serum]: {
    name: 'Serum',
    image: '@packages/Serum/logo.png',
  },
  [PackageEnum.Solana]: {
    name: 'Solana',
    image: '@packages/Solana/logo.svg',
  },
  [PackageEnum.Solend]: {
    name: 'Solend',
    image: '@packages/Solend/logo.png',
  },
  [PackageEnum.Streamflow]: {
    name: 'Streamflow',
    image: '@packages/Streamflow/logo.png',
  },
  [PackageEnum.Switchboard]: {
    name: 'Switchboard',
    image: '@packages/Switchboard/logo.png',
  },
  [PackageEnum.Validators]: {
    name: 'Validators',
  },
  [PackageEnum.Vsr]: {
    name: 'Vsr',
  },
  [PackageEnum.bpfUpgradeableLoader]: {
    name: 'bpfUpgradeableLoader',
  },
}

export enum InstructionEnum {
  castleDeposit = 1,
  castleWithdraw,
  changeChangeDonation,
  commonClawback,
  commonCloseTokenAccount,
  commonCreateAssociatedTokenAccount,
  commonCreateTokenMetadata,
  commonCustomBase64,
  commonEmpty,
  commonJoinDAO,
  commonMint,
  commonRealmConfig,
  commonSplTokenTransfer,
  commonTransferDomainName,
  commonUpdateTokenMetadata,
  everlendDeposit,
  everlendWithdraw,
  foresightMakeAddMarketListToCategoryParams,
  foresightMakeInitCategoryParams,
  foresightMakeInitMarketListParams,
  foresightMakeInitMarketParams,
  foresightMakeResolveMarketParams,
  foresightMakeSetMarketMetadataParams,
  friktionClaimPendingDeposit,
  friktionClaimPendingWithdraw,
  friktionDeposit,
  friktionWithdraw,
  gatewayPluginConfigureGateway,
  gatewayPluginCreateRegistrar,
  goblinGoldDeposit,
  goblinGoldWithdraw,
  mangoClaimTokens,
  mangoMakeAddOracle,
  mangoMakeAddSpotMarket,
  mangoMakeChangeMaxAccounts,
  mangoMakeChangePerpMarket,
  mangoMakeChangeQuoteParams,
  mangoMakeChangeReferralFeeParams,
  mangoMakeChangeReferralFeeParams2,
  mangoMakeChangeSpotMarket,
  mangoMakeCreatePerpMarket,
  mangoMakeDepositToMangoAccount,
  mangoMakeDepositToMangoAccountCsv,
  mangoMakeRemoveOracle,
  mangoMakeRemovePerpMarket,
  mangoMakeRemoveSpotMarket,
  mangoMakeSetMarketMode,
  mangoMakeSwapSpotMarket,
  mangoV4EditToken,
  mangoV4PerpCreate,
  mangoV4PerpEdit,
  mangoV4Serum3RegisterMarket,
  mangoV4TokenRegister,
  mangoV4TokenRegisterTrustless,
  meanCreateAccount,
  meanCreateStream,
  meanFundAccount,
  meanSelectStream,
  meanSelectStreamAccount,
  meanTransferStream,
  meanWithdrawFromAccount,
  nftVotingPluginConfigureCollection,
  nftVotingPluginCreateMaxVoterWeightRecord,
  nftVotingPluginCreateRegistrar,
  serumGrantForm,
  serumInitUser,
  serumUpdateConfigAuthority,
  serumUpdateConfigParams,
  solanaSagaPreOrder,
  solendCreateObligationAccount,
  solendDepositReserveLiquidityAndObligationCollateral,
  solendInitObligationAccount,
  solendRefreshObligation,
  solendRefreshReserve,
  solendWithdrawObligationCollateralAndRedeemReserveLiquidity,
  streamflowCancelStream,
  streamflowCreateStream,
  switchboardAdmitOracle,
  switchboardRevokeOracle,
  validatorsDactivateStake,
  validatorsStakeValidator,
  validatorsWithdrawStake,
  vsrCreateRegistrar,
  vsrVotingMintConfig,
  bpfUpgradeableLoaderProgramUpgrade,
  bpfUpgradeableLoaderProgramUpgradeInfo,
}

export const instructionsMap: InstructionsMap = {
  [InstructionEnum.castleDeposit]: {
    name: 'Deposit',
    packageId: PackageEnum.Castle,
  },
  [InstructionEnum.castleWithdraw]: {
    name: 'Withdraw',
    packageId: PackageEnum.Castle,
  },
  [InstructionEnum.changeChangeDonation]: {
    name: 'Change Donation',
    packageId: PackageEnum.Change,
  },
  [InstructionEnum.commonClawback]: {
    name: 'Clawback',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonCloseTokenAccount]: {
    name: 'Close Token Account',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonCreateAssociatedTokenAccount]: {
    name: 'Create Associated Token Account',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonCreateTokenMetadata]: {
    name: 'Create Token Metadata',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonCustomBase64]: {
    name: 'Custom Base64',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonEmpty]: {
    name: 'Empty',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonJoinDAO]: {
    name: 'Join D A O',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonMint]: {
    name: 'Mint',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonRealmConfig]: {
    name: 'Realm Config',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonSplTokenTransfer]: {
    name: 'Spl Token Transfer',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonTransferDomainName]: {
    name: 'Transfer Domain Name',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.commonUpdateTokenMetadata]: {
    name: 'Update Token Metadata',
    packageId: PackageEnum.Common,
  },
  [InstructionEnum.everlendDeposit]: {
    name: 'Deposit',
    packageId: PackageEnum.Everlend,
  },
  [InstructionEnum.everlendWithdraw]: {
    name: 'Withdraw',
    packageId: PackageEnum.Everlend,
  },
  [InstructionEnum.foresightMakeAddMarketListToCategoryParams]: {
    name: 'Make Add Market List To Category Params',
    packageId: PackageEnum.Foresight,
  },
  [InstructionEnum.foresightMakeInitCategoryParams]: {
    name: 'Make Init Category Params',
    packageId: PackageEnum.Foresight,
  },
  [InstructionEnum.foresightMakeInitMarketListParams]: {
    name: 'Make Init Market List Params',
    packageId: PackageEnum.Foresight,
  },
  [InstructionEnum.foresightMakeInitMarketParams]: {
    name: 'Make Init Market Params',
    packageId: PackageEnum.Foresight,
  },
  [InstructionEnum.foresightMakeResolveMarketParams]: {
    name: 'Make Resolve Market Params',
    packageId: PackageEnum.Foresight,
  },
  [InstructionEnum.foresightMakeSetMarketMetadataParams]: {
    name: 'Make Set Market Metadata Params',
    packageId: PackageEnum.Foresight,
  },
  [InstructionEnum.friktionClaimPendingDeposit]: {
    name: 'Claim Pending Deposit',
    packageId: PackageEnum.Friktion,
  },
  [InstructionEnum.friktionClaimPendingWithdraw]: {
    name: 'Claim Pending Withdraw',
    packageId: PackageEnum.Friktion,
  },
  [InstructionEnum.friktionDeposit]: {
    name: 'Deposit',
    packageId: PackageEnum.Friktion,
  },
  [InstructionEnum.friktionWithdraw]: {
    name: 'Withdraw',
    packageId: PackageEnum.Friktion,
  },
  [InstructionEnum.gatewayPluginConfigureGateway]: {
    name: 'Configure Gateway',
    packageId: PackageEnum.GatewayPlugin,
  },
  [InstructionEnum.gatewayPluginCreateRegistrar]: {
    name: 'Create Registrar',
    packageId: PackageEnum.GatewayPlugin,
  },
  [InstructionEnum.goblinGoldDeposit]: {
    name: 'Deposit',
    packageId: PackageEnum.GoblinGold,
  },
  [InstructionEnum.goblinGoldWithdraw]: {
    name: 'Withdraw',
    packageId: PackageEnum.GoblinGold,
  },
  [InstructionEnum.mangoClaimTokens]: {
    name: 'Claim Tokens',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeAddOracle]: {
    name: 'Make Add Oracle',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeAddSpotMarket]: {
    name: 'Make Add Spot Market',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeChangeMaxAccounts]: {
    name: 'Make Change Max Accounts',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeChangePerpMarket]: {
    name: 'Make Change Perp Market',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeChangeQuoteParams]: {
    name: 'Make Change Quote Params',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeChangeReferralFeeParams]: {
    name: 'Make Change Referral Fee Params',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeChangeReferralFeeParams2]: {
    name: 'Make Change Referral Fee Params2',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeChangeSpotMarket]: {
    name: 'Make Change Spot Market',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeCreatePerpMarket]: {
    name: 'Make Create Perp Market',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeDepositToMangoAccount]: {
    name: 'Make Deposit To Mango Account',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeDepositToMangoAccountCsv]: {
    name: 'Make Deposit To Mango Account Csv',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeRemoveOracle]: {
    name: 'Make Remove Oracle',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeRemovePerpMarket]: {
    name: 'Make Remove Perp Market',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeRemoveSpotMarket]: {
    name: 'Make Remove Spot Market',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeSetMarketMode]: {
    name: 'Make Set Market Mode',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoMakeSwapSpotMarket]: {
    name: 'Make Swap Spot Market',
    packageId: PackageEnum.Mango,
  },
  [InstructionEnum.mangoV4EditToken]: {
    name: 'Edit Token',
    packageId: PackageEnum.MangoV4,
  },
  [InstructionEnum.mangoV4PerpCreate]: {
    name: 'Perp Create',
    packageId: PackageEnum.MangoV4,
  },
  [InstructionEnum.mangoV4PerpEdit]: {
    name: 'Perp Edit',
    packageId: PackageEnum.MangoV4,
  },
  [InstructionEnum.mangoV4Serum3RegisterMarket]: {
    name: 'Serum3 Register Market',
    packageId: PackageEnum.MangoV4,
  },
  [InstructionEnum.mangoV4TokenRegister]: {
    name: 'Token Register',
    packageId: PackageEnum.MangoV4,
  },
  [InstructionEnum.mangoV4TokenRegisterTrustless]: {
    name: 'Token Register Trustless',
    packageId: PackageEnum.MangoV4,
  },
  [InstructionEnum.meanCreateAccount]: {
    name: 'Create Account',
    packageId: PackageEnum.Mean,
  },
  [InstructionEnum.meanCreateStream]: {
    name: 'Create Stream',
    packageId: PackageEnum.Mean,
  },
  [InstructionEnum.meanFundAccount]: {
    name: 'Fund Account',
    packageId: PackageEnum.Mean,
  },
  [InstructionEnum.meanSelectStream]: {
    name: 'Select Stream',
    packageId: PackageEnum.Mean,
  },
  [InstructionEnum.meanSelectStreamAccount]: {
    name: 'Select Stream Account',
    packageId: PackageEnum.Mean,
  },
  [InstructionEnum.meanTransferStream]: {
    name: 'Transfer Stream',
    packageId: PackageEnum.Mean,
  },
  [InstructionEnum.meanWithdrawFromAccount]: {
    name: 'Withdraw From Account',
    packageId: PackageEnum.Mean,
  },
  [InstructionEnum.nftVotingPluginConfigureCollection]: {
    name: 'Configure Collection',
    packageId: PackageEnum.NftVotingPlugin,
  },
  [InstructionEnum.nftVotingPluginCreateMaxVoterWeightRecord]: {
    name: 'Create Max Voter Weight Record',
    packageId: PackageEnum.NftVotingPlugin,
  },
  [InstructionEnum.nftVotingPluginCreateRegistrar]: {
    name: 'Create Registrar',
    packageId: PackageEnum.NftVotingPlugin,
  },
  [InstructionEnum.serumGrantForm]: {
    name: 'Grant Form',
    packageId: PackageEnum.Serum,
  },
  [InstructionEnum.serumInitUser]: {
    name: 'Init User',
    packageId: PackageEnum.Serum,
  },
  [InstructionEnum.serumUpdateConfigAuthority]: {
    name: 'Update Config Authority',
    packageId: PackageEnum.Serum,
  },
  [InstructionEnum.serumUpdateConfigParams]: {
    name: 'Update Config Params',
    packageId: PackageEnum.Serum,
  },
  [InstructionEnum.solanaSagaPreOrder]: {
    name: 'Saga Pre Order',
    packageId: PackageEnum.Solana,
  },
  [InstructionEnum.solendCreateObligationAccount]: {
    name: 'Create Obligation Account',
    packageId: PackageEnum.Solend,
  },
  [InstructionEnum.solendDepositReserveLiquidityAndObligationCollateral]: {
    name: 'Deposit Reserve Liquidity And Obligation Collateral',
    packageId: PackageEnum.Solend,
  },
  [InstructionEnum.solendInitObligationAccount]: {
    name: 'Init Obligation Account',
    packageId: PackageEnum.Solend,
  },
  [InstructionEnum.solendRefreshObligation]: {
    name: 'Refresh Obligation',
    packageId: PackageEnum.Solend,
  },
  [InstructionEnum.solendRefreshReserve]: {
    name: 'Refresh Reserve',
    packageId: PackageEnum.Solend,
  },
  [InstructionEnum.solendWithdrawObligationCollateralAndRedeemReserveLiquidity]: {
    name: 'Withdraw Obligation Collateral And Redeem Reserve Liquidity',
    packageId: PackageEnum.Solend,
  },
  [InstructionEnum.streamflowCancelStream]: {
    name: 'Cancel Stream',
    packageId: PackageEnum.Streamflow,
  },
  [InstructionEnum.streamflowCreateStream]: {
    name: 'Create Stream',
    packageId: PackageEnum.Streamflow,
  },
  [InstructionEnum.switchboardAdmitOracle]: {
    name: 'Admit Oracle',
    packageId: PackageEnum.Switchboard,
  },
  [InstructionEnum.switchboardRevokeOracle]: {
    name: 'Revoke Oracle',
    packageId: PackageEnum.Switchboard,
  },
  [InstructionEnum.validatorsDactivateStake]: {
    name: 'Dactivate Stake',
    packageId: PackageEnum.Validators,
  },
  [InstructionEnum.validatorsStakeValidator]: {
    name: 'Stake Validator',
    packageId: PackageEnum.Validators,
  },
  [InstructionEnum.validatorsWithdrawStake]: {
    name: 'Withdraw Stake',
    packageId: PackageEnum.Validators,
  },
  [InstructionEnum.vsrCreateRegistrar]: {
    name: 'Create Registrar',
    packageId: PackageEnum.Vsr,
  },
  [InstructionEnum.vsrVotingMintConfig]: {
    name: 'Voting Mint Config',
    packageId: PackageEnum.Vsr,
  },
  [InstructionEnum.bpfUpgradeableLoaderProgramUpgrade]: {
    name: 'Program Upgrade',
    packageId: PackageEnum.bpfUpgradeableLoader,
  },
  [InstructionEnum.bpfUpgradeableLoaderProgramUpgradeInfo]: {
    name: 'Program Upgrade Info',
    packageId: PackageEnum.bpfUpgradeableLoader,
  },
}
