import "./VotingScheme.css";
import { RadioGroup, Radio, Stack, GridItem } from "@chakra-ui/react";
import Parties from "../candidates.json";
import PopOver from "./PopOver";
import { useState, useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

function VotingScheme() {
  const [value, setValue] = useState("");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container">
      <div className="main">
        <div className="header">
          <h1>Ballot</h1>
          <div className="bottom-line">
            <p>
              To cast your vote, please select a candidate below.
            </p>
          </div>
        </div>

        <RadioGroup onChange={setValue} value={value}>
          {Parties.map((party) => (
            <div id="party" key={party.id}>
              <Radio
                value={party.id.toString()}
                marginBottom="1rem"
                padding="1rem"
                borderColor="#1C4E81"
              >
                <h2>{party.party}</h2>
              </Radio>
              <Stack
                className="stack"
                display="grid"
                gridTemplateColumns="1fr 1fr"
                color="#1C4E81"
                alignItems={"end"}
              >
                {party.candidates.map((candidate) => (
                  <GridItem key={candidate.id} className="grid-item">
                    <Radio
                      value={candidate.id.toString()}
                      borderColor="#1C4E81"
                    >
                      {candidate.candidate}
                    </Radio>
                  </GridItem>
                ))}
              </Stack>
            </div>
          ))}
        </RadioGroup>

        <PopOver value={value}></PopOver>
      </div>
    </div>
  );
}

export default VotingScheme;
