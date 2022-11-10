import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,

    Text,
    Box
  } from '@chakra-ui/react'
import { useContext } from 'react';
  import { useNavigate } from "react-router-dom";
  import './VotingScheme.css'
  import {Context} from '../Context'


  function PopOver(value){

    const navigate = useNavigate();
    const voted = useContext(Context);

    const submitVote = () => {
      voted.setVoted(true);
      navigate('/verificationcode');
    }


    return(
        <Popover className='popover'>
        <PopoverTrigger display='flex' justifyContent='center' >
        <Button bg={'#1C4E81'} color='#EEF5FB' width='99%'>Afgiv Stemme</Button>
      </PopoverTrigger>
        <PopoverContent width={'100%'} backgroundColor={'#EEF5FB'} padding='3rem'>
            <PopoverArrow />
            <PopoverCloseButton/>
            {value.value==='' ? 
              <PopoverBody alignContent='center'> 
                <Text  marginBottom={'1.5rem'}>Tjek venligst at din stemme er angivet korrekt. Er du sikker på, at du ønsker at stemme:</Text>
                <Text marginBottom={'1.5rem'} marginTop={'1rem'} color='#1C4E81'>blankt</Text>
                <Box display='flex' justifyContent={'center'}>
                <PopoverCloseButton className="no-button">Nej</PopoverCloseButton>
                <Button  backgroundColor='#1C4E81'  onClick={submitVote} textColor='#EEF5FB'>Ja</Button>                  </Box>
              </PopoverBody> : 
              <PopoverBody alignContent='center'> 
                <Text>Tjek venligst at din stemme er angivet korrekt. Er du sikker på, at du ønsker at stemme på:</Text>
                <Text marginBottom={'1.5rem'} marginTop={'1rem'} color='#1C4E81'>A. Socialdemokratiet</Text>
                <Box display={'flex'} alignItems='top'>
                <PopoverCloseButton className="no-button">Nej</PopoverCloseButton>
                <Button marginTop={'2rem'} width='8rem' className='button' bg={'var(--primary_blue)'} color='var(--secondary_blue)' onClick={() => navigate('/verificationcode')}>Afgiv stemme</Button>
                </Box>
              </PopoverBody>}
                
               
                
       
        </PopoverContent>
        </Popover>
)}

/* box-sizing: border-box;

position: absolute;
width: 211.06px;
height: 50px;
left: 666.27px;
top: 5483px;

border: 3px solid #1C4E81;

 */

export default PopOver