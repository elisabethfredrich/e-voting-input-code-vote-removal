import "./Report.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { saveReportOfProblem } from "../API/Voter";

export default function Report() {
  let [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setInputValue(inputValue);
  };

  function handleSubmit() {
    if (inputValue === "") {
      console.log("fail");
      setError("Input field cannot be empty");
    } else {
      console.log("submit is a success");
      saveReportOfProblem(inputValue);
      navigate("/survey");

    }
  }

  return (
    <div className="container">
      <div className="main">
        <div className="header">
          <h1 className="blue-text">Report a problem</h1>
          <div className="bottom-line">
            <Text maxWidth="30rem">
              Below you can report any kind of problems, you have experienced in
              General Election 2023.
            </Text>
          </div>
          <br></br>
          <Textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Describe your problem(s) here"
            height={"12rem"}
          />
          <br></br>
          <br></br>
          <Text>{error===" " ? error : " "}</Text>
          <Button className="button" onClick={handleSubmit}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
