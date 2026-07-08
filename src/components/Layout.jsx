import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import Hero from "./Hero";
import Works from "./Works";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import AboutMe from "./AboutMe";


function Layout() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.localStorage.getItem("site-theme") || "dark";
  });

  const isLightMode = theme === "light";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("site-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-[var(--site-bg)] text-[var(--site-text)] transition-colors duration-300">
    <NavMenu isLightMode={isLightMode} onToggleTheme={toggleTheme}></NavMenu>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Works></Works>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}


export default Layout;
