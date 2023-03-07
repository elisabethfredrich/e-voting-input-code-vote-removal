import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
  Flex,
  Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveVote } from "../../API/Voter";
import "./Voting.css";

function PopOver({ vote }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await saveVote(vote);
    navigate("/confirmation");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="blue-btn" width="100%">
          Submit vote
        </Button>
      </PopoverTrigger>
      <PopoverContent className="pop-over-container">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody className="pop-over-body">
          <Text>
            Please check your vote is entered correctly. Are you sure, you want
            to vote for:
          </Text>
          <Text className="pop-over-text">{vote}</Text>
          <Flex>
            <PopoverCloseButton className="no-button">No</PopoverCloseButton>
            <Button className="blue-btn" mt={0} onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting && <Spinner size="sm" mr={"1rem"} />}
              Yes
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOver;
