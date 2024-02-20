import React from 'react';
import { Skillsdata } from '../sdata';

const Skills = () => {
  return (
    <section id='skills'>
    <div className='pt-4' id='#skills'>
    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white flex justify-center align-center">
   &nbsp;<strong className="purple">Skills</strong></h1>
      <p className='text-white sm:text-3xl flex justify-center align-center'>Languages, Technologies and tools that I have learned and applied to my projects</p>
      <div className="flex flex-wrap justify-center">
        {Skillsdata.map((skill, index) => (
          <div key={index} className="m-10">
            <img src={skill.image} alt={skill.title} width="70px" height="70px" />
            <p className="text-white flex justify-center align-center sm:text-3xl ">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Skills;