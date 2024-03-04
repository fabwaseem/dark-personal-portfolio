"use client";
import React, { MouseEvent, ReactElement, useEffect, useRef } from "react";

const Cursor = () => {
  const cursor1Ref = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCursor = (e: MouseEventInit) => {
      if (cursor1Ref.current && cursor2Ref.current ) {
        cursor1Ref.current.style.left = e.clientX + "px";
        cursor1Ref.current.style.top = e.clientY + "px";
        cursor2Ref.current.style.left = e.clientX + "px";
        cursor2Ref.current.style.top = e.clientY + "px";
      }
    };

    const cursorHover = () => {
      if (cursor1Ref.current && cursor2Ref.current ) {
        cursor1Ref.current.classList.add("hover");
        cursor2Ref.current.classList.add("hover");
      }
    }

    const cursorUnHover = () => {
      if (cursor1Ref.current && cursor2Ref.current ) {
        cursor1Ref.current.classList.remove("hover");
        cursor2Ref.current.classList.remove("hover");
      }
    }

    const hoverTargets = document.querySelectorAll("a, button, input");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseover", cursorHover);
      target.addEventListener("mouseleave", cursorUnHover);
    });

    document.body.addEventListener("mousemove", animateCursor);

    return () => {
      document.body.removeEventListener("mousemove", animateCursor);
    };
  }, []);

  return (
    <div>
      <div className="cursor1" ref={cursor1Ref}></div>
      <div className="cursor2" ref={cursor2Ref}></div>
    </div>
  );
};

export default Cursor;
