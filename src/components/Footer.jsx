import React from 'react';

function Footer() {
  return <>
    <footer style={{ background: '#2c3e50', color: 'white', padding: '10px' , bottom : '44px' , width : '100%'}} className=''>
      <div className='lg:flex items-center justify-around text-center py-5'>
        <div className='mb-16 lg:mb-0 lg:w-1/3'>
            <h1>Location</h1>
            <p className='mb-3'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className='mb-16 lg:mb-0 lg:w-1/3'>
            <h1>AROUND THE WEB</h1>

            <div className='mt-4'>
                <i className='fa-brands fa-facebook text-[#ffffff] text-3xl'></i>
                <i className='fa-brands fa-twitter text-[#ffffff] text-3xl mx-2'></i>
                <i className='fa-brands fa-linkedin-in text-[#ffffff] text-3xl me-2'></i>
                <i className='fa-solid fa-globe  text-[#ffffff] text-3xl'></i>
            </div>
        </div>
        <div className='lg:w-1/3'>
            <h1>ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </footer>
    <footer style={{ background: '#1a252f', color: 'white', textAlign: 'center', padding: '10px' , bottom : '0px' , width : '100%'}}>
      &copy; 2025 My Website | All Rights Reserved
    </footer>
  </>;
}

export default Footer;
