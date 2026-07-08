import "../index.css";
import { useLayoutEffect  } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CardsofDogsImg from "../assets/CardsofDogsImg.jpg"
import UrbanLeafImg from "../assets/UrbanLeafImgSmall.jpg"
import BrandingImg from "../assets/BrandingImg.jpg"
import IlustrationImg from "../assets/IlustrationImg.jpg"
import TicTacToeImg from "../assets/TicTacToeImg.png"
import LaCibelesImg from "../assets/LaCibelesImg.png"
import GetinTouchButton from "./GetinTouchButton.jsx";

gsap.registerPlugin(ScrollTrigger);

const floatingImages = [
  {
    src: IlustrationImg,
    alt: "Portfolio preview",
    className:
      "left-[8%] top-[-5%] h-24 w-24 rotate-[-10deg] sm:h-32 sm:w-32 md:left-[15%] md:top-[-5%] md:h-44 md:w-44 lg:h-52 lg:w-52",
    animationClass: "animate-contact-float-a",
    rotate: "-4deg",
  },
  {
    src: UrbanLeafImg,
    alt: "Branding project preview",
    className:
      "right-[8%] top-[-5%] h-24 w-24 rotate-[8deg] sm:h-32 sm:w-32 md:right-[12%] md:top-[-5%] md:h-44 md:w-44 lg:h-52 lg:w-52",
    animationClass: "animate-contact-float-b",
    rotate: "3deg",
  },
  {
    src: TicTacToeImg,
    alt: "Portfolio preview",
    className:
      "left-[5%] top-[35%] h-28 w-28 rotate-[5deg] sm:left-[6%] sm:h-36 sm:w-36 md:left-[5%] md:top-[38%] md:h-44 md:w-44 lg:left-[6%] lg:h-52 lg:w-52",
    animationClass: "animate-contact-float-c",
    rotate: "2deg",
  },
  {
    src: LaCibelesImg,
    alt: "Portfolio preview",
    className:
      "right-[5%] top-[41%] h-28 w-28 rotate-[-7deg] sm:right-[5%] sm:h-36 sm:w-36 md:right-[5%] md:top-[38%] md:h-44 md:w-44 lg:h-52 lg:w-52",
    animationClass: "animate-contact-float-a",
    rotate: "-3deg",
  },
  {
    src: BrandingImg,
    alt: "Portfolio preview",
    className:
      "left-[9%] bottom-[8%] h-24 w-24 rotate-[9deg] sm:h-32 sm:w-32 md:left-[15%] md:bottom-[1%] md:h-44 md:w-44 lg:h-52 lg:w-52",
    animationClass: "animate-contact-float-b",
    rotate: "4deg",
  },
  {
    src: CardsofDogsImg,
    alt: "Portfolio preview",
    className:
      "right-[8%] bottom-[7%] h-24 w-24 rotate-[-8deg] sm:h-32 sm:w-32 md:right-[12%] md:bottom-[1%] md:h-44 md:w-44 lg:h-52 lg:w-52",
    animationClass: "animate-contact-float-c",
    rotate: "-2deg",
  },
];

function Contact() {

   useLayoutEffect(() => {
  gsap.set(".contact-button", {
    opacity: 0,
    y: 25,
    scale: 0.98,
    filter: "blur(18px)",
  });

  gsap.to(".contact-button", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.8,
    ease: "expo.out",

    scrollTrigger: {
      trigger: "#contact",
      start: "top 70%",
      toggleActions: "play none none reset",
    },
  });

  ScrollTrigger.refresh();
   }, []);
  const words = ["Let's", "Build", "Together"];

   useLayoutEffect(() => {
  gsap.set(".contact-letter", {
    opacity: 0,
    y: 30,
  });

  gsap.to(".contact-letter", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "expo.out",
    stagger: 0.04,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 70%",
      toggleActions: "play none none reset",
    },
  });
  }, []);

  return (
   <section 
   id="contact" 
   className="relative min-h-screen scroll-mt-24 h-auto overflow-x-clip overflow-y-visible flex flex-col items-center justify-center gap-10 px-4 py-24 md:py-20 mt-40 mb-40">
    <div className="absolute inset-x-4 top-8 bottom-8 -z-10 md:inset-x-16 md:top-12 md:bottom-12" />

    {floatingImages.map((image, index) => (
      <div
        key={index}
        className={`group absolute z-0 transition-all duration-500 hover:z-20 hover:scale-105 ${image.className}`}
      >
        <div
          className={`h-full w-full overflow-hidden rounded-md bg-[var(--site-image-bg)] shadow-[0_24px_80px_var(--site-shadow)] ${image.animationClass}`}
          style={{ "--contact-rotate": image.rotate }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
          />
        </div>
      </div>
    ))}

    <div className="relative z-10 flex w-full max-w-[760px] justify-center flex-col text-center items-center">
      <h1 className="font-italiana w-[50%] cursor-none md:w-[90%]  mb-10 relative z-10 text-[var(--site-text)] text-4xl sm:text-6xl md:text-[80px] leading-[0.85] font-normal uppercase">
           {words.map((word, wordIndex) => (
    <span
      key={wordIndex}
      className="inline-block mr-[0.3em] whitespace-nowrap"
    >
      {word.split("").map((letter, letterIndex) => (
        <span
          key={letterIndex}
          className="contact-letter inline-block"
        >
          {letter}
        </span>
      ))}
    </span>
  ))}
        </h1>
<div className="contact-button">
   <GetinTouchButton></GetinTouchButton>
</div>
       
    </div>
    </section>
  );
}

export default Contact;
