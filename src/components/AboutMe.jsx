import React from 'react'
import aboutMe from '../assets/about-me.svg'

function AboutMe() {
  return (
    <section className='container md:flex gap-20 py-16' id='about-me'>
        <div className='flex-shrink-0 sm:w-1/3'>
            <img src={aboutMe} alt="a man" />
        </div>
        <div>
            <h2 className='text-5xl mb-8'>About <span className='font-extrabold'>Me</span></h2>
            <div className='flex flex-col gap-5 text-[#71717A]'>
                <p>I am a Junior Full Stack Developer with a strong foundation in both frontend and backend technologies, specializing in MERN and PHP/Laravel stacks.</p>
                <p>Passionate about crafting tailored web solutions, I enjoy tackling complex challenges to create impactful applications. With hands-on experience in React.js, Node.js, Laravel, and Vue.js, I aim to bring innovative ideas to life within a dynamic and collaborative environment.</p>
                <p>Currently pursuing a Master’s in Big Data and Cloud Computing, I’m eager to bring my skills to life by joining a forward-thinking company. I am motivated to apply my technical expertise and passion for problem-solving in real-world projects, collaborating with a talented team to drive impactful solutions and continue advancing my abilities in a dynamic professional setting.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe