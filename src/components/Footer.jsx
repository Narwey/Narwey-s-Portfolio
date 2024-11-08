import React from 'react'
import whiteLogo from '../assets/white-logo.svg'
import SocialBtn from './shared/SocialBtn';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className='py-4 bg-black text-white'>
        <div className='container flex justify-between items-center'>
            <img src={whiteLogo} alt="white logo" />
              <a href="/cv.pdf" download>
              <button
                className="items-center gap-2 bg-black text-white px-2 py-3 rounded-md font-semibold text-lg border-1 border-white 
              hover:bg-[#404040] active:bg-white active:text-black flex"
              >
                Resume <RxDownload size={25} />
              </button>
            </a>              
        </div>
    </footer>
  )
}

export default Footer