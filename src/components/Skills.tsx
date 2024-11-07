import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Skills() {
  const logos: string[] = ['html-5', 'css', 'js', 'bootstrap', 'tailwindcss', 'react', 'nextjs', 'node', 'typescript', 'python', 'php', 'laravel', 'mysql', 'figma', 'postman'];
  const logoRefs = useRef<HTMLDivElement[]>([]); // Referensi untuk logo

  // Fungsi untuk menambahkan referensi logo
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !logoRefs.current.includes(el)) {
      logoRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animasi fade-in untuk setiap logo
    logoRefs.current.forEach((logo, index) => {
      gsap.fromTo(
        logo,
        { opacity: 0, y: 20 }, // Mulai dari transparan dan sedikit di bawah
        {
          opacity: 1,
          y: 0, // Kembali ke posisi normal
          duration: 1, // Durasi fade-in
          delay: index * 0.3, // Delay untuk setiap logo
          ease: "power1.out" // Easing
        }
      );
    });
  }, []);

  return (
    <div className="section section-2 pt-10 pb-8">
      <h1 className="font-bold text-3xl">💻Tech & Tools</h1>
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {logos.map((el, index) => (
          <div
            key={index}
            ref={addToRefs} // Tambahkan referensi ke logo
            className="p-5 bg-slate-800 backdrop-blur-sm rounded-[10px] hover:border hover:border-slate-500"
          >
            <img src={`./img/${el}.png`} alt={`${el}`} className="w-[50px] h-[50px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
