import React from 'react'

const About = () => {
  return (
    
    <section id="about">
   
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi👋,I'm Nistha Jain.
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed text-white">
        I'm passionate about building web applications that make a positive impact. I love the creative process of transforming ideas into functional and user-friendly web experiences.
        </p>
        <div className="flex justify-center">
        <a 
  href="https://drive.google.com/file/d/1V9FPnOTzifxCf4vyG-HZMLm2swjTzKUU/view?usp=sharing" 
  target="_blank"
  className="inline-flex text-white bg-sky-500/75 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
>
  Resume
</a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            See My Past Work
          </a>
        </div>
      </div>
      <div>
        <img
        //   className="object-cover object-center rounded"
          alt="hero"
          src="./images/giphy.gif"  width="300"
          height="300"
        />
      </div>
    </div>
  </section>
  )
}

export default About
