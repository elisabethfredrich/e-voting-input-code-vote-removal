import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

export default function Info3() {
  const navigate = useNavigate();

  return (
    <div className="container-info-pages">
      <div className="inner-box-info centered-info-page">
        <h2 className="h2-info-pages">Please tell us about your experience</h2>
        <Text className="medium-body-text-info">
          Congratulations! You have finished the second part of the study.
        </Text>

        <Text className="medium-body-text-info">
          To complete the study, please click on the button below and fill out a
          survey about your experience of the online voting system.
        </Text>
        <Button
          marginTop={"2rem"}
          width="8rem"
          className="red-btn"
          onClick={() => navigate("/XXX")}
        >
          Go to survey
        </Button>
      </div>
    </div>
  );
}
