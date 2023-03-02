import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";

export default function Navbar() {

  return (
    <Box>
     
        <Flex className="navbar-container">
          <img src={Logo} alt="logo" />
        </Flex>
    </Box>
  );
}
