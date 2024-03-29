import React from "react";

// local imports

import InterviewQuestions from "../components/InterviewQuestions";

// external imports
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TechInterview = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Todo-
  // State handling for "need to review"

  // Todo-
  // State for "display details"

  // Todo-
  // onclick for display details state

  // Todo-
  // onclick for need to review

  return (
    <>
      <div className='content' id='tech-interview-content'>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='technical interview example questions'
          >
            <Tab label='Prefilled' {...a11yProps(0)} />
            <Tab label='Click to Display' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {" "}
          <InterviewQuestions />{" "}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <InterviewQuestions />{" "}
        </CustomTabPanel>
      </div>{" "}
    </>
  );
};

export default TechInterview;
