import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#2c3a50'}} className='py-8 px-3 lg:px-25 flex items-center '>
        <Link to='/' style={{fontSize : '30px' , color : 'white'}} className='font-extrabold tracking-wider uppercase'>Start Framework</Link>

      <div className='ms-auto w-fit flex gap-5 font-medium'>
        {/* <Link to="/" style={{ color: 'white' , fontSize : '25px' }} className=''>Home</Link> */}
        <Link to="/about" style={{ color: 'white' , fontSize : '25px' }}>About</Link>
        <Link to="/portfolio" style={{ color: 'white' , fontSize : '25px' }}>Portfolio</Link>
        <Link to="/contact" style={{ color: 'white' , fontSize : '25px' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
