import { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Tab, Tabs, useMediaQuery, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [value, setValue] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    setAnchorEl(null); // Close the menu on mobile when a link is clicked
  };

  // Use MediaQuery to detect screen size
  const isMobile = useMediaQuery('(max-width: 600px)');

  // Toggle menu open/close
  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              RR
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              <MenuItem onClick={() => handleChange("about")} component={Link} to="/about">About</MenuItem>
              <MenuItem onClick={() => handleChange("exp")} component={Link} to="/experience">Experience</MenuItem>
              <MenuItem onClick={() => handleChange("projects")} component={Link} to="/projects">Projects</MenuItem>
              <MenuItem onClick={() => handleChange("contact")} component={Link} to="/contact">Contact</MenuItem>
              <MenuItem onClick={() => handleChange("skills")} component={Link} to="/skills">Skills</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: "rgb(209 213 219)", // Change color as needed
              }}
            >
              <Typography class="text-teal-600 font-extrabold font-mono text-2xl"  variant="h6"  sx={{ flexGrow: 1, textAlign: "center" }}>
                RR
              </Typography>
            </Box>
            <Tabs
              value={value}
              textColor="white"
              te
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              
            >
              <Tab
                value="about"
                label="About"
                component={Link}
                to="/about"
                selected={value === "about"}
                onClick={() => handleChange("about")}
              />
              <Tab
                value="exp"
                label="Experience"
                component={Link}
                to="/experience"
                selected={value === "exp"}
                onClick={() => handleChange("exp")}
              />
              <Tab
                value="projects"
                label="Projects"
                component={Link}
                to="/projects"
                selected={value === "projects"}
                onClick={() => handleChange("projects")}
              />
              <Tab
                value="contact"
                label="Contact"
                component={Link}
                to="/contact"
                selected={value === "contact"}
                onClick={() => handleChange("contact")}
              />
              <Tab
                value="skills"
                label="Skills"
                component={Link}
                to="/skills"
                selected={value === "skills"}
                onClick={() => handleChange("skills")}
              />
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
