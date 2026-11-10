import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { icons, DIG_EVENT } from "../MapIcon";
import { setHovered } from "../../features/iconNearShip/iconNearShipSlice";

import WithWind from "./WithWind";
import WithoutWind from "./WithoutWind";
import "./ship.css";
import Modal from "../Modal";
import Phone from "../Phone";

const MOVE_STEP = 15;

const Ship = () => {
  const dispatch = useDispatch();

  const [position, setPosition] = useState({ x: 25, y: 25 });
  const [isMoving, setIsMoving] = useState(false);
  const [showWindSails, setShowWindSails] = useState(false);
  const shipRef = useRef(null);

  // Use refs for proximity tracking so the interval always sees fresh values
  // without needing them in the dep array (avoids stale closure + excess re-runs)
  const enteredIconsRef = useRef(new Set());
  const currentNearIconRef = useRef(null);

  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 900);
    };

    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkScreenSize();
    checkTouchDevice();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Entrance animation — plays once when the ship becomes visible
  useEffect(() => {
    if (isMediumScreen && !isTouchDevice && shipRef.current) {
      const tween = gsap.fromTo(
        shipRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.9, delay: 0.7, ease: "power2.out" }
      );
      return () => tween.kill();
    }
  }, [isMediumScreen, isTouchDevice]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (key === "Enter") {
        if (currentNearIconRef.current) {
          // MapIcon plays the "X marks the spot" dig, then navigates.
          window.dispatchEvent(
            new CustomEvent(DIG_EVENT, { detail: currentNearIconRef.current })
          );
        }
        return;
      }

      let dx = 0;
      let dy = 0;
      switch (key) {
        case "w":
        case "W":
        case "ArrowUp":
          dy = -MOVE_STEP;
          break;
        case "a":
        case "A":
        case "ArrowLeft":
          dx = -MOVE_STEP;
          break;
        case "s":
        case "S":
        case "ArrowDown":
          dy = MOVE_STEP;
          break;
        case "d":
        case "D":
        case "ArrowRight":
          dx = MOVE_STEP;
          break;
        default:
          return;
      }

      // Stop the arrow keys from scrolling the page while sailing.
      if (key.startsWith("Arrow")) event.preventDefault();
      setIsMoving(true);
      // Functional update: holding a key stacks steps instead of repeatedly
      // recomputing from a stale `position` snapshot.
      setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    };

    const handleKeyUp = () => {
      setIsMoving(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [dispatch]);

  useEffect(() => {
    setShowWindSails(isMoving);
  }, [isMoving]);

  useEffect(() => {
    const checkProximity = () => {
      if (!shipRef.current) return;

      const shipRect = shipRef.current.getBoundingClientRect();
      const iconsElements = document.querySelectorAll(".landing-icon");

      iconsElements.forEach((iconElement) => {
        const iconRect = iconElement.getBoundingClientRect();
        const icon = icons.find((i) => i.id === iconElement.id);
        if (!icon) return;

        const isEntering =
          shipRect.left < iconRect.right &&
          shipRect.right > iconRect.left &&
          shipRect.top < iconRect.bottom &&
          shipRect.bottom > iconRect.top;

        const isExiting =
          enteredIconsRef.current.has(icon.id) &&
          (shipRect.right < iconRect.left ||
            shipRect.left > iconRect.right ||
            shipRect.bottom < iconRect.top ||
            shipRect.top > iconRect.bottom);

        if (isEntering) {
          if (!enteredIconsRef.current.has(icon.id)) {
            enteredIconsRef.current.add(icon.id);
            dispatch(setHovered({ icon: icon.id, hovered: true }));
            currentNearIconRef.current = icon.route;
          }
        } else if (isExiting) {
          enteredIconsRef.current.delete(icon.id);
          dispatch(setHovered({ icon: icon.id, hovered: false }));
          currentNearIconRef.current = null;
        }
      });
    };

    const intervalId = setInterval(checkProximity, 250);

    return () => clearInterval(intervalId);
    // Reads live values off the DOM and refs, so it only needs to be set up once.
  }, [dispatch]);

  const shipStyle = {
    width: "100%",
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: "left 0.2s, top 0.2s",
  };

  return isMediumScreen && !isTouchDevice ? (
    <div ref={shipRef} id="ship-container" style={shipStyle}>
      {showWindSails ? <WithWind /> : <WithoutWind />}
      <div className="modals">
        <Modal />
      </div>
    </div>
  ) : null;
};

export default Ship;
