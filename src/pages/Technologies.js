import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Typography from "@mui/material/Typography";

// MUI Imports
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} id="tab-box">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Technologies = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar />
      <div className="content" id="technology-content">
        <Box sx={{ width: "80%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
            >
              <Tab label="Languages" {...a11yProps(0)} />
              <Tab label="Databases" {...a11yProps(1)} />
              <Tab label="Frameworks" {...a11yProps(2)} />
              <Tab label="Technologies" {...a11yProps(3)} />
              <Tab label="Tools" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box
              className="list-box"
              sx={{
                width: "90%",
                maxWidth: 400,
                bgcolor: "background.paper",
              }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="JavaScript" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="TypeScript" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="CSS3" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="HTML5" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Swift" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Kotlin" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Python" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>{" "}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              className="list-box"
              sx={{
                width: "90%",
                maxWidth: 400,
                bgcolor: "background.paper",
              }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="NoSQL" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="mySQL" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="MongoDB" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="PostgreSQL" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>{" "}
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box
              className="list-box"
              sx={{
                width: "80%",
                maxWidth: 400,
                bgcolor: "background.paper",
              }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="Node.js" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="React.js" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="React Native" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Zeppelin" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Express.js" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box
              className="list-box"
              sx={{
                width: "80%",
                maxWidth: 400,
                bgcolor: "background.paper",
              }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="Bootstrap" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="Materialize/MUI" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Tailwind" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Webpack" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Apollo/GraphQL" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Mongoose" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Sequelize" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="JWT" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="GSAP" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="JQuery" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Axios" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Handlebars" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box
              className="list-box"
              sx={{
                width: "80%",
                maxWidth: 400,
                bgcolor: "background.paper",
              }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="Git" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>
                      <ListItemText primary="Docker" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Homebrew" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="npm" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="yarn" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Adobe Creative Suite" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="Google Developer Suite" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{/* TODO- icon  */}</ListItemIcon>

                      <ListItemText primary="arcGIS" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </TabPanel>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Technologies;
