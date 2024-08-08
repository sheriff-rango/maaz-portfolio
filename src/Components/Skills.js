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

const SkillsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(10, 0),
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
            <Grid item xs={12} lg={3} md={4} sm={6} key={skill.title}>
              <SkillCard>
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <skill.icon color="inherit" style={{ marginRight: 5 }} />
                  <Typography variant="body1">{skill.title}</Typography>
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
