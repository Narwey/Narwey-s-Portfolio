import React, { useState } from 'react'
import blackLogo from '../assets/black-logo.svg'
import { RxDownload } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
    { name: 'About Me', link: '#about-me' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experiences', link: '#Experiences' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact Me', link: '#contact-me'}
]

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <header>
        <nav className="container flex justify-between items-center py-7">
          <img src={blackLogo} alt="logo" />

          {/* Desktop */}
          <ul className="hidden gap-5 font-semibold text-md lg:flex">
            {links.map((item, index) => (
              <li
                key={index}
                className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>

          <a href="/cv.pdf" download>
            <button
              className="hidden items-center gap-2 bg-black text-white px-4 py-3 rounded-md font-semibold text-xl border-2 border-black 
              hover:bg-[#404040] active:bg-white active:text-black lg:flex"
            >
              Resume <RxDownload size={25} />
            </button>
          </a>

          {/* Mobile Hamburger Icon */}
          <GiHamburgerMenu
            size={25}
            className="block cursor-pointer lg:hidden"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="container lg:hidden flex flex-col items-center gap-5 font-semibold text-md mt-4">
            <ul className="flex flex-col gap-5 w-full text-center">
              {links.map((item, index) => (
                <li
                  key={index}
                  className="relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Resume Button */}
            <a href="/cv.pdf" download>
              <button
                className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-md font-semibold text-xl border-2 border-black 
                hover:bg-[#404040] active:bg-white active:text-black"
              >
                Resume <RxDownload size={25} />
              </button>
            </a>
          </nav>
        )}
      </header>
    );
}

export default NavBar;