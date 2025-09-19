
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Agenda from "./components/Agenda";
import PopUp from "./components/PopUp";
import Newsletter from "./components/Newsletter";
import ResponsiveMenu from "./components/ResponsiveMenu";

export default function Home() {
  return (
    <>
    <ResponsiveMenu/>
    <Hero/>
    <Navbar/>
    <PopUp/>
    <div id="content" className="relative flex flex-col lg:flex-row items-start justify-center p-[2vw]  ">
    <Agenda/>
        <Articles/>
    </div>
    <Newsletter/>
    <Footer/>
    
    </>
  );
}
