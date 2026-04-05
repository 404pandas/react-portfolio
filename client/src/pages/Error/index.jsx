import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import gsap from "gsap";
import "../../assets/css/error.css";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#error-cont h1",
      { scale: 2.2, opacity: 0, rotation: -8 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.85, ease: "elastic.out(1, 0.45)" }
    ).fromTo(
      "#error-cont p",
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, stagger: 0.18, duration: 0.4, ease: "power2.out" },
      "-=0.35"
    );
    return () => tl.kill();
  }, []);

  return (
    <div id="error-cont">
      <div className="error-card">
        <h1>Oops!</h1>
        <div className="error-rope" />
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <div className="error-rope" />
        <div className="error-seal">404</div>
      </div>
    </div>
  );
}
