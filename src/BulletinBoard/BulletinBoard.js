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

const BulletinBoard = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //sort the results alphabetically
  const results = Results.votes.sort((a, b) => {
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
      console.log(results[i]);
      console.log(i);
      if (results[i].code[0].toUpperCase() === firstLetter) {
        console.log(accordionSection);
        accordionSection.results.push(results[i]);
      }
      if (results[i].code[0].toUpperCase() !== firstLetter) {
        accordion.push(accordionSection);
        firstLetter = results[i].code[0].toUpperCase();
        console.log(firstLetter);
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
    if (input.length == 0) {
      document.querySelector("#error-text").style.display = "none";
      document.querySelector("#success-text").style.display = "none";
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
    document.querySelector("#success-text").style.display = "none";

    if (counter == 1 && input.length == 17) {
      message = document.querySelector("#success-text");
      message.style.display = "block";
    } else if (counter == 0) {
      message = document.querySelector("#error-text");
      message.style.display = "block";
    }
  };

  return (
    <div className="container">
      <div className="main-mobile">
        <div className="header">
          <h1>Optalte stemmer: Folketingsvalget 2022</h1>

          <Box maxW="40rem" className="space-between">
            <p>
              Herunder ser du alle optalte stemmmer fra folketingsvalget. Brug din verifikationskode
              til at tjekke, at din stemme er optalt korrekt. Dette er vigtigt, da det er med til at sikre, at valget er forløbet korrekt. <Link  onClick={() => navigate("/info")}><span class="material-symbols-outlined blue small">info</span></Link>
            </p>
            <p className="bold-text">
              Du kan verficere din stemme ved enten at indsætte din verifikationskode i søgefeltet
              eller ved at kigge i den alfabetiske sorterede liste herunder.
            </p>
          </Box>

          <Box className="info-box">
            <Text className="info-text">
              <span className="bold-text">OBS!</span> Såfremt din stemme ikke er optalt korrekt, eller at du ikke kan
              finde din kode, bedes du kontakte {" "}
              <Link className="link-bold" onClick={() => navigate("/kontakt")}>
                valgstyrelsen
              </Link>
              . Det samme gælder, hvis du finder din verifikationskode flere gange. 
            </Text>
          </Box>

          <InputGroup marginTop="2rem">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="var(--primary_blue)" />}
            />
            <Input
              value={input}
              onChange={handleInputChange}
              onKeyUp={search}
              placeholder={"Søg efter din kode her"}
              type="search"
              borderColor="#565d6d"
            />
          </InputGroup>
        </div>

        <Box
          id="error-text"
          className="info-box"
          display={"none"}
          color="maroon"
          marginTop="0"
        >
          <h3>Der er ingen stemme med denne kode.</h3>
          <Text className="info-text">
            Tjek venligst, at du har indtastet din kode korrekt - vær opmærksom på store og små bogstaver. Hvis koden er
            korrekt, men din stemme ikke vises, skal du kontakte valgstyrelsen{" "}
            <Link className="link-bold" onClick={() => navigate("/kontakt")}>
              her
            </Link>
            .
          </Text>
        </Box>

        <Box
          id="success-text"
          className="info-box"
          display={"none"}
          textAlign="center"
          color="#599C2D"
          width="100%"
        >
          <h3>Din stemme er optalt!</h3>
        </Box>

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
              <AccordionItem key={letter.results.id}>
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
       <Text marginLeft={"1rem"} marginRight={"1rem"}>Passer person/parti ved siden af din verifikationskode med dét, som du har stemt på?</Text>
       <Box display={"flex"} flexFlow="row" justifyContent={"space-between"} marginLeft={"1rem"} marginRight={"1rem"}>
        <Button
          className="button"
          width={"45%"}
          marginTop="3rem"
          onClick={() => navigate("/login")}
        >
          Yes
        </Button>

        <Button
          className="button"
          width={"45%"}
          marginTop="3rem"
          onClick={() => navigate("/login")}
        >
          No
        </Button>
        </Box>
        </Box>
      </div>
    </div>
  );
};

export default BulletinBoard;
