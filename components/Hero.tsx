import Link from 'next/link';
import React from 'react'
import { Cursor,useTypewriter } from "react-simple-typewriter";
import BgCircles from './BgCircles';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words:["Hi, The Name's Samah Shakir Ali",
    "Developer.",
    "Designer.",
    "Engineer.",
     ],
     loop:true,
     delaySpeed: 1000,
  });
  return ( 
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
      <BgCircles />
      <img
      className='relative rounded-full h-32 w-32 mx-auto object-cover' 
      src="https://i.postimg.cc/85Wx8fd5/myimg.jpg"
      alt=""/>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
          software engineer
        </h2>
      <h1 className='text-2xl lg:text-3xl scroll-px-10'>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
      </h1>
    

    <div className='pt-5'>
      <Link href="#about">
      <button className='heroButton'>About</button>
      </Link>
      <Link href='#exp'>
      <button className='heroButton'>Experience</button>
      </Link>
      <Link href='#skills'>
      <button className='heroButton'>Skills</button>
      </Link>
      <Link href='#projects'>
      <button className='heroButton'>Projects</button>
      </Link>
      </div>
    </div>
    </div>
  );
}