
import { useLayoutEffect } from "react"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutIllustration from "../assets/AboutIllustration.jpg"

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {

  const text = "About me";

  useLayoutEffect(() => {
  gsap.set(".about-letter", {
    opacity: 0,
    y: 45,
  });

  gsap.to(".about-letter", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.06,
    ease: "power2.out",

    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      toggleActions: "play none none reset",
    },
  });
}, []);


  return (
    <section id="about" className="h-fit scroll-mt-24 overflow-hidden flex flex-col items-center justify-center px-4  mb-15">
     <h1 className="font-italiana mt-24 md:mb-24 mb-10 md:mt-40 relative z-10 text-[var(--site-text)] text-6xl sm:text-5xl md:text-[100px] leading-[0.85]  uppercase">
        {text.split("").map((letter, index) => (
    <span
      key={index}
      className="about-letter inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
      </h1>
      
        <div className="flex w-full max-w-3xl  gap-20 md:flex-row flex-col mt-4 items-center justify-around">
       <div className="group animate-contact-float-a w-[300px] h-[400px] overflow-hidden rounded-md ">
  <img
    src={AboutIllustration}
    alt="Illustration of girl"

    className="
    z-20
      w-full
      h-full
      object-cover
      transition-all
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-110
      group-hover:rotate-2
      group-hover:-translate-y-1
       
    "
  />
</div>
          <div className="flex flex-col gap-10 md:items-start items-center mt-5">
            <h1 className="text-[30px] about-letter ">Hi, I'm Daniela Silva </h1>
 <p className="about-letter text-[var(--site-text)] md:text-start text-center font-light  w-full max-w-[500px] text-[16px]">
Ux/Ui designer and developer dedicated 
<span className=""> to turning ideas into interactive digital experiences.</span>
          </p>
          <p className="about-letter text-[var(--site-text)] md:text-start text-center  font-light w-full max-w-[500px] text-[16px]">
            I have 4 years of experience.<span className="">  I am passionate about professional challenges and the constant pursuit of knowledge.
           </span>
          </p>
          <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.behance.net/danielasil01a0"
    className="transition-all group bg-[var(--site-button-bg)] px-4 md:px-5 hover:text-[var(--site-button-text-inactive)] hover:bg-[var(--site-hover-strong)] gap-2 h-fit py-2 rounded-3xl md:text-[16px] sm:text-[14px] text-[12px] w-fit flex items-center justify-center font-italiana font-normal text-[var(--site-button-text)] cursor-none"
   >
  Vew Portfolio
  </a>
          </div>
       
          
          </div>
    
    </section>
  );
}

export default AboutMe;
