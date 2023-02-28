import {
  Grid,
  GridItem,
  Input,
  Box,
  Text,
  Link,
  InputGroup,
  InputLeftElement,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
} from "@chakra-ui/react";
import { React, useEffect } from "react";
import Results from "../results.json";
import "./BulletinBoard.css";
import { SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getCurrentUser from "../API/Voter";

const BulletinBoard = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const voter = getCurrentUser();

  const location = useLocation();
  let results = new Set(Results.votes);
    results.add({
      id: voter.id,
      vote: voter.attributes.BBVote,
      code: voter.attributes.VerificationCode,
    });
    results = Array.from(results);
    results.sort((a, b) => {
      if (a.code.toUpperCase() < b.code.toUpperCase()) {
        return -1;
      } else {
        return 1;
      }
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const search = (e) => {
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

    if /* (counter === 1 && input.length === 17) {
      message = document.querySelector("#success-text");
      message.style.display = "block";
    } else if  */(counter === 0) {
      message = document.querySelector("#error-text");
      message.style.display = "block";
    }
  };

  return (
    <div className="page-container">
       
<Grid className={"bb-grid"}>
<GridItem></GridItem>
<GridItem>

          <h1 className="blue-text">Vote verification</h1>
</GridItem>
          <GridItem  className="info-box bb-info">
            <Text className="info-text">
              <span className="bold-text">NB!</span> If your vote is not counted
              correctly or you cannot find your verification code, please follow
              the guidelines in the instruction paper. The same applies if you
              find your verification repeatedly.
            </Text>
          </GridItem>

          <GridItem maxW="35rem" className="space-between">
            <p>
              Please use your verification code to check, if your vote has been
              counted correctly. This is important, because it helps to ensure
              that the election has proceeded correctly.
              <Link onClick={() => navigate("/info")}>
                <span className="material-symbols-outlined blue small">
                  info
                </span>
              </Link>{" "}
            </p>

            <p className="bold-text">
              Verify by either putting your verification code into the search
              field or by looking for it in the alphabetically sorted list
              below.
            </p>

            <Text>
            When you have verified your vote (or reported an error in case you could not verify your vote), please click "Finish" to leave the verification system.
          </Text>

          <InputGroup marginTop="2rem">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="var(--primary_blue)" />}
              />
            <Input
              value={input}
              onChange={handleInputChange}
              onKeyUp={search}
              placeholder={"Search for verification code here"}
              type="search"
              borderColor="#565d6d"
              marginBottom={"2rem"}
              />
          </InputGroup>

        <Box
          id="error-text"
          className="info-box error-text-bb"
          >
          <h3>No such verification code exists</h3>
          <Text>
            Have you typed in your verification code correctly?
            Be aware of correct use of lower- and uppercase letters. If your
            verification code still does not show, please follow the instruction
            paper.{" "}
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
          <Box id="result-table" w={"100%"}>
            {results.map((result) => (
              <Grid key={result.id} className="result-grid" id={result.code}>
                <GridItem color={"var(--primary_blue)"} fontWeight="600">
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
          w={"100%"}
          id="accordion"
          >
            {makeAccordion().map((letter) => (
              <AccordionItem key={letter.letter}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight={"600"}>
                      {letter.letter}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className={letter.letter}>
                  {letter.results.map((result) => (
                    <Grid
                    key={result.code}
                    className="result-grid"
                    id={result.code}
                    paddingTop="4rem"
                    paddingBottom="4rem"
                    >
                      <GridItem color={"var(--primary_blue)"} fontWeight="600">
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

        <Box marginTop="3rem">
          <Box
            display={"flex"}
            flexFlow="row"
            justifyContent={"space-between"}
         
            >
            <Button
              className="button"
              width={"100%"}
              marginTop="3rem"
              onClick={() => navigate("/survey")}
              >
              Finish
            </Button>
          </Box>
        </Box>
              </GridItem>
</Grid>

      </div>
  );
};

export default BulletinBoard;
