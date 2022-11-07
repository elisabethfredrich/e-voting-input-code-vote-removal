import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';


export default function Login() {

    const [inputCode, setInputCode] = useState('')

    const input = useContext(Context);
    const navigate = useNavigate();

    const handleChangeCodeInput = (e) => setInputCode(e.target.value)

    const handleSubmit = (e) =>{
        input.setInputCode = inputCode
        navigate('/voting');
    }

    return (

    <div>
        <h1>Hej</h1>
        <FormControl id="text">
        <Text color={'#1C4E81'}>For at teste til Folketingsvalget, er det obligatorisk at udfylde en kode i feltet herunder. 
        Koden skal starte med fire store bogstaver, efterfulgt af 10 tilfældige karakterer f.eks: "DTVS-asd790$n+" </Text>
        <FormLabel
          color={'#1C4E81'} 
        >Kode</FormLabel>
        <Input 
          type="text" 
          placeholder='Indtast kode' 
          value={inputCode} 
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
      ></Button>
      </div>
    )
}