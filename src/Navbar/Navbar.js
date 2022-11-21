import React from "react";
import { Box, Grid, GridItem, Link } from "@chakra-ui/react";
import { useContext } from "react";
import "../App.css";
import "./Navbar.css";
import logo from "./logo-folketinget.svg";
import { CheckIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../Context";

function Navbar() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const voted = useContext(Context);

  return (
    <div>
      {!["/login", "/", "/home", "/invitation", "/resultnotification"].includes(
        pathname
      ) && (
        <Box
          w="100vw"
          h="10vh"
          position={"fixed"}
          top="0"
          bg="#EEF5FB"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          paddingLeft="2rem"
          paddingRight="2rem"
          zIndex={"10"}
        >
          {/* Logo */}
          <Box
            /*   bg='#EEF5FB'
             */ w={"7rem"}
            h="100%"
            padding="0.5rem"
            display="flex"
            justifyContent="center"
            onClick={() => navigate("/home")}
            cursor="pointer"
          >
            <img src={logo} />
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Navbar;
