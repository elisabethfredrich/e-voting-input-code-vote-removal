import { useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../Context";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
//import * as fs from 'fs';


export default function InputCode() {

    const fs = require('fs');

    const context = useContext(Context);
    const navigate = useNavigate();

    const [userCodeInput, setUserCodeInput] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

   
    const handleChangeCodeInput = (e) =>{
        setUserCodeInput(e.target.value)
        console.log(...userCodeInput)
    }

    const handleSubmit = (e) =>{
      if(userCodeInput.length !== 8){
        setErrorMessage('Koden skal være mindst 8 karakterer lang')
      }
      if(userCodeInput !== "^[A-Z][A-Z][A-Z][A-Z]"){
        setErrorMessage('Koden skal starte med 4 store bogstaver f.eks.: THDO')
      }
      if(userCodeInput === ''){
        setErrorMessage('Feltet skal udfyldes!')
      }
      else{
        const generatedCode = makeid()
        const code = userCodeInput + '-' + generatedCode
        context.setInputCode(code);
        post()
        navigateToVerificationPage();
      }
    }

    function post (){
      let data={"id":"100",
      "vote":"A. Socialdemokratiet",
      "code": context.inputCode};

      fetch(`http://localhost:3000/posts/`, {
        method: 'POST',
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)));
    }


      function navigateToVerificationPage(){
        navigate('/verificationcode');
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

    <div className='container'>
        <div className='main'>
        <FormControl id="text">
   
        <Text color={'#1C4E81'}>For at stemme til Folketingsvalget, er det obligatorisk at udfylde en kode i feltet herunder. 

        Koden skal starte med 4 store bogstaver, efterfulgt af 4 tilfældige karakterer f.eks: "DTVSa$9+" </Text>
        <FormLabel
          color={'#1C4E81'} 
        >Indtast kode:</FormLabel>
        <Input 
          type="text" 
          placeholder='Indtast kode' 
          value={userCodeInput} 
          onChange={handleChangeCodeInput} 
          // Styling
          borderRadius={'0'}
          borderColor={'#1C4E81'}
          color={'#1C4E81'} 
          error={errorMessage}
          />
      </FormControl>

      <Button onClick={handleSubmit}
      
       // Styling
       color={'#FFF'}
       backgroundColor={'#1C4E81'}
       borderRadius={'0'}
       width={'30%'}
       _hover={{
        background: "#0e2842"}}
      >Stem nu</Button>
      </div>
      </div>
    )
}