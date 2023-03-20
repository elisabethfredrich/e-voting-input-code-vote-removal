import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function ReportingConfirmation(props) {
  const navigate = useNavigate();

  return (
    <div id={props.id} style={{ visibility: props.visibility }}>
      <h1 className="blue-text">Thank you for your report</h1>
      <Text>
        We have received your message and will get back to you as soon as
        possible.
      </Text>
      <Button
        className="blue-btn"
        width={"100%"}
        onClick={() => navigate("/info-3")}
      >
        Finish
      </Button>
    </div>
  );
}
