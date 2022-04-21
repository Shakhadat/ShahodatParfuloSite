import React from "react";
import './Header.css';
import CTA from './CTA';
import me from '../../assets/me.png';
import HeaderSocials from "./HeaderSocials";

const Header=()=>{
    return(
        <>
        
    <header>
        <div className="container header_container">
            <h5>Hello I am</h5>
            <h1>Shahodat Omanova</h1>
            <h5 className="text-light">Front-end developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
            <img src={me} alt="my picture" />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
        </div>
    </header>
        </>
    );
}
export default Header;