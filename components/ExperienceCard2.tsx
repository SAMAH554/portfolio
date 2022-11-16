import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

function ExperienceCard2({}: Props) {
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
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png"
      alt="" />
      <div className='px-0 md:px-10'>
        <h4 className='text-4l font-light text-center'>Software Dev</h4>
        <p className='font-bold text-2xl mt-1'>Who&apos;s Next ?</p>
        <div className='flex space-x-2 my-2 justify-center'>
          <img className='h-10 w-10'
            src='https://i.pinimg.com/originals/e4/8c/f0/e48cf05569eb0721766a35331a6456f2.jpg'/>
          
        </div>
       

          
      
      </div>
    </article>
  )
}

export default ExperienceCard2