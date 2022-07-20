import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {

  const work_scroll = ()=>{
    window.scrollTo(0, 1240);
  }
  const contact_scroll = ()=>{
    window.scrollTo(0, 2400);
}
  return (
    <div className='header flex flex-col' id = "header">
        <Navbar />

        <div className='container flex'>
            <div className='header-content'>
                <h2 className='text-uppercase text-white fw-6 ls-2'> full stack web developer</h2>
                <h1 className='text-white fw-6 header-title'>Hello, I'm <span className='text-brown'>full stack web developer</span> living in Delhi, India</h1>
                <div className='btn-groups flex'>
                  <button type = "button" className='btn-item bg-brown fw-4 ls-2' onClick = {work_scroll}>See Works</button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2' onClick = {contact_scroll}>Contact Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header