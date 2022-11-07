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


export default function Login() {

    const context = useContext(Context);
    const [userCodeInput, setUserCodeInput] = useState("");

   
    const handleChangeCodeInput = (e) =>{
        setUserCodeInput(e.target.value)
        console.log(...userCodeInput)
    }

    const handleSubmit = (e) =>{

    }


    return (

    <div>
        <FormControl id="text">
        <Text color={'#1C4E81'}>For at teste til Folketingsvalget, er det obligatorisk at udfylde en kode i feltet herunder. 
        Koden skal starte med fire store bogstaver, efterfulgt af 10 tilfældige karakterer f.eks: "DTVSasd790$n+" </Text>
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
    )
}