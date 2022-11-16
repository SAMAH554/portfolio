import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft?:boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
    <motion.img
    initial={{
      x: directionLeft ? -200:200,
      opacity:0
    }}
    transition={{duration:0.5}}
    whileInView={{opacity:1,x:0}}
    src="https://cdn.sanity.io/images/pul7c0x0/production/f06d550daf64c17076d0d61bd2ab80d6a0f5fd0f-512x512.png?w=2000&fit=max&auto=format"
    className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-27
    xl:h-27 filter group-hover:grayscale transition duration-300 ease-in-out'/>
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
    ease-in-out group-hover:bg-white h-20 w-20
    rounded-full z-0'>
    <div className='flex items-center justify-center h-full'>
    <p className='text-2xl font-bold text-black opacity-100'>
      80%
    </p>
    </div>
    </div>
    </div>
  )
}
