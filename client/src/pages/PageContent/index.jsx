import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const PageContent = ({ children }) => {
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", clearProps: "all" }
    );
    return () => tween.kill();
  }, [location.pathname]);

  return <div ref={ref}>{children}</div>;
};

export default PageContent;
