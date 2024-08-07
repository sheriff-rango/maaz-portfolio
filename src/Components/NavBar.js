// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const NavbarLink = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(2),
  color: theme.palette.text.secondary || "#b0bec5", // Provide a default value
  "&:hover": {
    color: theme.palette.common.white,
  },
}));

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "background.paper", zIndex: 10 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="#about"
          sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
        >
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavbarLink href="#projects">Past Work</NavbarLink>
          <NavbarLink href="#skills">Skills</NavbarLink>
        </Box>
        <Button
          href="#contact"
          variant="outlined"
          color="secondary"
          endIcon={<ArrowRightIcon />}
          sx={{
            mt: { xs: 2, md: 0 },
            py: 1,
            px: 3,
            borderColor: "grey.700",
            "&:hover": { borderColor: "grey.500", backgroundColor: "grey.700" },
            fontWeight: 'bold', // Add bold font weight
          }}
        >
          Hire Me
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
