import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SecondSection = () => {
    return ( 
        <div className="flex items-center justify-center">
            <div className="w-full md:w-5/6 md:rounded-[80px] bg-[#2b1c50]">
                <div className="md:py-40">
                    <div className="md:py-40">
                        <div className="md:flex md:px-20 px-5 md:space-x-20 md:space-y-0">
                            <div className="md:w-1/2">
                                <Image src='/world.svg' alt="image" width={1920} height={1080} className="object-cover rounded-md w-full p-10"/>
                            </div>
                            <div className="text-white flex space-y-10 md:w-1/2">
                                <div className="md:space-y-10 flex flex-col px-4 py-10">
                                    <div className="text-5xl md:text-7xl pb-4 md:pb-0">onChain AI</div>
                                    <div className="text-xl md:text-3xl w-5/6">
                                        Streamline AI with blockchain primitives
                                    </div>
                                    <div className="md:flex pt-10 md:py-10">
                                        <div className="space-y-10">
                                            <div className="flex items-center gap-4">
                                                <Check className="text-3xl text-indigo-500"/>
                                                <span className="text-xl">Cryptographically store & retrieve vector embeddings on blockchain, ensuring data integrity for AI</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <Check className="text-3xl text-indigo-500"/>
                                                <span className="text-xl">Curate, explore & own data as dynamic NFTs on blockchain, enabling data composability for AI</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <Check className="text-3xl text-indigo-500"/>
                                                <span className="text-xl">Validate model data & response feedback through web3 signatures, empowering Gig economy for AI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SecondSection;