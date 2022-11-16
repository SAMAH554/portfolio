import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[]
}

export default function Projects({ projects}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>

       <h3 className='absolute display-flex top-14 uppercase tracking-[20px] text-gray-500 text-2xl xl:text-3xl'>Projects</h3>
       <p className='absolute display-flex top-4 uppercase text-gray-500'>swipe --&gt;</p>
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      {projects.map((project) =>(
        <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
         items-center justify-center p-20 md:p-44 h-screen'>
        <img className='h-70 w- w-60' src={urlFor(project?.image).url()} alt=""/>
        <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
      
{project?.title}
</h4>

<div className="flex items-center space-x-2 justify-center">
{project?.technologies.map((technology) => (
  <img
  className="h-10 w-10"
  key={technology._id}
  src={urlFor(technology.image).url()}
  alt=""
  />
))}
</div>

<p>
{project?.summary}
</p>
</div>
        </div>
        
      ))}
    </div>
    
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}