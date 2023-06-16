import React from 'react'
import own from '../images/own.png';

const About = () => {
  return (
    <section className='flex px-4 md:px-8  flex-wrap w-full h-[600px] pt-8 bg-slate-200'>
      <div className='w-1/2'>
        <div className='text-left mt-20'>
            <h1 className=''>About Me</h1>
            <p>I am a Junior Web Programmer with some experience in React JavaScript, Tailwind Css And HTML.</p>
        </div>
      </div>
      <div className='w-1/2'>
        <img src={own} alt=''/>
      </div>
    </section>
  )
}

export default About
