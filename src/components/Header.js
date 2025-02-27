import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar sx={{
  position: "sticky",
  top: 0,
  backgroundColor: "#0f0f8a",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  zIndex: 1100,
}} className="header">
    <Typography variant="h5">
      <Link to="/">
      Spamfiles
      </Link>
    </Typography>
  </AppBar>
  );
}

export default Header;
