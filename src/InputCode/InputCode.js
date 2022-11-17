import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
} from "@chakra-ui/react";

export default function InputCode() {
  const context = useContext(Context);
  const navigate = useNavigate();

  const [userCodeInput, setUserCodeInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
} 
    const fs = require('fs');


  const isError = userCodeInput === "";

  const handleChangeCodeInput = (e) => {
    setUserCodeInput(e.target.value);
    console.log(...userCodeInput);
  };

  const handleSubmit = (e) => {
    if (userCodeInput === "") {
      setErrorMessage("Feltet skal udfyldes!");
      console.log("Feltet skal udfyldes!");
    } else if (userCodeInput !== userCodeInput.toUpperCase()) {
      setErrorMessage("Koden skal starte med 4 store bogstaver f.eks.: THDO");
      console.log("Koden skal starte med 4 store bogstaver f.eks.: THDO");
    } else if (userCodeInput.length <= 8) {
      setErrorMessage("Koden skal være mindst 8 karakterer lang");
      console.log("Koden skal være mindst 8 karakterer lang");
    } else {
      context.setInputCode(userCodeInput);
      navigateToVotingPage();

  
    }
  };

  useEffect(() => {}, [userCodeInput]);

  function navigateToVotingPage() {
    navigate("/verificationcode");
  }

    function post(verificationcode){
      const firstLetter = verificationcode[0];
      let userId = Math.floor(Math.random() * 1000+1) 

       let data={"id":""+ userId+ "",
      "vote":"A. Socialdemokratiet",
      "code": verificationcode};
      console.log(data); 


      fetch('http://localhost:8000/votes/', {
       method: "POST",
       headers: {
       "Content-Type": "application/json",
       },
       body: JSON.stringify(data),
       })
       .then(response => response.json())
       .catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', JSON.stringify(response)));
      
  }
  

    /* Function for creating a random code */
    function makeid() {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < 8; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }

  return (
    <div className="container">
      <div className="main">
        <FormControl isInvalid={isError} id="text">
           <div  className='space-between'>
         <h1>Velkommen</h1>

        <Text maxW='30rem'>For at stemme til Folketingsvalget, er det obligatorisk at udfylde en kode i feltet herunder.</Text>
        <Text maxW='30rem'>Koden skal starte med 4 store bogstaver, efterfulgt af 4 tilfældige karakterer f.eks: "DTVSa$9+".</Text>
        </div>
 <FormLabel color={'#1C4E81'} marginTop='2rem'>Indtast kode:</FormLabel>
        <Input 
          type="text" 
          placeholder='Indtast kode' 
          value={userCodeInput} 
          onChange={handleChangeCodeInput} 
          autoComplete={"off"}

          // Styling
          borderRadius={'0'}
          borderColor={'#1C4E81'}
          color={'#1C4E81'} 
          error={errorMessage}
          maxWidth='25rem'
          />

          {!isError ? (
            <FormHelperText>
              Indtast din ønskede verifikationskode.
            </FormHelperText>
          ) : (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          )}
        </FormControl>
    

      <Button 
       onClick={handleSubmit}
      type='submit'
      className='button'
      bg={'var(--primary_blue)'} width='min-content' color='var(--secondary_blue)' marginTop="2rem"
      >Stem nu</Button>

      </div>
      </div>
    </div>
  );
}
