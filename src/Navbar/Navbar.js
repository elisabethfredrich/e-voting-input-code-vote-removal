import React from "react";
import { Box } from "@chakra-ui/react";
import "../App.css";
import "./Navbar.css";
import Logo from "../assets/logo-folketinget.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

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
           w={"7rem"}
            h="100%"
            padding="0.5rem"
            display="flex"
            justifyContent="center"
            //onClick={() => navigate("/home")}
            //cursor="pointer"
          >
            <img src={Logo} />
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Navbar;
