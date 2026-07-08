import { useState, useLayoutEffect } from "react"


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import WeatherlyImg from "../assets/WeatherlyImg.png"
import UrbanLeafImg from "../assets/UrbanLeafImg.jpg"
import ArtWorkImg from "../assets/ArtWorkImg.jpg"
import TicTacToeImg from "../assets/TicTacToeImg.png"


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
     name: "Art Work",
    tags: ["Art & Design", "Social network for artists", "Gallery of Art", ],
    dates:["01.06.2025"],
    image: ArtWorkImg,
    link: "https://www.behance.net/gallery/237954543/Artwork-I-UXUI-Design-Web-Design?platform=direct",
   },
  {
    name: "Urban Leaf",
    tags: ["UX/UI Design","Landing Page", "Ecomerce Website", "Branding",],
    dates:["26.08.2025"],
    image: UrbanLeafImg,
    link: "https://www.behance.net/gallery/240411223/UrbanLeaf-I-UXUI-Web-Design?platform=direct",
    },
  {
    name: "Weatherly",
    tags: ["UX/UI Interface", "Weather","Interface Design", "Mobile App",],
    dates:["20.11.2025"],
    image: WeatherlyImg,
    link: "https://www.behance.net/gallery/239611577/Weatherly-I-UXUI-Design-Web-Design?platform=direct",
  },
  {
    name: "Tic Tac Toe",
    tags: ["Puzzle Game", "Interface Design", "Case Study"],
    dates:["12.04.2024"],
    image: TicTacToeImg,
    link: "https://www.behance.net/gallery/233494451/Tic-Tac-Toe-I-UXUI-Game-Design?platform=direct",
  },
]

function Works() {

  const text = "Works";

useLayoutEffect(() => {
  gsap.set(".works-letter", {
    opacity: 0,
    y: 45,
  });

  gsap.to(".works-letter", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.06,
    ease: "power2.out",

    scrollTrigger: {
      trigger: "#works",
      start: "top 70%",
      toggleActions: "play none none reset",
    },
  });
}, []);


  return (
    <section id="works" className="h-fit scroll-mt-24 flex flex-col items-center px-4">
      <h1 className="font-italiana mt-24 mb-10 md:mt-40 relative z-10 text-[var(--site-text)] text-6xl sm:text-5xl md:text-[100px] leading-[0.85] uppercase">
        {text.split("").map((letter, index) => (
    <span
      key={index}
      className="works-letter inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
      </h1>

<div className="w-[94%]
    mt-10
    flex
    flex-col
    md:flex-row
    gap-6
    px-4
    py-4
    overflow-visible
    md:overflow-x-auto
    hide-scrollbar">
  {projects.map((project) => (
    
    <div
      key={project.name}
      className="relative
        w-full
        md:w-[100%]
        md:flex-shrink-0
        h-[590px] project-hover"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="cursor-none"
      >
        <img
          src={project.image}
          alt={project.name}
          className=" w-full h-[600px] object-cover rounded-lg "
        />

        <span className="absolute z-20 top-[5%]  md:top-[50%] rounded-2xl left-0 ml-10 inline-block  font-italiana px-8 py-2 text-xl md:text-[40px] uppercase  text-[var(--site-text-tags)] ">
          {project.name}
        </span>
        <div className="absolute z-20 right-0 rounded-2xl top-[20%] gap-4 backdrop-blur-md flex flex-col mr-5 pl-10 pr-10 justify-center items-start bg-[var(--site-tag-bg)] h-[50%] w-fit md:w-[300px]">
  
  {project.tags.map((tag, index) => (
  <span
    key={tag}
    className={`
      rounded-full
      w-fit
      text-[var(--site-text-tags)]
      ${index === 0 ? "text-xl font-bold" : "text-sm"}
    `}
  >
    {tag}
  </span>
))}
  <span className="mt-20 text-[var(--site-text-tags)]"> {project.dates}</span>
</div>

      </a>
    </div>
  ))}
</div>
    
      

        
    </section>
  )
}

export default Works
