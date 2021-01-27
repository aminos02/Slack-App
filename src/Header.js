import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
function Header() {
  return (
    <div className="header">
      <div className="header_lef">
        <Avatar className="header_avatar" alt="avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header_search"></div>
      <div className="header_right"></div>
    </div>
  );
}

export default Header;
