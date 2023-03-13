import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Link
  } from "@chakra-ui/react";
  import "../Voting/Voting.css";
  import Result from "../../assets/Diagram-Result.png";
  
  function PopOverDiagram() {
  
    return (
      <Popover>
        <PopoverTrigger>
        <Link>
        <img className="result-diagram"src={Result}  alt="result"></img>
        </Link>
        </PopoverTrigger>
        <PopoverContent className="pop-over-container">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody className="pop-over-body">
          <img className="result-diagram"src={Result} width={"80%"}  alt="result"></img>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
  
  export default PopOverDiagram;
  