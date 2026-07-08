import { useRef, useEffect, useLayoutEffect  } from "react"
import Star from "./Star.jsx"
import MainIllustration from "../assets/MainIllustration.jpg"
import "../index.css"
import "./Hero.css"
import GetinTouchButton from "./GetinTouchButton.jsx";
import gsap from "gsap";

const socialLinks = [
  {
    label: "Lin",
    href: "https://www.linkedin.com/in/danielasilvafern%C3%A1ndez/",
    ariaLabel: "LinkedIn",
  },
  {
    label: "Be",
    href: "https://www.behance.net/danielasil01a0",
    ariaLabel: "Behance",
  },
  {
    label: "Gm",
    href: "mailto:danielasilva081996@gmail.com",
    ariaLabel: "Email",
  },
  {
    label: "Ins",
    href: "https://www.instagram.com/_dani.silva.f_",
    ariaLabel: "Instagram",
  },
];

function Hero() {
  const heroImageRef = useRef(null);
  const starRef = useRef(null);
  const text = "Designer";
  const firsttext = "Product";
  const titleRef = useRef(null);
  const secondtitleRef = useRef(null);

  const moveImageAwayFromPointer = (event) => {
    const image = heroImageRef.current;

    if (
      !image ||
      window.matchMedia("(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = image.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const distanceX = centerX - event.clientX;
    const distanceY = centerY - event.clientY;
    const distance = Math.hypot(distanceX, distanceY);
    const maxDistance = 260;

    if (distance > maxDistance) {
      image.style.setProperty("--hero-image-x", "0px");
      image.style.setProperty("--hero-image-y", "0px");
      return;
    }

    const force = (1 - distance / maxDistance) * 42;
    const safeDistance = distance || 1;
    const offsetX = (distanceX / safeDistance) * force;
    const offsetY = (distanceY / safeDistance) * force;

    image.style.setProperty("--hero-image-x", `${offsetX.toFixed(2)}px`);
    image.style.setProperty("--hero-image-y", `${offsetY.toFixed(2)}px`);
  };
  
  const resetImagePosition = () => {
    const image = heroImageRef.current;

    if (!image) {
      return;
    }

    image.style.setProperty("--hero-image-x", "0px");
    image.style.setProperty("--hero-image-y", "0px");
  };
  
  useLayoutEffect(() => {
  gsap.set(".hero-button", {
    opacity: 0,
    y: 25,
    scale: 0.98,
    filter: "blur(18px)",
  });

  gsap.to(".hero-button", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.3,
    ease: "expo.out",
    delay: 0.80,
  });
  }, []);

  useLayoutEffect(() => {
  gsap.set(".hero-star", {
    opacity: 0,
    y: 25,
    scale: 0.98,
    filter: "blur(18px)",
  });

  gsap.to(".hero-star", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.3,
    ease: "expo.out",
    delay: 0.94,
  });
  }, []);
  
  useLayoutEffect(() => {
  gsap.set(".hero-letter", {
    opacity: 0,
    y: 45,
  });

  gsap.to(".hero-letter", {
    
    opacity: 1,
     y: 0,
    duration: 0.90,
    stagger: 0.06,
    ease: "none",
 

    
  });
  }, []);

  const handleMouseMoveSecondTitle = (e) => {
  const letters = secondtitleRef.current.querySelectorAll(".hero-letter");

  letters.forEach((letter) => {
    const rect = letter.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const dx = e.clientX - x;
    const dy = e.clientY - y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 80) {
      gsap.to(letter, {
        x: -dx * 0.15,
        y: -dy * 0.15,
        rotation: gsap.utils.random(-8, 8),
        filter: "blur(6px)",
        opacity: 0.8,
        duration: 0.25,
      });
    } else {
      gsap.to(letter, {
        x: 0,
        y: 0,
        rotation: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.4,
      });
    }
  });
  };

   const handleTitleLeaveSecondTitle = () => {
   const letters = secondtitleRef.current.querySelectorAll(".hero-letter");

  gsap.to(letters, {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.01,
  });
  };
  const handleMouseMove = (e) => {
  const letters = titleRef.current.querySelectorAll(".hero-letter");

  letters.forEach((letter) => {
    const rect = letter.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const dx = e.clientX - x;
    const dy = e.clientY - y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 80) {
      gsap.to(letter, {
        x: -dx * 0.15,
        y: -dy * 0.15,
        rotation: gsap.utils.random(-8, 8),
        filter: "blur(6px)",
        opacity: 0.8,
        duration: 0.25,
      });
    } else {
      gsap.to(letter, {
        x: 0,
        y: 0,
        rotation: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.4,
      });
    }
  });
  };
  const handleTitleLeave = () => {
  const letters = titleRef.current.querySelectorAll(".hero-letter");

  gsap.to(letters, {
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.01,
  });
  };

  



  return (
   <section 
   id="hero" 
   className="hero relative min-h-screen scroll-mt-24 overflow-hidden px-4 pt-5 pb-24 md:pt-5 md:pb-20">
    <div className=" mt-4 relative mx-auto flex min-h-[calc(100vh-10rem)] w-full flex-col items-center justify-evenly gap-10 overflow-hidden px-5 py-14 md:px-8 md:py-16">

    <Star   
    className="hero-star w-10 mt-10 h-10 text-[var(--site-text)] transition-all animate-spin-slow" 
    />

      <div
        className="relative w-full pt-15 h-fit flex flex-col items-center justify-center overflow-hidden"
        onPointerMove={moveImageAwayFromPointer}
        onPointerLeave={resetImagePosition}
      >
        
        <h1 
        ref={titleRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleTitleLeave}
        className="font-italiana  mb-20 md:mb-10 relative z-10 text-[var(--site-text)] text-6xl sm:text-8xl md:text-[130px] leading-[0.85] font-normal uppercase">
        {firsttext.split("").map((letter, index) => (
    <span
      key={index}
      className="hero-letter inline-block" >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
        </h1>

        <div
          ref={heroImageRef}
          className="absolute z-20 md:w-[180px] md:h-[180px] w-[130px] h-[130px] bg-[var(--site-bg)] rounded-md top-1/2 left-1/2 will-change-transform transition-transform duration-300 ease-out"
          style={{
            transform:
              "translate(calc(-50% + var(--hero-image-x, 0px)), calc(-50% + var(--hero-image-y, 0px)))",
          }}
        >
        <img 
    src={MainIllustration}
    alt="Illustration of girl"
    className=" w-full h-full object-cover rounded-md">
    </img>
        </div>

        <h1 
        ref={secondtitleRef}
        onMouseMove={handleMouseMoveSecondTitle}
        onMouseLeave={handleTitleLeaveSecondTitle}
        className=" font-italiana relative z-30 mb-10 text-[var(--site-text)] text-6xl sm:text-8xl md:text-[130px] leading-[0.85] uppercase">
        {text.split("").map((letter, index) => (
    <span
      key={index}
      className="hero-letter inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
</h1>
        
        <div className="absolute bottom-[-10px] w-full justify-center text-center">
          <h1 className="hero-letter font-italiana text-[24px] text-[var(--site-text)]">& Front-End Developer</h1>
        </div>
      </div>

     <div className="mt-10 hero-button">
       <GetinTouchButton ></GetinTouchButton>
     </div>

      <div className="flex w-full flex-row justify-between gap-4 items-center mt-10">
        
        <div className="hero-button flex gap-4">
        {socialLinks.slice(0, 2).map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.ariaLabel}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="hero-element flex justify-center hover:bg-[var(--site-hover)] transition-all items-center w-10 h-10 rounded-full border text-[var(--site-text)] border-[var(--site-border)] hover:border-transparent cursor-none"
          >
            {link.label}
          </a>
        ))}
        </div>
         

          <div className="hero-button flex gap-4 ">
        {socialLinks.slice(2).map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.ariaLabel}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="hero-element flex hover:bg-[var(--site-hover)] transition-all justify-center items-center w-10 h-10 rounded-full border text-[var(--site-text)] hover:border-transparent border-[var(--site-border)] cursor-none"
          >
            {link.label}
          </a>
        ))}
        </div>
      </div>
      
    </div>
    </section>
  );
}

export default Hero;
