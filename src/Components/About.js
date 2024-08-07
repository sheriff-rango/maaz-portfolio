import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

const AboutBox = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

const About = () => {
  return (
    <section id="about">
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AboutBox>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "medium",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Align children horizontally at the center
                  textAlign: "center", // Center text content
                }}
              >
                Maaz Syed
                <br /> Front End Developer
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                As a Junior Front End Developer with 1-2 years of freelance
                experience, I am seeking a challenging role where I can utilize
                my proficiency in JavaScript, CSS, HTML, React, Bootstrap, and
                Node.js. With a strong educational background in biochemistry
                from Baylor University, I aim to leverage my technical skills
                and passion for web development to contribute to a dynamic team.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Button
                  variant="contained"
                  color="success"
                  href="#contact"
                  sx={{ py: 2, px: 4, fontSize: "1rem" }}
                >
                  Work With Me
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="#projects"
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: "1rem",
                    color: "gray.400",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "gray.700",
                    },
                  }}
                >
                  See My Past Work
                </Button>
              </Box>
            </AboutBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://i.ibb.co/C92cyWc/IMG-20240204-WA0018-1.jpg"
              alt="hero"
              sx={{
                width: "100%",
                borderRadius: 1,
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
