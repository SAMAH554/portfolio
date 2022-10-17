import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion, useMotionValue } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between msx-w-7xl mx-auto z-20
     xl:items-center'>
      
      <motion.div
      initial={{
        x: -500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:0.7,
      }}
       className="flex flex-row items-center">
        {/*Social icons*/}
        <SocialIcon url="https://www.linkedin.com/in/samahshakir/" target={"_blank"}
          fgColor='white'
          ></SocialIcon>
          <SocialIcon url="https://github.com/SAMAH554"
          fgColor='white'
          bgColor='transparent'></SocialIcon>
          <SocialIcon url="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=samah.ilfath@gmail.com"
          fgColor='white'
          bgColor='transparent'></SocialIcon>
      </motion.div>

      <motion.div
      initial={{
        x : 500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:-0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:0.7,
      }}>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='white'
          bgColor='transparent'/>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
      </motion.div>
    </header>

  );
}