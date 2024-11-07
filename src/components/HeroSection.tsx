import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);


  useEffect(() => {
    if (textRef.current && imgRef.current) {
    gsap.to(textRef.current, {
      duration: 5,
      text: {
        value: "Web Developer",
        delimiter: ""
      }
    });

    gsap.to(imgRef.current, {
        scale: 1.1, 
        duration: 1.5,
        ease: "power1.inOut"
    });
  }
  }, []);
  return(
    <>
      <div className="section pt-44 justify-center items-center" ref={containerRef}>
        <div>
          <img ref={imgRef} src="./img/pall.jpg" alt="My Foto" className="w-[150px] h-[150px] object-cover rounded-full border border-solid border-blue-400" />
        </div>
        <div className="text-center">
            <h1 className="text-2xl font-semibold ">Muhamad Naufal AlMuhyidin</h1>
            <h1 className="text-4xl font-bold" ref={textRef}></h1>
            <p className="px-6 sm:px-52">I'm a Freelance Frontend Web Developer. Currently, I'm focusing on backend development, building APIs, and managing databases. I aim to create efficient, scalable, and secure systems.</p>
            <div className="flex gap-2 pt-3 justify-center">
              <button className="py-1.5 px-4 bg-pink-500 rounded-md"><a href="https://instagram.com/ryn_code"><FaInstagram/></a></button>
              <button className="py-1.5 px-4 bg-gray-700 rounded-md"><a href="https://github.com/nrrarnn"><FaGithub /></a></button>
              <button className="py-1.5 px-4 bg-blue-600 rounded-md"><a href="https://www.linkedin.com/in/nur-arini/"><FaLinkedin /></a></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;