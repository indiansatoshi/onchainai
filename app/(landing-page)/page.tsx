import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import Sliders from "./_components/slider/sliders";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";

const LandingPage = () => {
    return ( <div>
        <Navbar/>
        <FirstSection/>
        <Sliders/>
        <SecondSection/>
        <ThirdSection/>
        <BottomSection/>
        <Footer/>
    </div> );
}
 
export default LandingPage;