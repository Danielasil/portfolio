import Star from "./Star.jsx"

function GetinTouchButton() {
  return (
   <a
    href="mailto:danielasilva081996@gmail.com"
    className="transition-all group bg-[var(--site-button-bg)] px-4 md:px-5 hover:text-[var(--site-button-text-inactive)] hover:bg-[var(--site-hover-strong)] gap-2 h-fit py-3 rounded-3xl md:text-[16px] sm:text-[14px] text-[12px] w-fit flex items-center justify-center font-italiana font-normal text-[var(--site-button-text)] cursor-none"
   >
  Get in Touch
  <Star className="w-5 h-5 hidden sm:flex transition-all duration-700 group-hover:rotate-180 text-[var(--site-button-text)] group-hover:text-[var(--site-text)]"></Star>
  </a>
  );
}

export default GetinTouchButton;
