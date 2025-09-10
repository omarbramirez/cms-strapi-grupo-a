import Image from "next/image";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Agenda from "./components/Agenda";

export default function Home() {
  return (
    <>
    <Hero/>
    <Navbar/>
    {/* <Articles/> */}
    <Agenda/>
    <Footer/>
    
    </>
  );
}
