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

//not used anymore in test round 2 since tracking code downloads automatically
function PopOverVerificationCode(value) {
  const navigate = useNavigate();

  const navigateToVoting = () => {
    navigate("/voting");
  };

  return (
    <Popover className="popover">
      <PopoverTrigger display="flex" justifyContent="center">
        <Button
          marginTop="3rem"
          className="button"
          bg={"var(--primary_blue)"}
          color="var(--secondary_blue)"
          width="100%"
        >
          Stem nu
        </Button>
      </PopoverTrigger>
      <PopoverContent width={"100%"} backgroundColor={"#EEF5FB"} padding="3rem">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody alignContent="center">
          <Text marginBottom={"1.5rem"}>
            Har du husket at gemme din verifikationskode? <br /> Du kan ikke gå
            tilbage og se den, efter du har trykket "Stem nu".
          </Text>
          <Box display="flex" justifyContent={"center"}>
            <PopoverCloseButton className="no-button">Nej</PopoverCloseButton>
            <Button
              className="button"
              backgroundColor="#1C4E81"
              onClick={navigateToVoting}
              textColor="#EEF5FB"
            >
              Ja
            </Button>{" "}
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOverVerificationCode;
