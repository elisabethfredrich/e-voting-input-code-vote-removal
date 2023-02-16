import React from "react";
import "./Confirmation.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="container-confirmation container">
      <div className="content-confirmation">
        <h1>Thank you for voting</h1>
        <p>You will recieve an email, when all votes has been counted and the results are published on the offical webpage. </p>
        <br></br>
        <p>Use this webpage to check, if your vote has been counted correctly by finding your unique verification code.</p>
      </div>
    </div>
  );
}
