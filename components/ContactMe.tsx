import React from 'react'
import {PhoneIcon,MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm,SubmitHandler} from 'react-hook-form'
type Inputs = {
  name: string;
  email: string;
  sub: string;
  message: String;
};
type Props = {}
function ContactMe({}: Props) {

  const{register,handleSubmit,}= useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:samah.ilfath@gmail.com ?subject=${formData.sub}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>&nbsp;Contact</h3>
    <div className='flex flex-col space-y-10'>
      <h4 className='text-2xl font-semibold text-center space-y-10'>
        Let&apos;s talk.
      </h4>
      <div className='flex items-center space-x-5 justify-center'>
        <PhoneIcon className='text-[#F7ab0A] h-7 w-7 animate-pulse'/>
        <p className='text-1.5xl'>+91 9746702050</p>
      </div>
    
      <div className='flex items-center space-x-5 justify-center'>
        <EnvelopeIcon className='text-[#F7ab0A] h-7 w-7 animate-pulse'/>
        <p className='text-1xl'>samah.ilfath@gmail.com</p>
        

      </div>

      <form onSubmit={handleSubmit(onSubmit)} 
      className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
        <input {...register('name')} placeholder="Name" className='contactInput text-center' type="text" />
        <input {...register('email')} placeholder='Email' className='contactInput text-center' type="text" />
        </div>
        <input {...register('sub')} placeholder='Sub' className='contactInput text-center' type="text"/>
        <textarea {...register('message')} placeholder='Message' className='contactInput text-center' />
        <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default ContactMe