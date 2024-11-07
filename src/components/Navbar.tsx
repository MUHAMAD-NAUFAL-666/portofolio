import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar: React.FC = () => {

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
        navbarRef.current,
        {
          opacity: 0,  
          y: -30,      
        },
        {
          opacity: 1,  
          y: 0,       
          duration: 1, 
          ease: "power2.out", 
        }
      );
  }, []);

  return (
    <>
      <header className="flex justify-center font-poppins z-[9999]" ref={navbarRef}>
        <nav className="fixed mt-5 top-0 px-4 py-3 bg-slate-700/30 text-white flex justify-center items-center shadow-lg z-50 max-w-[330px] w-full rounded-full border border-slate-500">
          <div className="flex gap-2 list-none font-normal text-sm">
            <Link to={'/'} className={`px-3 py-1 rounded-full ${isActive('/') ? "active-border" : "hover-border"}`}>Home</Link>
            <Link to={'/about'} className={`px-3 py-1 rounded-full ${isActive('/about') ? "active-border" : "hover-border"}`}>About</Link>
            <Link to={'/project'} className={`px-3 py-1 rounded-full ${isActive('/project') ? "active-border" : "hover-border"}`}>Project</Link>
            <Link to={'/contact'} className={`px-3 py-1 rounded-full ${isActive('/contact') ? "active-border" : "hover-border"}`}>Contact</Link>
          </div>
        </nav>
      </header>

    </>
  );
}

export default Navbar;