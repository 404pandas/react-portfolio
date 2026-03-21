import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InkText({ text }) {
  const textRef = useRef();
  const quillRef = useRef();

  useEffect(() => {
    const el = textRef.current;
    el.innerHTML = "";
    let i = 0;

    const type = () => {
      if (i < text.length) {
        el.innerHTML += text[i];
        i++;

        const width = el.getBoundingClientRect().width;
        gsap.set(quillRef.current, { x: width });

        setTimeout(type, 15);
      }
    };

    type();

    gsap.to(quillRef.current, {
      rotation: 5,
      yoyo: true,
      repeat: -1,
      duration: 0.2,
    });
  }, [text]);

  return (
    <div style={{ position: "relative" }}>
      <p ref={textRef} className="ink-text" />

      <div ref={quillRef} className="quill" />
    </div>
  );
}
