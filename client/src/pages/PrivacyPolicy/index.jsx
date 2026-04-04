import { useState } from "react";
import { Container, Typography, Box, FormControlLabel, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { EnglishPolicy, PiratePolicy } from "../../components/PolicyContent";
import "../../assets/css/whois.css";

export default function PrivacyPolicy() {
  const [pirateMode, setPirateMode] = useState(
    localStorage.getItem("pirateTalk") === "true"
  );

  const handlePirateToggle = (e) => {
    const val = e.target.checked;
    setPirateMode(val);
    localStorage.setItem("pirateTalk", val);
  };

  return (
    <Container maxWidth="md" className="whois-container">
      <Box sx={{ mb: 2 }}>
        <Link to="/whois" className="whois-back-link">
          ← Back to Who Is...?
        </Link>
      </Box>

      <Typography variant="h1" className="whois-title" sx={{ mb: 3 }}>
        {pirateMode ? "The Captain's Charter of Privacy" : "Privacy Policy"}
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={pirateMode}
            onChange={handlePirateToggle}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": { color: "#594b39" },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#594b39",
              },
            }}
          />
        }
        label="Pirate Talk"
        sx={{ mb: 3 }}
      />

      <Box className="whois-policy">
        {pirateMode ? <PiratePolicy /> : <EnglishPolicy />}
      </Box>
    </Container>
  );
}
