import React from "react";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import { HelpOutline } from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search " type="text" />
      </div>
      <div className="header_right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
