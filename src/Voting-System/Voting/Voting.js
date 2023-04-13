import "./Voting.css";
import { RadioGroup, Radio, Box, GridItem, Grid, Text } from "@chakra-ui/react";
import Candidates from "../../JSON/candidates.json";
import PopOver from "./PopOver";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import getCurrentUser from "../../API/Voter";

export default function Voting() {
  const [vote, setVote] = useState("blank");
  const voter = getCurrentUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <div className="header">
            <h1 className="blue-text">Voting</h1>

            <Text  display={voter.attributes.Vote === "" ? "box" : "none"}>
              In order to vote in the General Election, please select a
              candidate below and click "Submit vote".
            </Text>
          </div>
          {voter.attributes.Vote === "" ?
    <Box>
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
          </Box> : <Text className="red-text">
              The voting phase is over and it is not possible to vote anymore.
            </Text>
}
        </div>
      </div>
    </div>
  );
}
