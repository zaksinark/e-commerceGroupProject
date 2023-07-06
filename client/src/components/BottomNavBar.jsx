import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {locationStyle, container, navbar2} from '../styles/BottomNavStyles';

const BottomNavBar = () => {
  return (
    <div style={container}>
      <div style={locationStyle}>
        <a href="#">
          <span className="hello">Hello</span> <br /> <LocationOnIcon /> Select
          your address
        </a>
      </div>
      <div className="navbarContainer">
        <div className="flexContainer">
          <div >
            Hamburger component
          </div>
          <div >
            {/* Carparts component */}
          </div>
          <div className="searchbar">
            {/* Search bar component */}
          </div>
        </div>
        <a style={container} href="#">
          All Parts
        </a>
        <a style={navbar2} href="#">
          Breaks
        </a>
        <a style={navbar2} href="#">
          Engine & Drivetrain
        </a>
        <a style={navbar2} href="#">
          Suspension
        </a>
        <a style={navbar2} href="#">
          Exhaust
        </a>
        <a style={navbar2} href="#">
          Wheels & Tires
        </a>
        <a style={navbar2} href="#">
          Interior
        </a>
        <a style={navbar2} href="#">
          Exterior
        </a>
        <a style={navbar2} href="#">
          Lights
        </a>
      </div>
    </div>
  );
};

export default BottomNavBar;
