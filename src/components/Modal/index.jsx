// third party modules
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InfoIcon from "@mui/icons-material/Info";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import * as React from "react";

// local modules
import Pirate from "../Pirate";
import Sign from "../Sign";
import "./style.css";

const Modal = () => {
  const [open, setOpen] = React.useState(
    !localStorage.getItem("doNotShowAgain")
  );
  const [language, setLanguage] = React.useState(
    localStorage.getItem("pirateTalk") === "true" ? "pirate" : "english"
  );
  const [doNotShowAgain, setDoNotShowAgain] = React.useState(
    localStorage.getItem("doNotShowAgain") === "true"
  );

  React.useEffect(() => {
    // Check if "pirateTalk" exists in localStorage, if not, set it to true
    if (localStorage.getItem("pirateTalk") === null) {
      localStorage.setItem("pirateTalk", "true");
      setLanguage("pirate");
    } else {
      const isPirate = localStorage.getItem("pirateTalk") === "true";
      setLanguage(isPirate ? "pirate" : "english");
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLanguageToggle = (event) => {
    const isPirate = event.target.checked;
    setLanguage(isPirate ? "pirate" : "english");
    localStorage.setItem("pirateTalk", isPirate);
  };

  const handleDoNotShowAgain = (event) => {
    const checked = event.target.checked;
    setDoNotShowAgain(checked);
    if (checked) {
      setOpen(false);
      localStorage.setItem("doNotShowAgain", "true");
    } else {
      localStorage.removeItem("doNotShowAgain");
    }
  };

  const pirateContent = {
    title: "Ahoy, mateys!",
    contentText: [
      "This here portfolio be a work in progress as I chart new waters on me coding journey. As we sail onward, more projects, technologies, and tales about meself shall be added. I trust ye’ll enjoy this adventure as much as I do!",
      "On larger vessels, ye can navigate the ship to each point of interest usin' `WASD`, and press `Enter` to explore further. On smaller craft, simply click each icon to embark on yer next destination.",
    ],
    doNotShowAgain: "Walk the plank, ye scallywag pop up!",
  };

  const englishContent = {
    title: "Hello, friends!",
    contentText: [
      "This portfolio is a work in progress as I continue my coding journey. As we move forward, more projects, technologies, and information about myself will be added. I hope you enjoy this adventure as much as I do!",
      "On larger screens, you can navigate the ship to each point of interest using `WASD`, and press `Enter` to explore further. On smaller screens, simply click each icon to proceed to your next destination.",
    ],
    doNotShowAgain: "Please, do not show again!",
  };

  const content = language === "pirate" ? pirateContent : englishContent;

  return (
    <div id="modal-z">
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="close-btn"
      >
        <InfoIcon
          className="i-icon"
          sx={{
            fontSize: 60,
          }}
        />
      </Button>
      <div>
        {open && (
          <div className="modal-decal">
            <Pirate />
            <Sign />
          </div>
        )}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        id="test"
      >
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseOutlinedIcon />
          </Button>
        </DialogActions>
        <DialogTitle id="responsive-dialog-title" className="dt-1">
          {content.title}
        </DialogTitle>
        <Divider variant="middle" className="divider" />
        <DialogContent>
          {content.contentText.map((text, index) => (
            <DialogContentText key={index}>{text}</DialogContentText>
          ))}
          <FormControlLabel
            control={
              <Checkbox
                checked={doNotShowAgain}
                onChange={handleDoNotShowAgain}
                name="doNotShowAgain"
              />
            }
            label={content.doNotShowAgain}
            className="do-not-show-again"
          />
          <FormControlLabel
            control={
              <Switch
                checked={language === "pirate"}
                onChange={handleLanguageToggle}
              />
            }
            label="Pirate Talk"
            sx={{ marginTop: 2 }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
