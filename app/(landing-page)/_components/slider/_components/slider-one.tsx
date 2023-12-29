'use client'

import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';

const SliderOne = () => {
    return ( <div>
        <Slider width='200px' duration={60}>
            <Slider.Slide>
                <Image src='/logos/algorand-algo-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/aptos-apt-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/arbitrum-arb-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/avalanche-avax-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/bitcoin-btc-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/bnb-bnb-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/cardano-ada-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/cosmos-atom-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/eos-eos-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/ethereum-eth-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/gnosis-gno-gno-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/hedera-hbar-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/internet-computer-icp-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/mantle-mnt-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/near-protocol-near-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/optimism-ethereum-op-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/polkadot-new-dot-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/polygon-matic-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/solana-sol-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/stacks-stx-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/tezos-xtz-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
            <Slider.Slide>
                <Image src='/logos/tron-trx-logo.svg' width={100} height={100} alt='logo' className="w-16 h-16"/>
            </Slider.Slide>
        </Slider>
    </div> );
}
 
export default SliderOne;