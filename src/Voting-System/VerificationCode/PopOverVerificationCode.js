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
  Spinner,
  Link,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveVote } from "../../API/Voter";
import VerificationCodeExample from "../../assets/VerificationCode_example.png";

function PopOverVerificationCode({ vote }) {
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
        <Link>
          <span className="material-symbols-outlined blue-icon small-icon">
            info
          </span>
        </Link>
      </PopoverTrigger>
      <PopoverContent className="pop-over-container">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody className="pop-over-body">
          <Flex className="img-container-popover">
            <Image src={VerificationCodeExample} />
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOverVerificationCode;
