import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const NavBar = ({ title }: { title: string }) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
