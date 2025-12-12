// Phone.jsx
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Divider from "@mui/material/Divider";
import "./phone.css";
import { useNavigate } from "react-router-dom";

const Phone = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/phone");
  };
  return (
    <div id="phone-modal-wrapper">
      {/* Phone icon button */}
      <Button variant="outlined" onClick={handleClick} className="close-btn">
        <PhoneIphoneIcon className="i-icon" sx={{ fontSize: 60 }} />
      </Button>
    </div>
  );
};

export default Phone;
