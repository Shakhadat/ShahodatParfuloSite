import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';

const HeaderSocials=()=>{
    return(
        <>
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/shahodat-omanova-43b564233" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/Shakhadat" target='_blank'><BsGithub/></a>
            <a href="https://tashkent.hh.uz/resume/c3d83768ff07bf87a40039ed1f4b62366b6e56" target='_blank'><BsTelegram/></a>
        </div>
        
        </>
    );
}

export default HeaderSocials;

