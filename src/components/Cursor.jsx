import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isCursorEnabled, setIsCursorEnabled] = useState(false);

  useEffect(() => {
    const cursorMediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const updateCursorMode = () => {
      setIsCursorEnabled(cursorMediaQuery.matches);

      if (!cursorMediaQuery.matches) {
        setIsProjectHover(false);
      }
    };

    updateCursorMode();
    cursorMediaQuery.addEventListener("change", updateCursorMode);

    const handleMouseMove = (e) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseOver = (e) => {
      if (e.target.closest(".project-hover")) {
        setIsProjectHover(true);
      }
    };

    const handleMouseOut = (e) => {
      const projectElement = e.target.closest(".project-hover");

      if (
        projectElement &&
        (!e.relatedTarget || !projectElement.contains(e.relatedTarget))
      ) {
        setIsProjectHover(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      smoothMouse.current.x +=
        (mouse.current.x - smoothMouse.current.x) * 0.5;

      smoothMouse.current.y +=
        (mouse.current.y - smoothMouse.current.y) * 0.5;

      setPos({
        x: smoothMouse.current.x,
        y: smoothMouse.current.y,
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cursorMediaQuery.removeEventListener("change", updateCursorMode);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isCursorEnabled) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor-square ${isProjectHover ? "project-mode" : ""}`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      >
        {isProjectHover && <div><h1>VIEW</h1><h1>PROJECT</h1></div>}
      </div>

      <div
        className="cursor-line-horizontal"
        style={{
          top: `${pos.y}px`,
        }}
      />

      <div
        className="cursor-line-vertical "
        style={{
          left: `${pos.x}px`,
        }}
      />
    </>
  );
}
