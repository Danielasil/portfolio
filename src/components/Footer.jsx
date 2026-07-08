import { useLayoutEffect, useRef } from "react"
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
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


function Footer() {
  
const footerRef = useRef(null);

 useLayoutEffect(() => {
  const buttons = footerRef.current.querySelectorAll(".footer-button");

  gsap.set(buttons, {
    opacity: 0,
    y: 25,
    filter: "blur(18px)",
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(buttons, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.08,
          ease: "expo.out",
        });

        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(footerRef.current);

  return () => observer.disconnect();
}, []);

 useLayoutEffect(() => {
  const buttons = footerRef.current.querySelectorAll(".footer-location");

  gsap.set(buttons, {
    opacity: 0,
    y: 30,
    filter: "blur(30px)",
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        gsap.to(buttons, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.80,
          stagger: 0.08,
          ease: "expo.out",
        });

        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(footerRef.current);

  return () => observer.disconnect();
}, []);

  return (
    <section 
    
     id="footer"
     className="relative h-fit overflow-hidden flex flex-col items-center justify-evenly gap-10 mt-10 mb-15">
      
      <div 
      ref={footerRef}
      className="h-[100px] flex flex-col gap-8 justify-center items-center text-[var(--site-text)]">
        <div className="flex gap-8 w-fit justify-center items-center">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.ariaLabel}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="footer-button flex justify-center hover:bg-[var(--site-hover)] transition-all items-center w-10 h-10 rounded-full border text-[var(--site-text)] border-[var(--site-border)] hover:border-transparent cursor-none"
            >
              {link.label}
            </a>
          ))}
        </div>
        <h1 className="footer-location font-italiana text-[18px]">Oviedo, Asturias. Spain</h1>
      </div>
    </section>
  );
}

export default Footer;
