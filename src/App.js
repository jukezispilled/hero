import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import bg from './bg.jpg';
import Marquee from "react-fast-marquee";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("https://ia601307.us.archive.org/4/items/BonnieTylerINeedAHeroLyrics1/Bonnie%20Tyler%20-%20I%20Need%20a%20Hero%20%28Lyrics%29%20%281%29.mp3"));

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const roadmapItems = [
    { phase: 'INITIATION', task: 'Project Kickoff', status: 'COMPLETED', date: '2024-08-15' },
    { phase: 'PLANNING', task: 'Requirements Gathering', status: 'IN PROGRESS', date: '2024-08-20' },
    { phase: 'DESIGN', task: 'UI/UX Mockups', status: 'SCHEDULED', date: '2024-08-25' },
    { phase: 'DEVELOPMENT', task: 'Frontend Implementation', status: 'PENDING', date: '2024-09-01' },
    { phase: 'DEVELOPMENT', task: 'Backend API Development', status: 'PENDING', date: '2024-09-10' },
  ];

  return (
    <div>
      <div className="App-screen w-screen h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          style={{ pointerEvents: 'none' }}
        >
          <source src={`${process.env.PUBLIC_URL}/hero.mp4`} type="video/mp4" />
        </video>
        <div className='absolute inset-x-0 top-10 text-center font-custom text-9xl md:text-[250px] text-[#DD252C] z-10 mt-[45%] md:mt-[3%]'>
          <span style={{ textShadow: '2px 2px 0 #0065DC, -2px -2px 0 #0065DC, -2px 2px 0 #0065DC, 2px -2px 0 #0065DC' }}>
            hero
          </span>
          <div className='text-center text-xs md:text-lg -mt-4'>
            CA: updating...
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 overflow-hidden">
          <motion.img
            src="hero.png"
            className='w-[60%] md:w-[35%] mx-auto cursor-pointer'
            animate={{
              rotate: [-3, 3, -3],
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              transformOrigin: 'center center',
              display: 'block',
              marginBottom: '-5%',
            }}
            onClick={toggleAudio}
          />
        </div>
        <div className='absolute top-5 left-5 flex justify-center items-center z-10'>
          <a href="https://x.com/solanashero" className=''>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#0065DC" viewBox="0 0 50 50">
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </a>
          <a href="https://t.me/weneedaheroportal" className=''>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#0065DC" viewBox="0 0 50 50">
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445 c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758 c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125 c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077 C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;