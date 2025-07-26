import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import contact from '../assets/contact'
import Lottie from 'lottie-react'
import axios from "axios"
import { useForm } from "react-hook-form";
// https://getform.io/f/bxoonyqa
const Contact = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const onSubmit =async(data)=>{
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
  try{
await axios.post("https://getform.io/f/ajjozzla",userInfo);
alert("Your message has been sent");
reset();
  }catch(error){
console.log(error);
  }
}
  return (
    <section id='contact' className='z-50 bg-gray-500 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between '>
            <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
              <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
              <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
              <div className='flex space-x-4'>
                <a href="https://www.facebook.com/guptasaab7217?mibextid=ZbWKwL" className='text-foreground/60 hover:text-foreground/80'>
                <img src={facebook} alt="" className='h-6 w-6'/></a>
                <a href="https://www.instagram.com/itz_golu1016?igsh=Z3N5dnh4NDkxeW91" className='text-foreground/60 hover:text-foreground/80'>
                <img src={instagram} alt="" className='h-6 w-6'/></a>
                <a href="https://www.linkedin.com/in/golugupta" className='text-foreground/60 hover:text-foreground/80'>
                <img src={linkedin} alt="" className='h-6 w-6'/></a>
              </div>
                <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10 mt-20'> 
              <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700' >Name</label>
                <input type="text" id='name' placeholder='Full Name' name='name' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' {...register("name", { required: true })}/>
                {errors.name && <span>This field is required</span>}
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email" id='email' placeholder='Email' name='email'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' {...register("email", { required: true })}/>
                {errors.email && <span>This field is required</span>}
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id='message' placeholder='Enter Your Message' name='message'    className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'{...register("message", { required: true })}/>
                {errors.message && <span>This field is required</span>}
              </div>
              <button className='bg-red-500 text-white px-3 py-2 rounded-lg' type='submit'>Send Message</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact