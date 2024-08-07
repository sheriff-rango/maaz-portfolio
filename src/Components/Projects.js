import React from "react";
import { projects } from "../data";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Badge,
} from "@mui/material";
import { styled } from "@mui/system";
import CodeIcon from "@mui/icons-material/Code";

const ProjectsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(5, 0),
  textAlign: "center",
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
}));

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Box mb={4}>
          <Badge badgeContent={<CodeIcon />} color="primary">
            <Typography variant="h4" component="h2" gutterBottom>
              Apps I've Built
            </Typography>
          </Badge>
          <Typography variant="body1" color="textSecondary">
            These are some examples of the projects I have built in the past
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.image}>
              <ProjectCard>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {project.subtitle}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={project.link}>
                    Learn More
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
