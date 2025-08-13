import React from 'react';

function Home() {
  return <>
  
    <div className='bg-teal-400 w-[100%] h-[100vh] flex flex-col items-center justify-center text-white'>


        <img src="../assets/images/home.svg" className='w-2xs' alt="" />

        <div className='w-[80%] text-center flex flex-col items-center mt-5 mb-7'>
                <h1 style={{fontSize : '40px' , letterSpacing : '4px' }} className='my-5 uppercase font-extrabold'>start Framework</h1>
                <div className="flex items-center">
                    <span className="flex items-center before:content-[''] before:block before:h-[4px] before:w-20 before:bg-white before:mr-3
                                after:content-[''] after:block after:h-[4px] after:w-20 after:bg-white after:ml-3">
                        <i className="fa-solid fa-star text-2xl"></i>
                    </span>
                </div>

        </div>

        <p>Graphic Artist - Web Designer - Illustrator</p>



    </div>
  
  
  
  
  
  
  
  </>;
}

export default Home;
