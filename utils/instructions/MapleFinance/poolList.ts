import { PublicKey } from '@solana/web3.js'
// import { SplTokenInformation, SPL_TOKENS } from '@utils/splTokens';

// Add new pool name here, example: 'Credora' | 'Foo';
export type PoolName = 'Credora'

/*export type PoolInfo = {
    pool: PublicKey;
    globals: PublicKey;
    poolLocker: PublicKey;
    sharesMint: PublicKey;
    baseMint: SplTokenInformation;
};*/

export type Pools = {
  [key in PoolName]: PublicKey
}

export const pools: Pools = {
  Credora: new PublicKey('TamdAwg85s9aZ6mwSeAHoczzAV53rFokL5FVKzaF1Tb'),

  /*{
        pool: new PublicKey('TamdAwg85s9aZ6mwSeAHoczzAV53rFokL5FVKzaF1Tb'),
        globals: new PublicKey('DtnAPKSHwJaYbFdjYibNcjxihVd6pK1agpT86N5tMVPX'),
        poolLocker: new PublicKey('92oAd9cm4rV4K4Xx9HPRMoFn7GwMaKsjNSPe7QVxywcy'),
        sharesMint: new PublicKey('CesxqgX4BvYudTNU45PArqTgefrRFhE1CwR7ECTDshfY'),
        baseMint: SPL_TOKENS.USDC,
    },*/

  // Add new pool infos here ...
}
