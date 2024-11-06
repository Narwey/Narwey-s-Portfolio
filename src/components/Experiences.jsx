import React from 'react'
import tythonlogo from '../assets/tython-removebg.png'
import up2careerlogo from '../assets/logo1.png'
import arkxlogo from '../assets/download-removebg-preview.png'




function Experiences() {
    return (
        <section className='mt-24 py-20 bg-black' id='experience'>
            <h2 className='text-5xl text-white text-center mb-10 sm:mb-20'>My <span className='font-extrabold'>Experience</span></h2>
            
            <div className='container'>
                <Experience companyLogo={tythonlogo} jobName='Fullstack developper Intern at Tython' description='As a Full Stack Developer at Tython, I was responsible for building the backend using Express.js and managing data with Supabase (PostgreSQL). My role involved creating server-side logic to handle data requests and responses, structuring data models and relationships in the database, and implementing secure API endpoints for seamless communication between the backend and frontend. On the frontend, I developed dynamic user interfaces with React.js, integrating interactive components to enhance user experience. This role allowed me to bring together backend functionality and responsive frontend design, ensuring a cohesive and engaging application for users.'/>
                <Experience companyLogo={up2careerlogo} jobName='Fullstack developper Intern at Up2career' description='As a Full Stack Developer at Up2career, I was involved in the design and development of the Up2career.com platform using React.js and Node.js. My responsibilities included API integration and the creation of dynamic features to enhance user interactivity. I managed the project end-to-end, including version control with GitHub, ensuring efficient collaboration and smooth project progression. This role enabled me to work across the full development stack, focusing on delivering a seamless and interactive user experience.'/>
                <Experience companyLogo={arkxlogo} jobName='Fullstack developper Intern at Ark-X Talent Factory' description='As a Full Stack Developer at Arkx, I was responsible for backend development using Node.js and Express.js, with data management handled through MongoDB. On the frontend, I utilized React.js and Tailwind CSS to create responsive and visually appealing interfaces. This role involved working across both backend and frontend layers to deliver a cohesive and efficient application.'/>
            </div>
        </section>
    )
}

const Experience = ({companyLogo: CompanyLogo, jobName, description}) => {
    return (
        <div className='group rounded-md border border-[#71717A] px-4 py-6 mb-6'>
            <div className='flex items-center gap-8 mb-5'>
                <div className='max-w-28 sm:max-w-32'>
                    <img src={CompanyLogo} alt="company logo" />
                </div>
                <h3 className='font-semibold text-white text-xl sm:text-2xl'>{jobName}</h3>
            </div>
            <p className='text-[#D4D4D8]'>{description}</p>
        </div>
    )
}

export default Experiences