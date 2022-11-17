import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
  Box
} from '@chakra-ui/react';

import { 
  Field, 
  Form, 
  Formik 
} from "formik";
import PopOverVerificationCode from './PopOverVerificationCode';
import './InputCode.css'

export default function InputCode() {

    const fs = require('fs');

    //const context = useContext(Context);
    const navigate = useNavigate();

    const [userCodeInput, setUserCodeInput] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

   
    const handleChangeCodeInput = (e) =>{
        setUserCodeInput(e.target.value)
        console.log(...userCodeInput)
    }

    function validateCode(value) {
      const regex = new RegExp('[A-Z][A-Z][A-Z][A-Z]+-*');

      let error = ''

      console.log(regex.test(value));
      if (!value) {
        error = 'Du bedes venligst indtaste en verificeringskode'
      } else if (!regex.test(value)) {
        error = "Verificeringskoden skal starte med fire store bogstaver."
        console.log('Verificeringskoden skal starte med fire store bogstaver.')
        console.log(regex.test(value));
      } else if (value.length < 8 || value.length > 8) {
        error = "Verificeringskoden skal være otte karakterer."
      }
      return error
    }

    const handleSubmit = (values, actions) =>{
        const generatedCode = makeid()
        const verificationCode = values.name + '-' + generatedCode
        setUserCodeInput(verificationCode)
        post(verificationCode)
        //navigateToVerificationPage();
        document.querySelector('#verification-code').style.display = 'flex';
        actions.setSubmitting(false)
        document.querySelector('#submit-code').style.display = 'none';
        document.querySelector('#input-code').disabled = 'true';


      }
    

    // Doesn't work yet with the local json server! 
    function post (verificationcode){
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
          <Box display={'flex'} flexDirection='column'>
            <Box>
      <div  className='space-between'>
      <h1>Velkommen</h1>
      <Text maxW='30rem'>For at stemme til Folketingsvalget, er det obligatorisk at udfylde en kode i feltet herunder.</Text>

<Text maxW='30rem'>Koden skal starte med 4 store bogstaver, efterfulgt af 4 tilfældige karakterer f.eks: "DTVSa$9+".</Text>
</div>
      <Formik
      initialValues={{ name: '' }}
      onSubmit={handleSubmit}>

      {(props) => (
        <Form className="input-field">
          <Field name='name' validate={validateCode} onChange={handleChangeCodeInput}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel  color={'#1C4E81'} >Indtast kode</FormLabel>
                <Input id='input-code' type="text" placeholder='Indtast kode' borderRadius={'0'}
                borderColor={'#1C4E81'} color={'#1C4E81'} maxWidth='25rem'  {...field}/>
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
          id='submit-code'
            mt={4}
            bg={'var(--primary_blue)'} 
            isLoading={props.isSubmitting}
            type='submit'
            className='button'
            width='min-content'
            color='var(--secondary_blue)'
            marginTop="2rem"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    </Box>
<Box id='verification-code' display={'none'} flexDirection='column' maxWidth={'30rem'} marginTop='2rem'>
    <div className='intro-text '>


<p>Nedenunder ser du din unikke verifikationskode, som du skal bruge senere til at tjekke, at din stemme er optalt korrekt.</p>
<p>Gem den et sted, hvor du kan finde den.</p>
</div>



<div className='read-more'>
{/* Make a pop-up */}
<a className='link-bold' href="">Læs mere</a>
</div>

<div className='space-between'>
<div className='verification-code'>
<h3>{userCodeInput}</h3>

</div>
</div>
<PopOverVerificationCode/>
</Box>
</Box> 
    </div>
      </div>
  )
}