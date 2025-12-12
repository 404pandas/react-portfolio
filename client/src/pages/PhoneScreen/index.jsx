import React, { useState } from "react";
import pirateImage from "../../assets/images/pirate-eo-mc.svg";
import "../../assets/css/phoneScreen.css";

const PhoneScreen = () => {
  const [number, setNumber] = useState("");

  const handlePress = (value) => {
    if (!/[0-9*#]/.test(value)) return;
    setNumber((prev) => (prev + value).slice(0, 15));
  };

  const handleDelete = () => {
    setNumber((prev) => prev.slice(0, -1));
  };

  const handleCall = () => {
    if (!number) {
      console.log("No number entered!");
      return;
    }
    const digitsOnly = number.replace(/[^0-9]/g, "");
    window.location.href = `tel:${digitsOnly}`;
  };

  const formatNumber = (num) => {
    const digitsOnly = num.replace(/\D/g, "");
    if (digitsOnly.length <= 3) return num;
    if (digitsOnly.length <= 6)
      return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}${num
        .replace(/\d/g, "")
        .replace(/-/g, "")}`;
    return `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(
      3,
      6
    )}-${digitsOnly.slice(6, 10)}${num.replace(/\d/g, "").replace(/-/g, "")}`;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const filtered = value.replace(/[^0-9*#]/g, "").slice(0, 15);
    setNumber(filtered);
  };

  return (
    <div className="phone-shell">
      <div className="phone-inner">
        {/* Pirate (caller icon) */}
        <div className="phone-avatar">
          <img src={pirateImage} alt="Pirate" className="pirate-icon" />
        </div>

        {/* Subtext under the pirate */}
        <p className="phone-subtext">
          I'm a React Native developer! Contact me if you're looking for a
          mobile developer to add to your team!
        </p>
        <p className="phone-subtext">(772) 834-2342</p>

        {/* Phone Number Input */}
        <div className="phone-display">
          <input
            type="text"
            value={formatNumber(number)}
            onChange={handleInputChange}
            placeholder="Enter Number"
            className="phone-input"
          />
        </div>

        {/* Keypad */}
        <div className="keypad">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
            (key) => (
              <button
                key={key}
                className="key-btn"
                onClick={() => handlePress(key)}
              >
                {key}
              </button>
            )
          )}
        </div>

        {/* Footer buttons */}
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
