import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Spread from "./Spread";
import SinglePage from "./SinglePage";
import TitlePage from "./TitlePage";
import { logs } from "./logs";
import "./piratelogbook.css";

export default function PirateLogBook() {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const bookRef = useRef();
  const rightRef = useRef();

  const totalPages = logs.length + 3;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPage = () => {
    if (page < totalPages) animateFlip(() => setPage((p) => p + 1));
  };

  const prevPage = () => {
    if (page > 0) animateFlip(() => setPage((p) => p - 1), true);
  };

  const animateFlip = (cb, reverse = false) => {
    const tl = gsap.timeline();

    if (isMobile) {
      tl.to(bookRef.current, {
        rotateY: reverse ? 180 : -180,
        duration: 0.8,
        ease: "power2.inOut",
      }).add(() => {
        cb();
        gsap.set(bookRef.current, { rotateY: 0 });
      });
    } else {
      tl.to(rightRef.current, {
        rotateY: reverse ? 180 : -180,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.inOut",
      }).add(() => {
        cb();
        gsap.set(rightRef.current, { rotateY: 0 });
      });
    }

    // Lighting shift
    gsap.to(bookRef.current, {
      boxShadow: `inset -30px -20px 60px rgba(0,0,0,${Math.random() * 0.3})`,
      duration: 0.5,
    });
  };

  return (
    <div className="book-container">
      <div className="book" ref={bookRef}>
        {page === 0 ? (
          <div className="page cover">
            <h1>PIRATE LOG!</h1>
            <p>DO NOT ENTER!</p>
          </div>
        ) : page === 1 ? (
          <TitlePage />
        ) : isMobile ? (
          <SinglePage logs={logs} page={page - 2} />
        ) : (
          <Spread logs={logs} page={page - 2} rightRef={rightRef} />
        )}
      </div>

      <div className="controls">
        <button onClick={prevPage}>◀</button>
        <button onClick={nextPage}>▶</button>
      </div>
    </div>
  );
}
