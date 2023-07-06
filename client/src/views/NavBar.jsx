import React from "react";
import TrackOrder from "../components/TrackOrder";
import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";
import { useState } from "react";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const className = open ? "language-popover" : undefined;

  return (
    <div>
      <div>
        <TrackOrder />
      </div>
      <div>
        <TopNavBar />
      </div>
      <div>
        <BottomNavBar />
      </div>
    </div>
  );
};

export default NavBar;
