import { motion } from 'framer-motion'
import React from 'react'
import Skill from './SkillsF/Skill'
import Skill10 from './SkillsF/Skill10'
import Skill11 from './SkillsF/Skill11'
import Skill12 from './SkillsF/Skill12'
import Skill2 from './SkillsF/Skill2'
import Skill3 from './SkillsF/Skill3'
import Skill4 from './SkillsF/Skill4'
import Skill5 from './SkillsF/Skill5'
import Skill6 from './SkillsF/Skill6'
import Skill7 from './SkillsF/Skill7'
import Skill8 from './SkillsF/Skill8'
import Skill9 from './SkillsF/Skill9'
type Props = {}

function skills({}: Props) {

  return (
    <motion.div
    initial={{
      opacity:0
     }}
     whileInView={{
      opacity:1
     }}
     transition={{
      duration:1.5
     }}
    className='flex relative flex-col text-center md:text-left
     xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill
      </h3>

      <div className='grid grid-cols-3 gap-4'>
        <Skill />
        <Skill2 />
        <Skill3 />
        <Skill4 />
        <Skill5 />
        <Skill6 />
        <Skill7 />
        <Skill8 />
        <Skill9 />
        <Skill10 />
        <Skill11 />
        <Skill12/>
      </div>
      </motion.div>
  )
}

export default skills