import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [voterIdInput, setVoterIdInput] = useState('')
  const handleVoterIdInputChange = (e) => setVoterIdInput(e.target.value)

  const navigate = useNavigate();

  const validLogins = [ // for temporary testing purposes
  {
    voterID: '010203-0405', // corresponds to "Stemme-ID"
    voterKey: 'test123', // correponds to Stemme-nøgle
  },
  {
    voterID: '060708-0910', // corresponds to "Stemme-ID"
    voterKey: 'test123' // correponds to Stemme-nøgle
  }
]

function verifyUser() {
  let userWasFound = false;

  for(let i = 0; i < validLogins.length; i++) 
  {
    if(voterIdInput === validLogins[i].voterID) 
    {
      userWasFound = true;
      
    }
  }

  if(userWasFound) 
  {
    console.log('successfully signed in.')
    navigate('/verificationcode');
  } 
  
  else 
  {
    console.log('the credentials that was entered do not match any user.')
  }
}

  return (
    <Stack 
      minH={'100vh'} 
      direction={{ base: 'column', md: 'row' }}>
       <Flex flex={1}>
        <Image
          maxH={'100vh'}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '../../img/folketinget-background-image.svg'  
          }
        />
      </Flex>

      <Flex 
        p={8} 
        flex={1} 
        align={'center'} 
        justify={'center'}>
        
        <Stack 
          spacing={4} 
          w={'full'} 
          maxW={'md'}>
         
          <Heading 
            color={'#1C4E81'}  
            fontSize={'xl'}>Velkommen til det digitale folketingsvalg.
          </Heading>
          
          <Text
            color={'#1C4E81'}  
          >
            For at stemme til folketingsvalget online, bedes du logge ind med de informationer, du har modtaget med posten.
          </Text>
          <form onSubmit={verifyUser}>
          <FormControl id="text">
            <FormLabel
              color={'#1C4E81'} 
            >CPR-nummer</FormLabel>
            <Input 
              type="text" 
              placeholder='Indtast CPR-nummer' 
              value={voterIdInput} 
              onChange={handleVoterIdInputChange} 
              // Styling
              borderRadius={'0'}
              borderColor={'#1C4E81'}
              color={'#1C4E81'} 
              />
          </FormControl>

          <FormControl id="password">
            <FormLabel
              color={'#1C4E81'} 
            >Stemme-nøgle</FormLabel>
            <Input 
              type="password" 
              placeholder='Indtast stemme-nøgle'
              // Styling
              borderRadius={'0'}
              borderColor={'#1C4E81'}
              color={'#1C4E81'} 
              /> 
          </FormControl>
          <Button  
              type='submit'

              // Styling
              color={'#FFF'}
              backgroundColor={'#1C4E81'}
              width={'30%'}
              className='button'
              marginTop={'2rem'}
              >
              Sign in
            </Button>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
}