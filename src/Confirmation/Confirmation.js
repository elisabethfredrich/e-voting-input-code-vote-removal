import React from "react";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="content-confirmation">
      <h1 className="blue-text">Thank you for voting!</h1>
        <Text>Once all votes have been counted, the results are published on our offical webpage. </Text>
        <Text marginTop="20px">Please use this webpage to check, if your vote has been counted correctly by finding your unique verification code.</Text>
        <Button className="button" onClick={()=>navigate("/break")} marginTop="2rem">Next</Button>
      </div>
    </div>
  );
}
