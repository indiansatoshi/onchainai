import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return ( <div>
        <section className="md:flex flex-col md:py-10 md:justify-between">
            <div className="p-10 space-y-10 md:space-y-0 md:text-center md:flex justify-between md:px-80 md:px-8- md:space-x-20">
                <div className="text-[#565add]">
                    @2023 onchainAI.io
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <Link href="https://linkedin.com/company/onchainai" target="_blank">
                    <div className="bg-[#565add] p-2 rounded-full">
                        <Linkedin className="h-6 w-6 text-white">
                        </Linkedin>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    </div> );
}
 
export default Footer;