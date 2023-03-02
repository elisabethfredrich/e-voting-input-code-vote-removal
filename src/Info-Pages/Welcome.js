import React from "react";
import "./InfoPages.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Checkbox, Text } from "@chakra-ui/react";

export default function Welcome() {
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabled] = useState(true);

  const navigate = useNavigate();

  function handleChangeCheckbox() {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else {
      setChecked(true);

      setDisabled(false);
    }
  }

  return (
    <div className="container-info-pages">
      <div className="inner-box-info padding-top-info-page">
        <h1 className="h1-info-pages">Welcome to our study!</h1>
        <Text>Here follows some legal info...</Text>
        <Checkbox
          className="check-box check-box-red"
          id="checkBox-vote-info"
          isChecked={checked}
          onChange={handleChangeCheckbox}
        >
          I agree.
        </Checkbox>
        <Button
          onClick={() => navigate("/info-1")}
          className="red-btn"
          disabled={disabledButton}
        >
          Start
        </Button>
      </div>
    </div>
  );
}
