import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion, useMotionValue } from "framer-motion"
import Link from 'next/link';
import {Social} from "../typings"

type Props = {
  socials: Social[];
};

export default function Header({ socials}: Props) {
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
        {socials.map((social) => (
            <SocialIcon
            key={social._id}
             url={social.url} 
             target={"_blank"}
            fgColor='white'
            bgColor='transparent'
            ></SocialIcon>
        ))}
        
      </motion.div>
      <Link href="#contact">
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
      </Link>
    </header>

  );
}