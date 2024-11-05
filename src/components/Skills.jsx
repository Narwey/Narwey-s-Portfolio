import React from 'react'
import { FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const skills = [
    { icon: FaHtml5, name: 'Html5' },
    { icon: FaCss3, name: 'Css3' },
    { icon: RiTailwindCssFill, name: 'Tailwind CSS' },
    { icon: FaJs, name: 'Javascript' },
    { icon: SiTypescript, name: 'Typescript' },
    { icon: FaNode, name: 'Node.js' },
    { icon: SiExpress, name: 'Express.js' },
    { icon: SiMongodb, name: 'Mongodb.js' },
    { icon: FaReact, name: 'React.js' },
    { icon: FaPhp, name: 'PHP' },
    { icon: FaLaravel, name: 'Laravel' },
    { icon: SiMysql, name: 'MySQL' },
    { icon: FaVuejs, name: 'Vue js' },
    { icon: FaGit, name: 'Git' },
    { icon: FaGithub, name: 'Github' },
    { icon: IoLogoDocker , name:'Docker'}

    
];

function Skills() {
    return (
        <section className='container mt-9' id='skills'>
            <h2 className='text-5xl text-center mb-10 sm:mb-20'>My <span className='font-extrabold'>Skills</span></h2>
            <div className='grid 
            grid-cols-2 gap-y-10
            sm:grid-cols-3 gap-x-5
            md:grid-cols-4 lg:gap-x-10
            lg:grid-cols-5 xl:gap-x-24
            '>
                {skills.map((skill, index) => (
                    <Skill key={index} icon={skill.icon} name={skill.name} />
                ))}
            </div>
        </section>
    )
}

function Skill({icon: Icon, name}) {
    return (
        <div className='
            py-7 
            rounded-md 
            border-2 
            border-black 
            bg-white 
            text-black 
            hover:border-white 
            hover:bg-black 
            hover:text-white 
            transition-all 
            duration-300
        '>
            <Icon size={50} className='mx-auto'/>
            <p className='text-center mt-6 font-bold text-lg'>{name}</p>
        </div>
    )
}

export default Skills