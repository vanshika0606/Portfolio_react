import React, {useRef, useState} from 'react';
import "./About.css";
import images from "../../constants/images";
import {about_stats} from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import {FaPlay} from "react-icons/fa";

const About = () => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if(toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    }

  return (
    <div className='about section-p'>
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {images.About_Vanshika} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-brown'>I'm <span className='text-dark'>Vanshika</span></h3>
                        <p className='text mx-auto'>As i am a fresher and I have a great sense of work I'm a quick learner as well that's why I need a platform to prove myself if you give me a chance I will surely make you proud by work .</p>
                    </div>
                </div>

                

                    
                
            </div>
        </div>
    </div>
  )
}

export default About