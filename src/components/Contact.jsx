import React from 'react';

const Contact = () => {
  return (
    <section id='contact' >
      <div className='pt-4'>
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white flex justify-center align-center">
          Connect&nbsp;<strong className="purple"> With me</strong>
        </h1>
        <div className='flex justify-center align-center gap-6'>
        <a href="mailto:nisthajnn1234@gmail.com" target="_blank">
          <img src="./images/gm.png" alt="Contact me"  className='hover:bg-white'/>
        </a>
        <a href="https://www.linkedin.com/in/nistha-jain-701582202/" target="_blank">
          <img src="./images/li.png" alt="linkedin" className='hover:bg-white'/>
        </a>
        <a href="https://github.com/nisthajnn" target="_blank">
          <img src="./images/gh.png" alt="github" className='hover:bg-white'/>
        </a>
        <a href="https://leetcode.com/Nistha_Jain/" target="_blank">
          <img src="./images/lc (1).png" alt="leetcode" className='hover:bg-white'/>
        </a>
        <a href="https://auth.geeksforgeeks.org/user/nisthajnn1234" target="_blank">
          <img src="./images/gfg.png" alt="gfg" className='hover:bg-white'/>
        </a>
        <a href="https://twitter.com/nisthajnn1234" target="_blank">
          <img src="./images/twit.png" alt="X" className='hover:bg-white'/>
        </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;