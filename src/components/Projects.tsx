import CardProject from "./CardProject";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


interface Project {
  title: string;
  description: string;
  image: string;
  linkCode: string;
  linkWeb: string;
  tech: Array<string>;
}

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 }, 
          {
            opacity: 1,
            y: 0, 
            duration: 0.8,
            delay: index * 0.2, 
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%", 
              end: "bottom 30%", 
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const projects: Project[] = [
    {
      title: "Personal Finance - SaldaQ",
      description: 'SaldaQ is a personal finance management application designed to help users easily track expenses, income, and financial categories. The application allows users to monitor balances, group transactions by category, and manage finances effectively.',
      image: 'personal-finance',
      linkCode: 'https://github.com/nrrarnn/personal-finance-api',
      linkWeb: 'https://github.com/nrrarnn/personal-finance-frontend',
      tech: [
          'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white',
          'https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white',
          'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white',
          'https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white',
          'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white',
          'https://img.shields.io/badge/NextUI-0070F3?style=flat-square&logo=nextui&logoColor=white'
      ]

    },
    {
      title: "Klinik Smartphone",
      description: 'Klinik Smartphone is an interactive landing page designed to introduce smartphone repair services to potential customers. This landing page displays important information such as types of repair services, customer testimonials, and options to contact customer service.',
      image: 'klinik',
      linkCode: 'https://github.com/nrrarnn/klinik-smartphone',
      linkWeb: 'https://klinik-smartphone.netlify.app/',
      tech: [
        'https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white', 
        'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white',
        ]
    },
    {
      title: "Duriat-Food",
      description: 'Duriat Food is a website that I developed for a catering business, designed to make it easier for customers to view various menus.',
      image: 'duriat',
      linkCode: 'https://github.com/nrrarnn/duriat-food',
      linkWeb: 'https://duriat-food.netlify.app/',
      tech: [
        'https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white', 
        'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white'
      ]
    },
    {
      title: "WellEat",
      description: 'WellEat is a healthy food recipe platform that helps users discover, save their favorite food recipes.',
      image: 'welleat',
      linkCode: 'https://git.enigmacamp.com/enigma-camp/enigmacamp-2.0/batch-29-reactjs/fatwa-panatagama/well-eat-website',
      linkWeb: 'http://159.65.133.224/',
      tech: [
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white',
        'https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white'
      ]
    },
    {
      title: "Ryn's Recipes",
      description: 'Ryn Recipes is a project that displays recipe data, allowing users to view detailed information and filter recipes by category.',
      image: 'recipes',
      linkCode: 'https://github.com/nrrarnn/ryn-recipes',
      linkWeb: 'https://ryn-recipes.netlify.app/',
      tech: [
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white'
      ]
    },
    {
      title: 'SarahShop',
      description: 'SarahShop is a sleek and user-friendly landing page designed to showcase a curated collection of products',
      image: 'shop',
      linkCode: 'https://github.com/nrrarnn/olshop-react',
      linkWeb: 'https://sarahshop.netlify.app/',
      tech: [
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white',
      ]
    },
    {
      title: 'Enigma Laundry',
      description: 'Enigma Laundry is a CRUD-based application designed to efficiently manage laundry services. It allows users to create, read, update, and delete records related to laundry orders',
      image: 'laundry',
      linkCode: 'https://github.com/nrrarnn/challenge-react-laundry',
      linkWeb: '-',
      tech: [
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white',
      ]
    },
    {
      title: 'Rin Movie',
      description: 'Ryn Movie is an application that displays a collection of movies categorized by genre. Users can browse through movies, view detailed information about each one',
      image: 'movie',
      linkCode: 'https://github.com/nrrarnn/ryn-movies-react',
      linkWeb: 'https://ar1n-movies.netlify.app',
      tech: [
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white'
      ]
    },
  ]

  return(
    <>
      <div className="section section-2">
          <h1 className="font-bold text-2xl">Projects</h1>
          <div className="flex flex-wrap gap-3">
            {projects.map((project, index) => (
            <div key={index} ref={(el) => (cardRefs.current[index] = el!)} >
              <CardProject
                title={project.title}
                description={project.description}
                image={project.image}
                linkCode={project.linkCode}
                linkWeb={project.linkWeb}
                tech={project.tech}
              />
            </div>
          ))}
          </div>
      </div>
    </>
  )
}

export default Projects;