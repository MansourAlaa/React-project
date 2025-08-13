import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className='w-[100%] bg-teal-400 text-white'>
      <div className='text-center w-[26%] mx-auto flex flex-col items-center tracking-wider py-10 '>
        <h1 style={{fontSize : '31px'}} className='my-5 uppercase font-extrabold'>Contact Us</h1>

        <div className="flex items-center mb-4">
            <span className="flex items-center before:content-[''] before:block before:h-[4px] before:w-20 before:bg-white before:mr-3
                        after:content-[''] after:block after:h-[4px] after:w-20 after:bg-white after:ml-3">
                <i className="fa-solid fa-star text-2xl"></i>
            </span>
        </div>


      <form onSubmit={handleSubmit} className='flex flex-col gap-10 justify-center items-center'>
        <input type="text" name="userName" placeholder="userName" onChange={handleChange} required className='border-b px-3 py-1 w-100 text-black focus:text-white' />
        <input type="number" name="userAge" placeholder="userAge" onChange={handleChange} required className='border-b px-3 py-1 w-100 text-black focus:text-white' />
        <input type="email" name="userEmail" placeholder="userEmail" onChange={handleChange} required className='border-b px-3 py-1 w-100 text-black focus:text-white' />
        <input type="password" name="userPassword" placeholder="userPassword" onChange={handleChange} required className='border-b px-3 py-1 w-100 text-black focus:text-white' />
        <button type="submit" className='px-5 py-2 rounded-lg bg-green-400 me-auto cursor-pointer'>Send Message</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
