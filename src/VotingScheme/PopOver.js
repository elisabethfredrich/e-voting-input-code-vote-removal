import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./VotingScheme.css";

function PopOver({value}) {
  const navigate = useNavigate();

  const submitVote = () => {
    navigate("/confirmation");
  };

  return (
    <Popover className="popover">
      <PopoverTrigger display="flex" justifyContent="center">
        <Button
          className="button"
          bg={"var(--primary_blue)"}
          color="var(--secondary_blue)"
          width="100%"
        >
          Afgiv Stemme
        </Button>
      </PopoverTrigger>
      <PopoverContent width={"100%"} backgroundColor={"#EEF5FB"} padding="3rem">
        <PopoverArrow />
        <PopoverCloseButton />
        {value === "" ? (
          <PopoverBody alignContent="center">
            <Text marginBottom={"1.5rem"}>
              Tjek venligst at din stemme er angivet korrekt. Er du sikker på,
              at du ønsker at stemme:
            </Text>
            <Text marginBottom={"1.5rem"} marginTop={"1rem"} color="#1C4E81">
              blankt
            </Text>
            <Box display="flex" justifyContent={"center"}>
              <PopoverCloseButton className="no-button">Nej</PopoverCloseButton>
              <Button
                backgroundColor="#1C4E81"
                onClick={submitVote}
                textColor="#EEF5FB"
              >
                Ja
              </Button>{" "}
            </Box>
          </PopoverBody>
        ) : (
          <PopoverBody alignContent="center">
            <Text>
              Tjek venligst at din stemme er angivet korrekt. Er du sikker på,
              at du ønsker at stemme på:
            </Text>
            <Text marginBottom={"1.5rem"} marginTop={"1rem"} color="#1C4E81">
              {value}
            </Text>
            <Box display={"flex"} alignItems="top">
              <PopoverCloseButton className="no-button">Nej</PopoverCloseButton>
              <Button
                className="button"
                bg={"var(--primary_blue)"}
                color="var(--secondary_blue)"
                onClick={() => navigate("/confirmation")}
              >
                Ja
              </Button>
            </Box>
          </PopoverBody>
        )}
      </PopoverContent>
    </Popover>
  );
}

export default PopOver;
