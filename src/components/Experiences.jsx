import React from 'react'
import tythonlogo from '../assets/tython-removebg.png'
import up2careerlogo from '../assets/logo1.png'
import arkxlogo from '../assets/download-removebg-preview.png'

function Experiences() {
    return (
        <section className='mt-24 py-20 bg-black' id='Experiences'>
            <h2 className='text-5xl text-white text-center mb-10 sm:mb-20'>My <span className='font-extrabold'>Experience</span></h2>
            
            <div className='container'>
                <Experience 
                    companyLogo={tythonlogo} 
                    jobName='Fullstack Developer Intern at Tython' 
                    description={[
                        "Developed a web application featuring chatbots and an image generator with a subscription model, aimed at banks and companies to help employees better understand societal needs.",
                        "Built backend using Express.js and managed data with Supabase (PostgreSQL).",
                        "Created server-side logic to handle data requests and responses efficiently.",
                        "Structured data models and relationships within the database to support application needs.",
                        "Implemented secure API endpoints for seamless backend-to-frontend communication.",
                        "Developed dynamic, interactive user interfaces with React.js for enhanced user experience.",
                        "Integrated backend functionality with responsive frontend design to deliver a cohesive and engaging application."
                    ]}
                    skills={['Express.js', 'Supabase', 'PostgreSQL', 'React.js', 'API Development']}
                />
                <Experience 
                    companyLogo={up2careerlogo} 
                    jobName='Fullstack Developer Intern at Up2career' 
                    description={[
                        "Developed the website for Up2Career, a platform presenting the startup's focus on SAP training and certification.",
                        "Involved in the design and development of the Up2career.com platform using React.js and Node.js.",
                        "Integrated APIs and created dynamic features to enhance user interactivity.",
                        "Managed the project end-to-end, including version control with GitHub.",
                        "Focused on delivering a seamless and interactive user experience across the full development stack."
                    ]}
                    skills={['React.js', 'Node.js', 'API Integration', 'GitHub', 'Full Stack Development']}
                />
                <Experience 
                    companyLogo={arkxlogo} 
                    jobName='Fullstack Developer Intern at Ark-X Talent Factory' 
                    description={[
                        "Developed a web application for e-commerce focused on selling artisanal and homemade products.",
                        "Responsible for backend development using Node.js and Express.js, with data management through MongoDB.",
                        "Created responsive and visually appealing interfaces on the frontend with React.js and Tailwind CSS.",
                        "Delivered a cohesive and efficient application by working across both backend and frontend layers."
                    ]}
                    skills={['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Tailwind CSS']}
                />
            </div>
        </section>
    )
}

const Experience = ({ companyLogo: CompanyLogo, jobName, description, skills }) => {
    const [firstDescription, ...remainingDescriptions] = description;

    return (
        <div className='group rounded-md border border-[#71717A] px-4 py-6 mb-6' >
            <div className='flex items-center gap-8 mb-5'>
                <div className='max-w-28 sm:max-w-32'>
                    <img src={CompanyLogo} alt="company logo" />
                </div>
                <h3 className='font-semibold text-white text-xl sm:text-2xl'>{jobName}</h3>
            </div>
            <p className='text-[#D4D4D8] mb-4 pl-6'>{firstDescription}</p>
            <ul className='text-[#D4D4D8] list-disc pl-14 space-y-2 mb-4'>
                {remainingDescriptions.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <div className='flex flex-wrap gap-4 pl-10'>
                {skills.map((skill, index) => (
                    <div key={index} className='border border-[#4B5563] text-white px-4 py-2 rounded-lg text-center font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-[#4B5563]/50'>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences