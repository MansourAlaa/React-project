import React, { useState } from 'react';
import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';

function Portfolio() {
  const images = [
    image1,
    image2,
    image3,
    image3,
    image2,
    image1,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='w-[100%]  bg-teal-400 text-white'>
        <div className='text-center w-[70%] flex flex-col mx-auto justify-center items-center py-10'>
      <h1 style={{fontSize : '40px' , letterSpacing : '4px'}} className='my-5 uppercase font-extrabold'>Portfolio</h1>
      <div className="flex items-center mb-6">
        <span className="flex items-center before:content-[''] before:block before:h-[4px] before:w-20 before:bg-white before:mr-3
                    after:content-[''] after:block after:h-[4px] after:w-20 after:bg-white after:ml-3">
            <i className="fa-solid fa-star text-2xl"></i>
        </span>
      </div>
      <div className='flex-wrap flex'>
        {images.map((src, index) => (
          <img 
            key={2} 
            src={src} 
            alt={`Portfolio ${index + 1}`} 
            className='w-[100%] md:w-1/2 lg:w-1/3 box-border p-2 cursor-pointer' 
            onClick={() => setSelectedImage(src)} 
          />
        ))}
      </div>

      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)} 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.8)', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}
        >
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </div>
    </div>
  );
}

export default Portfolio;
