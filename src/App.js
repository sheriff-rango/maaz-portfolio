import React from "react";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Navbar from "./Components/NavBar.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
}
