import "./VotingScheme.css";
import { RadioGroup, Radio, Box, GridItem, Grid, Text } from "@chakra-ui/react";
import Candidates from "../candidates.json";
import PopOver from "./PopOver";
import { useState, useEffect,  } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

function VotingScheme() {
  const [vote, setVote] = useState("blank");



  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="page-container">
      <div className="main">
        <div className="header">
          <h1 className="blue-text">Voting</h1>
          <div className="bottom-line">
            <Text maxWidth="30rem">
              In order to vote in the General Election, please select a candidate below and click "Submit vote". 
            </Text>
          </div>
        </div>

        <RadioGroup onChange={setVote} value={vote} className="radio-group">
          <Grid className="voting-options">
            {Candidates.map((candidate) => (
              <Box key={candidate.id}>
                <GridItem className="voting-option">
                    <Radio
                      className="radio candidate-party-wrapper"
                      value={`${candidate.candidate} (${candidate.party})`}
                      >
                    <div>{candidate.candidate}</div>
                    <div>{candidate.party}</div>
                    </Radio>
                </GridItem>
              </Box>
            ))}
          </Grid>
        </RadioGroup>

        <PopOver vote={vote}></PopOver>
      </div>
    </div>
  );
}

export default VotingScheme;
