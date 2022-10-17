import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{
        y:100,
        opacity:0
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once: true}}
      className="w-32 h-32 rounded-all xl:w-[200px] xl:h-[200px] object-cover object-center bg-white rounded-full"
      src="https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/6863083-large.png"
      alt="" />
      <div className='px-0 md:px-10'>
        <h4 className='=text-4l font-light'>Application Developer Intern</h4>
        <p className='font-bold text-2xl mt-1'>Blueline Computers</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full'
            src='https://www.xda-developers.com/files/2018/02/Flutter-Framework-Feature-Image-Background-Colour.png'/>
            <img className='h-10 w-10 rounded-full'
            src='https://opensource.google/images/projects/os-projects-dart.svg'/>
        </div>
        <p className='uppercase py-5 text-gray-300'>Aug 2021 - Sept 2021</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Got introduced to ui/ux methodologies</li>
          <li>Learned a lot about the flutter framework.</li>
          <li>Interacted with Sr devs for 💯 performance</li>
          <li>Got Familiarised with android studio IDE</li>
          <li>Projects:Media Playback Application</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard