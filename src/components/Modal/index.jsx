import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Divider from "@mui/material/Divider";
import Pirate from "../Pirate";
import Sign from "../Sign";
import "./style.css";

const Modal = () => {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="close-btn"
      >
        <InfoIcon
          sx={{
            fontSize: 60,
          }}
        />
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseOutlinedIcon />
          </Button>
        </DialogActions>
        <DialogTitle id="responsive-dialog-title" className="dt-1">
          {"Ahoy, mateys!"}
        </DialogTitle>
        <Divider variant="middle" className="divider" />{" "}
        <DialogContent>
          <DialogContentText>
            This here portfolio be a work in progress as I chart new waters on
            me coding journey. As we sail onward, more projects, technologies,
            and tales about meself shall be added. I trust ye’ll enjoy this
            adventure as much as I do!
          </DialogContentText>

          <DialogContentText>
            On larger vessels, ye can navigate the ship to each point of
            interest usin' `WASD`, and press `Enter` to explore further. On
            smaller craft, simply click each icon to embark on yer next
            destination.
          </DialogContentText>
        </DialogContent>{" "}
      </Dialog>{" "}
      {open && (
        <>
          <Pirate />
          <Sign />
        </>
      )}
    </React.Fragment>
  );
};

export default Modal;
