import { useRef, useEffect } from "react";
import gsap from "gsap";
import InkText from "./InkText";

export default function PageContent({ data, flip }) {
  const imgRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [data]);

  return (
    <div className={`content ${flip ? "flipped" : ""}`}>
      <img ref={imgRef} src={data.image} alt="" />

      <div className="text">
        <h3>{data.title}</h3>
        <InkText text={data.content} />
      </div>
    </div>
  );
}
