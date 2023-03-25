import {
  Grid,
  GridItem,
  Input,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
} from "@chakra-ui/react";
import { React, useEffect } from "react";
import Results from "../../JSON/results.json";
import "./VoteVerification.css";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Button } from "@chakra-ui/react";
import getCurrentUser from "../../API/Voter";
import { useNavigate } from "react-router-dom";
import Result from "../../assets/Diagram-Result.png";

export default function VoteVerification() {
  const [input, setInput] = useState("");
  const voter = getCurrentUser();
  const navigate = useNavigate();

  let results = Results.votes.sort((a, b) => {
    if (a.code.toUpperCase() < b.code.toUpperCase()) {
      return -1;
    } else {
      return 1;
    }
  });

  const makeAccordion = () => {
    let firstLetter = results[0].code[0].toUpperCase();
    let accordion = [];
    let accordionSection = { letter: firstLetter, results: [results[0]] };
    let length = results.length - 1;
    for (let i = 1; i < length; i++) {
      if (results[i].code[0].toUpperCase() === firstLetter) {
        accordionSection.results.push(results[i]);
      }
      if (results[i].code[0].toUpperCase() !== firstLetter) {
        accordion.push(accordionSection);
        firstLetter = results[i].code[0].toUpperCase();
        accordionSection = { letter: firstLetter, results: [results[i]] };
      }
    }
    accordion.push(accordionSection);
    return accordion;
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const search = () => {
    if (input.length === 0) {
      document.querySelector("#error-text").style.display = "none";
    }
    const table = document.querySelector("#result-table");
    const children = table.childNodes; // get all children
    let counter = 0; // iterate over all child nodes

    children.forEach((el) => {
      if (!el.id.startsWith(input)) {
        el.style.display = "none";
      } else {
        el.style.display = "grid";
        counter++;
      }
    });

    let message;
    document.querySelector("#error-text").style.display = "none";

    if (counter === 0) {
      message = document.querySelector("#error-text");
      message.style.display = "block";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      <Grid className="container-outer-page">
        <GridItem className="video-and-results">
          {voter !== null && (
            <Box display={voter.attributes.Vote === "" ? "none" : "box"}>
              <h3 className="headline-results">
                Result of General Election 2023
              </h3>
              <img className="result-diagram" src={Result} alt="result"></img>
            </Box>
          )}

          <h3 className="headline-results">Demo video</h3>
          <iframe
            title="demo-video"
            allow="fullscreen"
            className="demo-video"
            width="380"
            height="220"
            src="https://www.youtube.com/watch?v=SW55sw8sDis"
          ></iframe>
        </GridItem>

        <Grid className="verification-content">
          <h1 className="blue-text">Vote verification</h1>
          {voter !== null ? (
            <div>
              {voter.attributes.Vote === "" ? (
                <Text className="red-text">
                  The election results are not available yet.
                  <br /> Please try again later.
                </Text>
              ) : (
                <div>
                  <Text>
                    Please use your verification code to check, if your vote has
                    been stored correctly. This is important, because it helps
                    to ensure that the election has proceeded correctly.
                  </Text>

                  <Text className="bold-text text-margin-top">
                    Verify by either putting your verification code into the
                    search field or by looking for it in the ordered list below.{" "}
                  </Text>
                  <Box className="info-box">
                    <Text className="info-text">
                      <span className="bold-text">NB!</span> If your vote is not
                      saved correctly or you cannot find your verification code,
                      please follow the guidelines in the instruction letter and
                      report the issue.
                    </Text>
                  </Box>

                  <InputGroup marginTop="2rem">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<SearchIcon color="var(--primary_blue)" />}
                    />
                    <Input
                      className="input-field"
                      value={input}
                      onChange={handleInputChange}
                      onKeyUp={search}
                      placeholder={"Search for verification code here"}
                      type="search"
                      marginBottom={"2rem"}
                    />
                  </InputGroup>

                  <Box id="error-text" className="info-box error-text-bb">
                    <h3>No such verification code exists</h3>
                    <Text>
                      Have you typed in your verification code correctly? Be
                      aware of correct use of lower- and uppercase letters. If
                      your verification code still does not show, please follow
                      the instruction letter and report the issue.
                    </Text>
                  </Box>

                  {input.length > 0 ? (
                    <Box id="result-table">
                      {results.map((result) => (
                        <Grid
                          key={result.id}
                          className="result-grid"
                          id={result.code}
                        >
                          <GridItem className="verification-code-bb">
                            {result.code}
                          </GridItem>
                          <GridItem>{result.vote}</GridItem>
                        </Grid>
                      ))}
                    </Box>
                  ) : (
                    <Accordion
                      defaultIndex={["-1"]}
                      allowMultiple
                      id="accordion"
                    >
                      {makeAccordion().map((letter) => (
                        <AccordionItem key={letter.letter}>
                          <h2>
                            <AccordionButton>
                              <Box className="accordion-button">
                                {letter.letter}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            {letter.results.map((result) => (
                              <Grid
                                key={result.code}
                                className="result-grid"
                                id={result.code}
                              >
                                <GridItem className="verification-code-bb">
                                  {result.code}
                                </GridItem>
                                <GridItem>{result.vote}</GridItem>
                              </Grid>
                            ))}
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}

                  <Button
                    className="blue-btn"
                    width={"100%"}
                    onClick={() => navigate("/info-3")}
                  >
                    Finish
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Text className="red-text">
              The election results are not available yet.
              <br /> Please try again later.
            </Text>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
