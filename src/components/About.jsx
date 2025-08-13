import React from 'react';

function About() {
  return <>
  
        <div className='bg-teal-400 text-white w-[100%] h-[100vh] flex flex-col items-center justify-center'>




            <div className='w-[80%] text-center flex flex-col items-center'>
                <h1 style={{fontSize : '40px' , letterSpacing : '4px' }} className='my-5 uppercase font-extrabold'>about component</h1>
                <div className="flex items-center">
                    <span className="flex items-center before:content-[''] before:block before:h-[4px] before:w-20 before:bg-white before:mr-3
                                after:content-[''] after:block after:h-[4px] after:w-20 after:bg-white after:ml-3">
                        <i className="fa-solid fa-star text-2xl"></i>
                    </span>
                </div>

            </div>

            <div className='flex w-[80%] mt-5'>
                <p className='w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='w-1/2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>



        </div>
  
  
  
  
  
  </>;
}

export default About;
