import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  const projects = [1,2,3,4];
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>

       <h3 className='relative top-20 uppercase tracking-[20px] text-gray-500 text-2xl xl:text-3xl'>Projects</h3>
   
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
      {projects.map((projects) =>(
        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
         items-center justify-center p-20 md:p-44 h-screen'>
        <img src="https://i.postimg.cc/FRPgzwBK/CReDReP.jpg" alt=""/>
        <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
      
CReDReP
</h4>
<h3 className="text-1xl font-semibold text-center">Censorship Resistant Decentralized Review Platform (Blockchain, Ethereum Smart Contracts):</h3>
<p>
Created a decentralized alternative for conventional review platforms on web3 using blockchain technology and distributed
protocols. Selected and sponsored by 45th SPP under KCST. Tech: Solidity, NodeJS, Truffle Suite, Ganache, ReactJS (May
’22)
</p>
</div>
        </div>
      ))}
    </div>
    
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}