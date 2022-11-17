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
  Grid,
  GridItem,
  Link,
Box
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons'
import './Home.css'


export default function Home() {
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
         <Grid
            paddingTop={'3rem'}
            gap={'2rem'}
            color='var(--primary_blue)'
            fontWeight={'400'}
            templateColumns=' 1fr 1fr'
            templateRows={'1fr 1fr'}
                  >

            
<GridItem gridColumn={'1 / 3'} bg={'var(--secondary_blue)'} h='7rem' borderRadius={'5px'}><Link padding={'1rem'} display='flex' _hover={{color: 'var(--secondary_darkblue)'}} height='5rem' onClick={() => navigate('/login')}>
                <Box w='100%' display={'flex'} flexDirection='column' alignItems={'center'}><span className="material-symbols-outlined">login</span><p>Log ind for at stemme</p></Box></Link></GridItem> 
            
                <GridItem gridColumn={'1 / 3'} bg={'var(--secondary_blue)'} h='7rem' borderRadius={'5px'}><Link padding={'1rem'} display='flex' _hover={{color: 'var(--secondary_darkblue)'}} height='5rem' onClick={() => navigate('/bulletinboard')}>
                <Box w='100%' display={'flex'} flexDirection='column' alignItems={'center'}><span className="material-symbols-outlined">ballot</span><p>Tjek om din stemme er optalt korrekt</p></Box></Link></GridItem>
            
            <GridItem bg={'var(--secondary_blue)'} h='7rem' borderRadius={'5px'}><Link padding={'1rem'} display='flex' _hover={{color: 'var(--secondary_darkblue)'}} height='5rem' onClick={() => navigate('/kontakt')}>
                <Box w='100%' display={'flex'} flexDirection='column' alignItems={'center'}><span className="material-symbols-outlined">mail</span><p>Kontakt</p></Box></Link></GridItem>

            <GridItem bg={'var(--secondary_blue)'} h='7rem' borderRadius={'5px'}><Link padding={'1rem'} display='flex' _hover={{color: 'var(--secondary_darkblue)'}} height='5rem' onClick={() => navigate('/info')}>
                <Box w='100%' display={'flex'} flexDirection='column' alignItems={'center'}><span className="material-symbols-outlined">info</span><p>Info</p></Box></Link></GridItem>
            
         </Grid>
        </Stack>
      </Flex>
    </Stack>
  );
}