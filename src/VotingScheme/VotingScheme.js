import "./VotingScheme.css";
import { RadioGroup, Radio, Box, GridItem, Grid } from "@chakra-ui/react";
import Candidates from "../candidates.json";
import PopOver from "./PopOver";
import { useState, useEffect } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

function VotingScheme() {
  const [value, setValue] = useState("blank");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container">
      <div className="main">
        <div className="header">
          <h1>Stemmeseddel</h1>
          <div className="header-bottom-line">
            <p>
              For at afgive din stemme, sæt venligst et kryds(X) ud fra enten et
              parti eller en kandidat.
            </p>
            <p>
              De listede kandidater herunder er respektive i forhold til din
              bopæl.
            </p>
          </div>
        </div>

        <RadioGroup onChange={setValue} value={value}>
          <Grid className="voting-options">
            {Candidates.map((candidate) => (
              <Box key={candidate.id}>
                <GridItem className="voting-option">
                  <Grid className="candidate-party-wrapper">
                    <Radio
                      className="radio"
                      value={`${candidate.candidate} (${candidate.party})`}
                    />
                    <GridItem>{candidate.candidate}</GridItem>
                    <GridItem>{candidate.party}</GridItem>
                  </Grid>
                </GridItem>
              </Box>
            ))}
          </Grid>
        </RadioGroup>

        <PopOver value={value}></PopOver>
      </div>
    </div>
  );
}

export default VotingScheme;
