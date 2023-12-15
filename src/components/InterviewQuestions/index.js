import React from "react";

// local imports
import data from "./questions.json";

// external imports
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const InterviewQuestions = () => {
  return (
    <>
      {" "}
      <List>
        {data.map((question, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={question.question} />
              {question.bulletpoint && (
                <List>
                  <ListItemText
                    component='span'
                    primary={question.bulletpoint?.key}
                  />
                  <ListItemText
                    component='span'
                    primary={question.bulletpoint?.value}
                  />
                </List>
              )}
            </ListItemButton>
          </ListItem>
        ))}{" "}
      </List>
    </>
  );
};

export default InterviewQuestions;
