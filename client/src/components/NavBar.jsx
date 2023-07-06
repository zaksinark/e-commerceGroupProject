import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const className = open ? "language-popover" : undefined;

  return (
    <>
      <div className="navbar">
        <a className="track" href="#">
          Track order
        </a>
      </div>

      <div className="flex">
        <div className="container">
          <MenuIcon className="menu-icon" />
          <h1 className="title">Carparts</h1>
          <div className="text-field-container">
            <TextField
              className="search-field"
              variant="outlined"
              placeholder="Search by Part Name, Part Number, Vehicle or Brand"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { borderRadius: "50px" },
              }}
            />
          </div>
        </div>
        <div className="language-field border-hover">
          <TextField
            placeholder="EN"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LanguageIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowDropDownIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="flex">
          <div
            className="sign-in border-hover"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <TextField
              variant="outlined"
              placeholder="Hello, sign-in"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowDropDownIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Popover
              className={className}
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 370, left: 1350 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <div className="pop-overdiv">
                <Button className="popover-signin">
                  <span className="pop">Sign in</span>
                </Button>
                <p className="new-customer">
                  New Customer?
                  <span>
                    {" "}
                    <a href="#">Start here.</a>
                  </span>
                </p>
                <br />
                <hr className="hr" />
                <br />
                <div className="flexx">
                  <a>Your List</a>
                  <a>Create a list</a>
                  <div className="vertical-line"></div>
                  <div className="container2">
                    <h3>Your Account</h3>
                    <a href="/account">Account</a>
                    <a href="track-order">Orders</a>
                    <a href="#">Watch List</a>
                    <a href="#">Address</a>
                    <a href="#">Browsing History</a>
                  </div>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      </div>

      {/* Botton NavBar */}
      <div className="container">
        <div className="locationdiv">
          <a href="#">
            <span className="hello">Hello</span> <br /> <LocationOnIcon />{" "}
            Select you're address
          </a>
        </div>
        <div className="container">
          <a className="navbar2" href="#">
            All Parts
          </a>
          <a className="navbar2" href="#">
            Breaks
          </a>

          <a className="navbar2" href="#">
            Engine & Drivetrain
          </a>
          <a className="navbar2" href="#">
            Suspension
          </a>
          <a className="navbar2" href="#">
            Exhaust
          </a>
          <a className="navbar2" href="#">
            Wheels & Tires
          </a>
          <a className="navbar2" href="#">
            Interior
          </a>
          <a className="navbar2" href="#">
            Exterior
          </a>
          <a className="navbar2" href="#">
            Lights
          </a>
        </div>
      </div>
    </>
  );
};
export default NavBar;
