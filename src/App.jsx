import React from "react";
import Header from './Components/header/Header'
import Nav from './Components/navbar/Nav';
import About from "./Components/About/About";
import Experience from './Components/Experience/Experience';
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/footer/Footer'

const App =()=>{
    return(
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </>
    );
}
export default App;