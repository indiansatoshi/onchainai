import Image from "next/image";
import Link from "next/link";

const BottomSection = () => {
    return ( 
        <div>
            <section className="flex flex-col md:flex p-10 md:py-20 md:items-center md:justify-center bg-[#EFF0FF]">
                <div className="md:flex md:space-x-28 md:px-0 md:py-20">
                    <div className="flex-col space-y-6 flex text-[#3d2e7c]">
                        <div className="pt-10">Products</div>
                            <div className="font-light space-y-4 text-sm">
                                <div>onChain LLMs</div>
                                <div>onChain VectorDB</div>
                                <div>onChain Embeddings</div>
                                <div>onchain Datasets</div>
                            </div>
                    </div>
                    <div className="flex-col space-y-6 flex text-[#3d2e7c]">
                        <div className="pt-10">Use Cases</div>
                            <div className="font-light space-y-4 text-sm">
                                <div>Chatbot dApps</div>
                                <div>Semantic web3</div>
                                <div>Oracle Agents</div>
                                <div>Knowledge NFTs</div>
                            </div>
                    </div>
                    <div className="flex-col space-y-6 flex">
                        <Link href={"/"}>
                            <Image
                                src="/process.svg"
                                alt="AI"
                                width={600}
                                height={200}
                                className="w-80"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default BottomSection;