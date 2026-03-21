import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function PirateSkull() {
  const eyeRef = useRef();
  const skullRef = useRef();

  useEffect(() => {
    gsap.to(eyeRef.current, {
      scaleY: 0.1,
      repeat: -1,
      yoyo: true,
      duration: 0.2,
      repeatDelay: 2,
    });

    gsap.to(skullRef.current, {
      y: 5,
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  }, []);

  return (
    <svg ref={skullRef} width="200" height="200">
      <circle cx="100" cy="100" r="80" stroke="black" fill="none" />
      <circle cx="70" cy="80" r="10" fill="black" />
      <circle ref={eyeRef} cx="130" cy="80" r="10" fill="black" />
    </svg>
  );
}
