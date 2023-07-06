import React, { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { advancedInput, advancedSearchPopover, goButton, inputImg, popOvers, year } from "../styles/AdvancedStyles";


const AdvancedSearch = () => {
  const [options, setOptions] = useState([
    { id: 1, label: "Year", value: "Year", anchorEl: null },
    { id: 2, label: "Make", value: "Make", anchorEl: null },
    { id: 3, label: "Model", value: "Model", anchorEl: null },
    { id: 4, label: "Submodel", value: "Submodel", anchorEl: null },
    { id: 5, label: "Engine", value: "Engine", anchorEl: null },
  ]);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleClick = (id, event) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, anchorEl: event.currentTarget } : option
      )
    );
    setIsPopoverOpen(true);
  };
  const handleClose = (id, event) => {
    // Check if the event is available and has a target
    // and  the "if (event?.target)" you ensure that the code won't throw an error when accessing event.target.textContent
    // you can also check by adding in event on onClose popover
    if (event?.target) {
      setOptions((prevOptions) =>
        prevOptions.map((option) => {
          if (option.id === id) {
            return {
              ...option,
              anchorEl: null,
              value: event.target.textContent || option.value,
            };
          }
          return option;
        })
      );
    }
    setIsPopoverOpen(false);
  };

  return (
    <div style={advancedInput}>
      <img
        src="https://cdn.dribbble.com/userupload/3261442/file/original-79302dac2eb04d0f9aecac39e67b596b.png?resize=400x0"
        alt="Description"
        style={inputImg}
      />
      <span className="input-text">Select your Vehicle</span>
      {isPopoverOpen && <div className="overlay" />}
      {options.map((option) => (
        <div
          style={popOvers}
          key={option.id}
          onClick={(event) => handleClick(option.id, event)}
        >
          <p style={year}>{option.value}</p>
          <ArrowDropDown />
          <Popover
            open={Boolean(option.anchorEl)}
            anchorEl={option.anchorEl}
            onClose={(event) => handleClose(option.id, event)}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 640, left: 477}}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            style={{ paper: advancedSearchPopover }} // Apply the CSS class to the popover to change size

          >
            {option.label === "Year" ? (
              <>
                <MenuItem 
                  onClick={(event) => handleClose(option.id, event)}
                  value="1998"
                >
                  1998
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="1999"
                >
                  1999
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="2000"
                >
                  2000
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="2001"
                >
                  2001
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="2002"
                >
                  2002
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="2003"
                >
                  2003
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="2000"
                >
                  2000
                </MenuItem>
              </>

            ) : option.label === "Make" ? (
              <>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="Honda"
                >
                  Honda
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="Toyota"
                >
                  Toyota
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="Audi"
                >
                  Audi
                </MenuItem>
              </>
            ) : option.label === "Model" ? (
              <>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="49er"
                >
                  49er
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="t50"
                >
                  t50
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="XV9"
                >
                  XV9
                </MenuItem>
              </>
            ) : option.label === "Submodel" ? (
              <>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="Gs"
                >
                  Gs
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="Rs"
                >
                  Rs
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="Ts"
                >
                  Ts
                </MenuItem>
              </>
            ) : option.label === "Engine" ? (
              <>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="2"
                >
                  2
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="3"
                >
                  3
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleClose(option.id, event)}
                  value="4"
                >
                  4
                </MenuItem>
              </>
            ) : null}
          </Popover>
        </div>
      ))}
      <Link to="/some-path" style={goButton}>
        
        <button>GO</button>
      </Link>
    </div>
  );
};

export default AdvancedSearch;
