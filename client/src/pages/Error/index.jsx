import { useEffect } from "react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import gsap from "gsap";
import "../../assets/css/error.css";

export default function Error() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;
  if (!isNotFound) console.error(error);

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
        <h1>{isNotFound ? "Lost at Sea!" : "Oops!"}</h1>
        <div className="error-rope" />
        <p>
          {isNotFound
            ? "There be no page charted at these coordinates."
            : "Sorry, an unexpected error has occurred."}
        </p>
        <p>
          <i>{error?.statusText || error?.message || "Unknown error"}</i>
        </p>
        <div className="error-rope" />
        <Link to="/" className="error-home">
          Return to port
        </Link>
        <div className="error-seal">{isNotFound ? "404" : "!"}</div>
      </div>
    </div>
  );
}
