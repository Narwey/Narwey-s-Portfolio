import React from 'react'
import hero from '../assets/hero.svg'
import SocialBtn from './shared/SocialBtn'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <section className='container flex sm:gap-7 md:gap-14 lg:gap-36 flex-col-reverse sm:flex-row justify-between py-9 sm:py-16'>
            <div>
                <h1 className='mt-9 sm:mt-0 leading-normal text-2xl sm:text-3xl md:leading-snug xl:text-5xl xl:leading-relaxed'>
                    Hello I’am <span className='font-extrabold'>Anouar Benmbark.</span><br />
                    <span className='font-extrabold'>Fullstack</span> Developer<br />
                    Based In <span className='font-extrabold'>Morocco.</span>
                </h1>
                <p className='mt-6 md:text-sm text-xs text-[#71717A]'>I'm Anouar Benmbark, a 24-year-old full-stack developer with a degree in Mathematics and Computer Science. After my degree, I joined a bootcamp where I mastered the MERN stack (React.js, Node.js, Express.js, MongoDB) and developed projects, including a blogging platform with user interaction features and an admin interface, and a marketplace for artisans to sell handmade products securely online. I then interned as a frontend developer at UP2CAREER, further enhancing my skills. Noticing the demand for PHP Laravel in Morocco, I completed a Simplon training in Laravel and Vue.js, during which I built projects like a weather app and a recruitment platform. I'm now seeking a role to apply my skills in a dynamic company.</p>
                <div className='flex flex-wrap gap-8 mt-9'>
                    <SocialBtn icon={FaGithub} link='https://github.com/Narwey'/>
                    <SocialBtn icon={FaLinkedin} link='https://www.linkedin.com/in/anouarben/'/>
                </div>
            </div>
            <div className='mx-auto sm:min-w-max'>
                <img src={hero} alt='hero' />
            </div>
        </section>
    )
}

export default Hero