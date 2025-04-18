// src/components/ContactForm.tsx
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    topic: "",
    message: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ topic: "", message: "", email: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ maxWidth: 500, mx: "auto" }}
    >
      <Typography variant='h5' gutterBottom>
        Contact Me
      </Typography>
      <TextField
        label='Topic'
        name='topic'
        value={formData.topic}
        onChange={handleChange}
        fullWidth
        margin='normal'
        required
      />
      <TextField
        label='Message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin='normal'
        required
      />
      <TextField
        label='Email'
        name='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin='normal'
        required
      />
      <Button type='submit' variant='contained' sx={{ mt: 2 }}>
        Send
      </Button>
      {status && <Typography sx={{ mt: 2 }}>{status}</Typography>}
    </Box>
  );
};

export default ContactForm;
