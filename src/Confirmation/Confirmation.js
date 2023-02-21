import React from "react";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="container-confirmation container">
      <div className="content-confirmation">
      <h1>Thank you for voting!</h1>
        <p>Once all votes has been counted, the results are published on our offical webpage. </p>
        <br></br>
        <p>Please use this webpage to check, if your vote has been counted correctly by finding your unique verification code.</p>
        <br></br>
        <Button className="button" onClick={()=>navigate("/break")}>Next</Button>
      </div>
    </div>
  );
}
