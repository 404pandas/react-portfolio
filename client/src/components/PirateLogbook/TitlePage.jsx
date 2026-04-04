import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./piratelogbook.css";

export default function TitlePage() {
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(textRef.current, { opacity: 0, duration: 0.5, delay: 1 })
      .set(textRef.current, { textContent: "Pirate Log by Mary Elenius" })
      .to(textRef.current, { opacity: 1, duration: 1 });

    return () => tl.kill();
  }, []);

  return (
    <div className="page title">
      <div className="title-inner">
        <h1 ref={textRef}>Just kidding!</h1>
        <p className="subtitle">A Totally Serious Pirate Document</p>
      </div>
    </div>
  );
}
