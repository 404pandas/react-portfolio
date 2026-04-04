import React, { useState, useEffect } from "react";
import gsap from "gsap";
import pirateImage from "../../assets/images/pirate-eo-mc.svg";
import "../../assets/css/phoneScreen.css";

const PhoneScreen = () => {
  const [number, setNumber] = useState("772-834-2342");

  const handlePress = (value) => {
    if (!/[0-9*#]/.test(value)) return;
    setNumber((prev) => (prev + value).slice(0, 15));
  };

  const handleDelete = () => setNumber((prev) => prev.slice(0, -1));

  const handleCall = () => {
    if (!number) return;
    const digitsOnly = number.replace(/[^0-9]/g, "");
    window.location.href = `tel:${digitsOnly}`;
  };

  // Tap animation on keypad buttons
  const handleKeyPress = (value) => {
    handlePress(value);
  };

  const formatNumber = (num) => {
    const digitsOnly = num.replace(/\D/g, "");
    if (digitsOnly.length <= 3) return num;
    if (digitsOnly.length <= 6)
      return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
    return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`;
  };

  const handleInputChange = (e) => {
    const filtered = e.target.value.replace(/[^0-9*#]/g, "").slice(0, 15);
    setNumber(filtered);
  };

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      ".phone-shell",
      { y: -55, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.3)" }
    )
      .fromTo(
        ".phone-avatar img",
        { scale: 0, rotation: -20, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.5, ease: "back.out(2)" },
        "-=0.35"
      )
      .fromTo(
        ".phone-display",
        { opacity: 0, scaleX: 0.85 },
        { opacity: 1, scaleX: 1, duration: 0.4 },
        "-=0.25"
      )
      .fromTo(
        ".key-btn",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: { amount: 0.45, from: "start" },
          ease: "back.out(1.8)",
          duration: 0.3,
        },
        "-=0.2"
      )
      .fromTo(
        ".delete-btn, .call-btn",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.1, ease: "back.out(2)", duration: 0.3 },
        "-=0.1"
      );
    return () => tl.kill();
  }, []);

  return (
    <div className="phone-shell">
      <div className="phone-inner">
        <div className="phone-avatar">
          <img src={pirateImage} alt="Pirate" className="pirate-icon" />
        </div>

        <p className="phone-subtext">
          I'm a React Native developer! Contact me if you're looking for a
          mobile developer to add to your team!
        </p>
        <p className="phone-sub-subtext">
          Click the call button below to call me. Otherwise, replace the number
          to call just about anyone!
        </p>

        <div className="phone-display">
          <input
            type="text"
            value={formatNumber(number)}
            onChange={handleInputChange}
            placeholder="Enter Number"
            className="phone-input"
          />
        </div>

        <div className="keypad">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
            (key) => (
              <button
                key={key}
                className="key-btn"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            )
          )}
        </div>

        <div className="phone-footer">
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
          <button className="call-btn" onClick={handleCall}>
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;
