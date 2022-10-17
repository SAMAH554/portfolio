import { motion, MotionConfig } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left
    md-flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[15px] text-center text-gray-500 text-2xl xl:text-3xl'>About</h3>
      <motion.img
      initial={{
        x: -200,
        opacity:0,
      }}
      transition={{
        duration:1,
      }}
      whileInView={{
        opacity:1,
        x:0
      }} 
      viewport={{ once:true }}
      src="https://i.postimg.cc/bwfnfgSr/IMG-20221014-150026092-Curly-Hair.jpg"
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
       md:rounded-lg xl:rounded-full'/>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='relative text-4xl font-semibold text-center'>
          Here is a little background
        </h4>
        <p className='text-base text-center'>Hi, I'm Samah.A 2022 Graduate Computer Science Engineer.A versatile and proffesional software graduate with a 
           commitment to and experience of developing innovative and creative 
           software solutions.Able to perform full software development life cycle
           activities.Proficient in variety of platforms and languages,with an innate 
           ability to learn and master new technologies.</p>
      </div>
      </div>
  )
}