import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
    <div className="outer-page-container">
      <div className="inner-page-container-narrow">
        <h1 className="blue-text">Thank you for voting!</h1>
        <Text>
          Once all votes have been counted, the results are published on our
          offical webpage.{" "}
        </Text>
        <Text>
          Please use this webpage to check, if your vote has been counted
          correctly by finding your unique verification code.
        </Text>
        <Button className="blue-btn" onClick={() => navigate("/info-2")}>
          Next
        </Button>
      </div>
    </div>
    </div>
  );
}
