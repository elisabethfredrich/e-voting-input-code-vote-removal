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
/*   import './VotingScheme.css'
 */  import {Context} from '../Context'

 
  
  
  function PopOverVerificationCode(value){
  
    const navigate = useNavigate();
    const voted = useContext(Context);
  
    const navigateToVoting = () => {
      navigate('/voting');
    }
  
  
    return(
        <Popover className='popover'>
        <PopoverTrigger display='flex' justifyContent='center' >
        <Button marginTop='3rem' className='button' bg={'var(--primary_blue)'} color='var(--secondary_blue)' width='99%'>Stem nu</Button>
      </PopoverTrigger>
        <PopoverContent width={'100%'} backgroundColor={'#EEF5FB'} padding='3rem'>
            <PopoverArrow />
            <PopoverCloseButton/>
              <PopoverBody alignContent='center'> 
              <Text  marginBottom={'1.5rem'}>Har du husket at gemme din verifikationskode? <br/> Du kan ikke gå tilbage og se den, efter du har trykket "Stem nu".</Text>
                <Box display='flex' justifyContent={'center'}>
                <PopoverCloseButton className="no-button">Nej</PopoverCloseButton>
                <Button className='button' backgroundColor='#1C4E81'  onClick={navigateToVoting} textColor='#EEF5FB'>Ja</Button>                  </Box>
              </PopoverBody> 
        </PopoverContent>
        </Popover>
  )}
  
  
  export default PopOverVerificationCode