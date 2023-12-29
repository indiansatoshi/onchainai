import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import Sliders from "./_components/slider/sliders";
import Footer from "@/components/ui/footer";

const LandingPage = () => {
    return ( <div>
        <Navbar/>
        <FirstSection/>
        <Sliders/>
        <Footer/>
    </div> );
}
 
export default LandingPage;