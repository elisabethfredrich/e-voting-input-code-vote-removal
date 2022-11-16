import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
} from "@chakra-ui/react";

import { 
    Field, 
    Form, 
    Formik 
} from "formik";

// Styling
import './InputField.css'

function InputField() {
    
    function validateName(value) {
      const regex = new RegExp('[A-Z][A-Z][A-Z][A-Z]+-*');

      let error = ''

      console.log(regex.test(value));
      if (!value) {
        error = 'Du bedes venligst indtaste en verificeringskode'
      } else if (!regex.test(value)) {
        error = "Verificeringskoden skal starte med fire store bogstaver."
        console.log('Verificeringskoden skal starte med fire store bogstaver.')
        console.log(regex.test(value));
      } else if (value.length <= 8) {
        error = "Verificeringskoden skal være længere end otte karakterer."
      }
      return error
    }
  
    return (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form className="input-field">
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder='name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              backgroundColor='#1C4E81'
              color='#FFFFFF'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    )
  }

  export default InputField;