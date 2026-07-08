import { useLayoutEffect  } from "react"
import IlustrationImg from "../assets/IlustrationImg.jpg"
import BrandingImg from "../assets/BrandingImg.jpg"
import FrontEndImg from "../assets/ArtWorkImgSmall.png"
import TicTacToeImg from "../assets/TicTacToeImg.png"
import WebDesingImg from "../assets/WebDesingImg.jpg"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {

useLayoutEffect(() => {
  gsap.set(".services-letter", {
    opacity: 0,
    y: 45,
  });

  gsap.to(".services-letter", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.06,
    ease: "power2.out",

    scrollTrigger: {
      trigger: "#services",
      start: "top 70%",
      toggleActions: "play none none reset",
    },
  });
}, []);

const text = "Services";
  return (
    <section 
    
    id="services" 
    className="min-h-screen scroll-mt-24 flex flex-col items-center mb-20">
      <h1 className="font-italiana cursor-none mt-40 relative z-10 text-[var(--site-text)] text-6xl sm:text-5xl md:text-[100px] leading-[0.85]  uppercase">
       {text.split("").map((letter, index) => (
    <span
      key={index}
      className="services-letter inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
      </h1>

<div className="mt-40 mb-20 flex flex-col gap-8 justify-center items-center">
<div className="group relative w-fit flex flex-col">
  <span className="flex justify-end text-[var(--site-text)]">01</span>

  <h1 className="font-italiana font-light text-5xl sm:text-4xl md:text-[80px] text-[var(--site-text)] opacity-50 hover:opacity-100">
    Web Design
  </h1>

  <img
    src={WebDesingImg}
    alt="Illustration of landing page"
    className="
      absolute
            top-[-30%]
      left-1/2
      -translate-x-1/2
      -translate-y-1/2

      ml-10
      w-50
      h-50
      object-cover
      rounded-md
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-300
      pointer-events-none
    "
  />

  <hr className="border-[0.5px] mt-4 border-[var(--site-border)]"/>
</div>

<div className="group cursor-none relative w-fit flex flex-col">
  <span className="flex justify-end text-[var(--site-text)]">02</span>

  <h1 className="font-italiana font-light text-5xl sm:text-4xl md:text-[80px] opacity-50 hover:opacity-100 text-[var(--site-text)]">
    Ux/Ui Design
  </h1>

  <img
    src={TicTacToeImg}
    alt="Illustration of work"
    className="
    z-50
      absolute
            top-[5%]
      left-1/4
      w-50
      h-50
      object-cover
      rounded-md
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-300
      pointer-events-none
    "
  />

  <hr className="border-[0.5px] mt-4 border-[var(--site-border)]"/>
</div>

<div className="group cursor-none relative w-fit flex flex-col">
  <span className="flex justify-end text-[var(--site-text)]">03</span>

  <h1 className="font-italiana font-light text-5xl sm:text-4xl md:text-[80px] opacity-50 hover:opacity-100 text-[var(--site-text)]">
    Front-End 
  </h1>

  <img
    src={FrontEndImg}
    alt="Illustration of girl"
    className="
    z-50
      absolute
      top-[10%]
      left-[-50%]
      w-50
      h-50
      object-cover
      rounded-md
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-300
      pointer-events-none
    "
  />

  <hr className="border-[0.5px] mt-4 border-[var(--site-border)]"/>
</div>

<div className="group cursor-none relative w-fit flex flex-col">
  <span className="flex justify-end text-[var(--site-text)]">04</span>

  <h1 className="font-italiana font-light text-5xl sm:text-4xl md:text-[80px] opacity-50 hover:opacity-100 text-[var(--site-text)]">
   Illustration
  </h1>

  <img
    src={IlustrationImg}
    alt="Illustration of work"
    className="
    z-50
      absolute
            top-[-10%]
      left-1/2
      -translate-x-1/2
      -translate-y-1/2

      ml-48
      w-50
      h-50
      object-cover
      rounded-md
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-300
      pointer-events-none
    "
  />

  <hr className="border-[0.5px] mt-4 border-[var(--site-border)]"/>
</div>

<div className="font-italiana cursor-none group relative w-fit flex flex-col">
  <span className="flex justify-end text-[var(--site-text)]">05</span>

  <h1 className="font-light text-5xl sm:text-4xl md:text-[80px] opacity-50 hover:opacity-100 text-[var(--site-text)]">
   Branding
  </h1>

  <img
    src={BrandingImg}
    alt="Illustration of brand"
    className="
    z-50
      absolute
            top-[5%]
      left-1/4
      w-50
      h-50
      object-cover
      rounded-md
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-300
      pointer-events-none
    "
  />
  <hr className="border-[0.5px] mt-4 border-[var(--site-border)]"/>
</div>
</div>

    </section>
  )
}

export default Services
