import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    AlignJustify,
    ArrowRight,
    BarChart,
    Building2,
    Camera,
    ChevronDown,
    Code,
    Code2Icon,
    DollarSign,
    Download,
    GraduationCap,
    Headphones,
    Home,
    Info,
    LibrarySquare,
    LifeBuoy,
    Lock,
    Newspaper,
    PaintBucket,
    Settings,
    Smile,
    Sparkles,
    UserCircle2,
    UserPlus
} from 'lucide-react';

import {Accordion, AccordionContent, AccordionItem,AccordionTrigger} from "@/components/ui/accordion";

interface DropdownMenuProps {
    onClose: () => void;
}

const DropdownMenu : React.FC<DropdownMenuProps> = ({onClose}) => {
    const handleLinkClick =() => {
        onClose();
    }

    return(
        <div className="w-screen h-screen bg-white pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden">
            <Accordion className="pl-2" type="single" collapsible>
                <AccordionItem className="my-6 border-b" value="item-1">
                    <AccordionTrigger>Products</AccordionTrigger>
                    <AccordionContent>
                        <Link href={"/onchain-llms"}
                        className="flex pt-10"
                        onClick={handleLinkClick}>
                            <div>
                                <LibrarySquare className="h-6 w-6 mr-4 text-red-400"/>
                            </div>
                            <div>
                                onChain LLMs
                            </div>
                        </Link>
                    </AccordionContent>
                    <AccordionContent>
                        <Link href={"/onchain-vectordb"}
                        className="flex pt-10"
                        onClick={handleLinkClick}>
                            <div>
                                <Download className="h-6 w-6 mr-4 text-green-400"/>
                            </div>
                            <div>
                                OnChain VectorDB
                            </div>
                        </Link>
                    </AccordionContent>
                    <AccordionContent>
                        <Link href={"/onchain-embeddings"}
                        className="flex pt-10"
                        onClick={handleLinkClick}>
                            <div>
                                <Code2Icon className="h-6 w-6 mr-4 text-amber-400"/>
                            </div>
                            <div>
                                OnChain Embeddings
                            </div>
                        </Link>
                    </AccordionContent>
                    <AccordionContent>
                        <Link href={"/onchain-datasets"}
                        className="flex pt-10"
                        onClick={handleLinkClick}>
                            <div>
                                <LifeBuoy className="h-6 w-6 mr-4 text-blue-400"/>
                            </div>
                            <div>
                                OnChain Datasets
                            </div>
                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="my-6 border-b" value="item-1">
                    <AccordionTrigger>Use Cases</AccordionTrigger>
                    <AccordionContent>
                        <Link href={"/chatbot-dApps"}
                        className="flex pt-10"
                        onClick={handleLinkClick}>
                            <div>
                                <UserCircle2 className="h-6 w-6 mr-4 text-red-400"/>
                            </div>
                            <div>
                                Chatbot dApps
                            </div>
                        </Link>
                    </AccordionContent>
                    <AccordionContent>
                        <Link href={"/semantic-web3"}
                        className="flex pt-10"
                        onClick={handleLinkClick}>
                            <div>
                                <Info className="h-6 w-6 mr-4 text-green-400"/>
                            </div>
                            <div>
                                Semantic web3
                            </div>
                        </Link>
                    </AccordionContent>
                    <AccordionContent>
                        <Link href={"/oracle-agents"}
                        className="flex pt-10"
                        onClick={handleLinkClick}>
                            <div>
                                <Sparkles className="h-6 w-6 mr-4 text-amber-400"/>
                            </div>
                            <div>
                                Oracle Agents
                            </div>
                        </Link>
                    </AccordionContent>
                    <AccordionContent>
                        <Link href={"/knowledge-nfts"}
                        className="flex pt-10"
                        onClick={handleLinkClick}>
                            <div>
                                <Newspaper className="h-6 w-6 mr-4 text-blue-400"/>
                            </div>
                            <div>
                                Knowledge NFTs
                            </div>
                        </Link>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Link href={"/whitepaper"} className="flex flex-1 items-center justify-between text-xl px-6 py-4 my-6 border-b">
                WhitePaper
                <div>
                    <ArrowRight className="h-6 w-6"/>
                </div>
            </Link>
            <Link href={"/launching-soon"} className="flex flex-1 items-center justify-between text-xl px-6 py-4 my-6 border-b">
                Launching Soon
                <div>
                    <ArrowRight className="h-6 w-6"/>
                </div>
            </Link>
            {/* <Link href={"/contact"} className="flex flex-1 items-center justify-between text-xl px-6 py-4 my-6 border-b">
                Contact
                <div>
                    <ArrowRight className="h-6 w-6"/>
                </div>
            </Link> */}
        </div>
    )
}

export default DropdownMenu;