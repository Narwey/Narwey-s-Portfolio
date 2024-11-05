import React from 'react'
import basicDept from '../assets/basic-dept.png'
import velvetClouds from '../assets/velvet-clouds.png'
import liquidArtistry from '../assets/liquid-artistry.png'
import weather from '../assets/weather2.png'
import up2career from '../assets/up2career.png'
import serdina from '../assets/serdina.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        name: 'Up2caarer Web Site',
        description: "Up2career is a website developed by my colleagues and me at the Up2career startup. We built it using React.js and Tailwind CSS, focusing on delivering a seamless user experience and a modern, responsive design.",
        image: up2career,
        url: 'https://up2career.com/fr/'
    },
    {
        name: 'Weather Application',
        description: "This weather app offers a sleek, dark-themed interface displaying real-time weather details such as temperature, air quality, humidity, and a 5-day forecast. With dynamic icons and intuitive navigation, it provides a quick, user-friendly experience for staying updated on weather conditions.",
        image: weather,
        url: 'https://weather-narwey.netlify.app/'
    },
    {
        name: 'Static Bank',
        description: "This landing page for the bank is a showcase of transforming a Figma design into a functional web page using HTML, CSS, and JavaScript. It highlights a visually appealing and responsive layout, bringing the design concept to life with clean code and interactive elements.",
        image: serdina,
        url: 'https://bank-statique.netlify.app/'
    }
]

export const Projects = () => {
    return (
        <section className='mb-16 py-20 bg-black' id='projects'>
            <h2 className='text-5xl text-white text-center mb-10 sm:mb-20'>My <span className='font-extrabold'>Projects</span></h2>

            <div className='container'>
                {projects.map((project, index) => (
                    <div key={index} className={`flex flex-col m-auto justify-between items-center gap-14 mt-32 lg:mt-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        <div className='w-full'>
                            <a href={project.url} target='_blank'><img src={project.image} alt="project image" className='w-full' /></a>
                        </div>
                        <div className='text-white w-full'>
                            <span className='block font-extrabold text-5xl mb-8'>{String(index + 1).padStart(2, '0')}</span>
                            <h3 className='font-bold text-4xl mb-5'>{project.name}</h3>
                            <p className='text-[#71717A]'>{project.description}</p>
                            <a href={project.url} target='_blank' className='block mt-5'><FaExternalLinkAlt color='white'/></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
