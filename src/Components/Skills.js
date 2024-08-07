import React from "react";
import { skills } from "../data";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SkillsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(5, 0),
  textAlign: "center",
}));

const SkillCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  height: "100%",
}));

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <Box mb={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Skills & Technologies
          </Typography>
          <Typography variant="body1" color="textSecondary">
            I possess strong proficiency in core web technologies such as
            JavaScript, CSS, and HTML. Additionally, I have extensive experience
            with popular frameworks like React, Bootstrap, and Node.js. This
            enables me to effectively manage both front-end and back-end
            development tasks.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} key={skill}>
              <SkillCard>
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleIcon color="inherit" sx={{ mr: 2 }} />
                  <Typography variant="body1">{skill}</Typography>
                </CardContent>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
