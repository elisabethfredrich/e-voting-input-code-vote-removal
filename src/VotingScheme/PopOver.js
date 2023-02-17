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
import { VoterContext } from "../VoterContext";
import { useContext } from "react";
import { addVoter } from "../API/Voter";

function PopOver({vote}) {
  const voter = useContext(VoterContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
   //e.preventDefault();
   console.log("submit")
    await addVoter(
      voter.id,
      voter.verificationCode,
      vote
    )

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
          Cast vote 
        </Button>
      </PopoverTrigger>
      <PopoverContent width={"100%"} backgroundColor={"#EEF5FB"} padding="3rem">
        <PopoverArrow />
        <PopoverCloseButton />
          <PopoverBody alignContent="center">
            <Text>
              Please check your vote is entered correctly. Are you sure, you want to vote for: 
            </Text>
            <Text marginBottom={"1.5rem"} marginTop={"1rem"} color="#1C4E81">
              {vote}
            </Text>
            <Box display={"flex"} alignItems="top">
              <PopoverCloseButton className="no-button">No</PopoverCloseButton>
              <Button
                className="button"
                bg={"var(--primary_blue)"}
                color="var(--secondary_blue)"
                onClick={handleSubmit}
              >
                Yes
              </Button>
            </Box>
          </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOver;
