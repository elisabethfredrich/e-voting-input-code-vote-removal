import React from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";
import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  return (
    <div>
      {![ "/", "/survey", "/welcome", "/break"].includes(
        pathname
      ) && (
        <Box
          w="100vw"
          h="10vh"
          position={"fixed"}
          top="0"
          bg="#EEF5FB"
          display={"flex"}
          paddingLeft="2rem"
          paddingRight="2rem"
          zIndex={"10"}
        >
          {/* Logo */}
          <Box
           w={"10rem"}
            h="120%"
            display="flex"
            justifyContent="center"

          >
            <img src={Logo} />
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Navbar;
