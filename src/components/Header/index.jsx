import React from "react";
import { TextField } from "@mui/material";
import logo from "../../assets/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="150" src={logo} alt="pokemon" />
        </div>
        <div className="header__search">
          <TextField id="outlined-size-small" size="small" />
        </div>
      </div>
    </div>
  );
};

export default Header;
