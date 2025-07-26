import React from "react";
import resume from "../assets/resume.pdf"
import resume1 from "../assets/AjitResume.pdf.pdf"
// import ajit from "../assets/ajit.png"
import golu from "../assets/golu.png";
const Hero=()=>{
    return(
      <section className="relative">
<div className="max-w-7xl mx-auto sm:flex flex-col">
    <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between ">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-11 lg:mt-0 mt-10">
<h2 className="text-4xl font-bold  ">Hi,There</h2>
<h2 className="text-4xl font-bold ">I'm Golu Gupta</h2>
<h2 className="text-xl  ">Web Developer & Designer</h2>
<p>I'm a passionate web developer with expertise in React, Node.js, and modern web technologies. <br /> I love creating beautiful and functional website that solve real world problems.</p>
<button className="w-36 p-2 bg-black text-white border-0" > <a href={resume1} download='resume'>Download CV</a></button>
        </div>

   
<div className="md:w-1/2 flex justify-center items-start mt-0 sm:mt-0">
  <img 
    src={golu} 
    alt="Golu Gupta" 
    className="h-[70vh] sm:h-[90vh] object-contain"
  />
</div>






    </div>
</div>

      </section>
    )
}

export default Hero;