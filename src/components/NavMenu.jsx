import "./NavMenu.css";
import { useRef, useEffect, useLayoutEffect  } from "react"
import { Sun, Moon } from "lucide-react";
import gsap from "gsap";

function NavMenu({ isLightMode, onToggleTheme }) {
  const navRef = useRef(null);

  useLayoutEffect(() => {
  gsap.set(".nav-title", {
    opacity: 0,
    y: 25,
    scale: 0.98,
    filter: "blur(18px)",
  });

  gsap.to(".nav-title", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.3,
    ease: "expo.out",
    delay: 0.50,
  });
}, []);

const handleEnter = (e) => {
  gsap.to(e.currentTarget, {
    y: -2,
    opacity: 0.6,
    duration: 0.2,
  });
};

const handleLeave = (e) => {
  gsap.to(e.currentTarget, {
    y: 0,
    opacity: 1,
    duration: 0.2,
  });
};

  return (
    <nav 
     style={{
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
    background: "rgba(255,255,255,0.01)",
     maskImage: `linear-gradient(
      to bottom,
      black 0%,
      black 56%,
      rgba(0,0,0,.74) 74%,
      transparent 100%
    )`,
    WebkitMaskImage: `linear-gradient(
      to bottom,
      black 0%,
      black 56%,
      rgba(0,0,0,.74) 74%,
      transparent 100%
    )`,
  }}
    className="nav-menu fixed top-0 left-1/2 -translate-x-1/2 z-50 flex h-30 w-full items-center justify-between px-10 py-10 text-[16px] text-[var(--site-text)] md:h-30 md:px-8 md:text-[20px]">
      <a 
      ref={navRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="nav-title cursor-none nav-menu__item" href="#about">About Me</a>
      <a 
      ref={navRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="nav-title cursor-none nav-menu__item" href="#works">Works</a>
      <a 
      ref={navRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="nav-title cursor-none nav-menu__item nav-menu__brand" href="#hero">Daniela Silva</a>
      <a 
      ref={navRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="nav-title cursor-none nav-menu__item" href="#services">Services</a>
      <a 
      ref={navRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="nav-title cursor-none nav-menu__item" href="#contact">Contact</a>
      
      <button
        ref={navRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        type="button"
        className="nav-title nav-menu__item nav-menu__theme hidden md:flex"
        onClick={onToggleTheme}
        aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
      >
        {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </nav>
  );
}
export default NavMenu;
