import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

export function ReportingConfirmation(props) {
  const navigate = useNavigate();

  return (
    <div id={props.id} style={{ visibility: props.visibility }}>
      <h1 className="blue-text">Thank you for your report</h1>
      <Text>
        We have received your message and will get back to you as soon as
        possible.
      </Text>

      <Button className="blue-btn" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
}
