import React from 'react'
import hero from '../assets/hero.svg'
import SocialBtn from './shared/SocialBtn'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";

function Hero() {
    return (
      <section className="container flex sm:gap-7 md:gap-14 lg:gap-36 flex-col-reverse sm:flex-row justify-between py-9 sm:py-16">
        <div>
          <h1 className="mt-9 sm:mt-0 leading-normal text-2xl sm:text-3xl md:leading-snug xl:text-5xl xl:leading-relaxed">
            Hello I’am <span className="font-extrabold">Anouar Benmbark.</span>
            <br />
            <span className="font-extrabold">Fullstack Developer</span> <br />
            Based In Morocco.
          </h1>
          <p className="mt-6 md:text-sm text-xs text-[#71717A]">
            I'm Anouar Benmbark, a full-stack developer with a background in
            Computer Science. <br /> I’ve honed my backend and frontend skills
            through experience at startups like Tython and UP2CAREER, along with
            intensive bootcamps at Arkx ( MERN stack ) and Simplon ( Laravel and
            Vue.js ). Now, I’m ready to apply my expertise in a dynamic company.
          </p>
          <div className="flex flex-wrap gap-8 mt-9">
            <SocialBtn icon={FaGithub} link="https://github.com/Narwey" />
            <SocialBtn
              icon={FaLinkedin}
              link="https://www.linkedin.com/in/anouarben/"
            />
            <a href="/cv.pdf" download>
              <button
                className="lg:hidden items-center gap-2 bg-black text-white px-2 py-3 rounded-md font-semibold text-lg border-2 border-black 
              hover:bg-[#404040] active:bg-white active:text-black flex"
              >
                Resume <RxDownload size={25} />
              </button>
            </a>
          </div>
        </div>
        <div className="mx-auto sm:min-w-max">
          <img src={hero} alt="hero" />
        </div>
      </section>
    );
}

export default Hero