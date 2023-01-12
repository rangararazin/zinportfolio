import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("all");

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <>
      <Tabs
        onChange={(e) => {
          const newTabValue = e.target.innerText.toLowerCase();
          handleChange(newTabValue);
        }}
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="all" label="About" key="all" to="/about" component={Link} />
        <Tab
          value="exp"
          label="Experience"
          key="exp"
          to="/experience"
          component={Link}
        />
        <Tab
          value="project"
          label="Project"
          key="project"
          to="/projects"
          component={Link}
        />
        <Tab
          value="contact"
          label="Contact"
          key="contact"
          to="/contact"
          component={Link}
        />
      </Tabs>
    </>
  );
};

export default Navbar;
