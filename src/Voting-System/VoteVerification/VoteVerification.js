import {
  Grid,
  GridItem,
  Input,
  Box,
  Link,
  Text,
  InputGroup,
  InputLeftElement,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem, 
}
from "@chakra-ui/react";
import { React } from "react";
import Results from "../../JSON/results.json";
import "./VoteVerification.css";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import PopOverDiagram from "./PopoverDiagram";
import { Button } from "@chakra-ui/react";
import getCurrentUser from "../../API/Voter";
import { slideOut } from "../../utils";


export default function VoteVerification() {
  const [input, setInput] = useState("");
  const voter = getCurrentUser();

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
      // document.querySelector("#success-text").style.display = "none";
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
    //document.querySelector("#success-text").style.display = "none";

    if (
      /* (counter === 1 && input.length === 17) {
      message = document.querySelector("#success-text");
      message.style.display = "block";
    } else if  */ counter === 0
    ) {
      message = document.querySelector("#error-text");
      message.style.display = "block";
    }
  };

  return (
    <div>
      <Navbar />

      <Grid className="container-outer-page">
        <GridItem className="video-and-results">
        {voter!==null&&

        <Box display={voter.attributes.Vote === "" ? "none" : "box"}>
            <h3 className="headline-results">
              Result of General Election 2023
            </h3>
            <PopOverDiagram />
          </Box>}

          <h3 className="headline-results">Demo video</h3>
          <iframe
          title="demo-video"
            allow="fullscreen"
            className="demo-video"
            width="380"
            height="220"
            src="https://www.youtube.com/embed/pV51zCm4NL4"
          ></iframe>
        </GridItem>

        <Grid className="verification-content">
          <h1 className="blue-text">Vote verification</h1>
          {voter!==null?<div>
          {voter.attributes.Vote === "" ? (
                  <Text className="red-text">
                  The election results are not available yet.
                  <br /> Please try again later.
                </Text>
              ) : (<div>

          <Text>
            Please use your verification code to check, if your vote has been
            stored correctly. This is important, because it helps to ensure that
            the election has proceeded correctly.
          </Text>

          <Text className="bold-text text-margin-top">
            Verify by either putting your verification code into the search
            field or by looking for it in the ordered list below.{" "}
          </Text>
          <Box className="info-box">
            <Text className="info-text">
              <span className="bold-text">NB!</span> If your vote is not saved
              correctly or you cannot find your verification code, please follow
              the guidelines in the instruction paper.
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
              Have you typed in your verification code correctly? Be aware of
              correct use of lower- and uppercase letters. If your verification
              code still does not show, please follow the instruction paper.
            </Text>
          </Box>

          {/*   <Box
          id="success-text"
          className="info-box"
          display={"none"}
          textAlign="center"
          color="#599C2D"
          width="100%"
          >
          <h3>Your vote has been counted!</h3>
        </Box> */}

          {input.length > 0 ? (
            <Box id="result-table">
              {results.map((result) => (
                <Grid key={result.id} className="result-grid" id={result.code}>
                  <GridItem className="verification-code-bb">
                    {result.code}
                  </GridItem>
                  <GridItem>{result.vote}</GridItem>
                </Grid>
              ))}
            </Box>
          ) : (
            <Accordion defaultIndex={["-1"]} allowMultiple id="accordion">
              {makeAccordion().map((letter) => (
                <AccordionItem key={letter.letter}>
                  <h2>
                    <AccordionButton>
                      <Box className="accordion-button">{letter.letter}</Box>
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
          <Grid className="info-banner" id="info-banner">
          <Link
            id="slideout-trigger"
            className="slideout-trigger"
            onClick={() => slideOut()}
          >{`>`}</Link>
          <div className="info-banner-content">
            <div id="banner-text">
              <Text className="bold-text white-text">
                You have finished the second part of the study!
              </Text>

              <Text className="white-text" mt={"1rem"}>
                To complete the study, please fill out a survey about your
                experience of the online voting system.{" "}
              </Text>
              <Button
                id="survey-button-horizontal"
                marginTop={"1rem"}
                width="8rem"
                className="red-btn"
                padding={"1rem"}
                onClick={() =>
                  (window.location.href =
                    "https://www.survey-xact.dk/LinkCollector?key=PJKE3W6EUP92")
                }
              >
                Go to survey
              </Button>
            </div>
            <div id="survey-button-vertical-box">
              <Button
                width={0}
                id="survey-button-vertical"
                className="red-btn"
                transform={"rotate(90deg)"}
                marginBottom={0}
                marginRight={0}
                visibility="hidden"
                position={"absolute"}
                left={"-19.99"}
                onClick={() =>
                  (window.location.href =
                    "https://www.survey-xact.dk/LinkCollector?key=PJKE3W6EUP92")
                }
              >
                Go to survey
              </Button>
            </div>
          </div>
        </Grid>
          </div>
          )}
           </div>:(
            <Text className="red-text">
              The election results are not available yet.
              <br /> Please try again later.
            </Text>
          ) }
        </Grid>
      </Grid>
    </div>
  );
}
