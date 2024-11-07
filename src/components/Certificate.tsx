import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Certificate = () => {
  const numbers: number[] = Array.from({ length: 9 }, (_, i) => i + 0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Fungsi untuk menambahkan referensi gambar
  const addToRefs = (el: HTMLImageElement) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animasi fade-in untuk setiap gambar
    imagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0 }, // mulai dari transparan
        {
          opacity: 1,
          duration: 1, // durasi fade-in
          delay: index * 0.3, // delay untuk setiap gambar
          ease: "power1.out" // easing
        }
      );
    });
  }, []);

  return (
    <div className="section section-2 py-20">
      <h1 className="font-bold text-white text-3xl">📜Certificate</h1>
      <div className="justify-center items-center flex flex-wrap gap-3">
        {numbers.map((number: number) => (
          <img
            key={number}
            src={`./img/s${number}.jpg`}
            alt={`${number}`}
            ref={addToRefs} // tambahkan referensi ke gambar
            className="w-[260px] h-[180px] object-fill rounded-lg hover:border hover:border-slate-300 transition-all duration-300 hover:scale-105 hover:shadow-sm hover:shadow-slate-600"
          />
        ))}
      </div>
    </div>
  );
}

export default Certificate;
