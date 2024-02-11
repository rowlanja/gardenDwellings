import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function Contact() {
   const initialState = {name: '', email: '', message: ''}
   const [eachEntry, setEachEntry] = useState(initialState)
   const {name, email, message} = eachEntry
   const [validated, setValidated] = useState(false);

   const handleSubmit = (event) => {
     const form = event.currentTarget;
     console.log('Submitting data');
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }
 
     setValidated(true);
   };

   return ( 
      <div className='App'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">           
            <Form.Label>Name</Form.Label>
            <Form.Control />
          </Form.Group>

         <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control/>
         </Form.Group>
         
         <Form.Group controlId="formBasicTextField">
            <Form.Label>Message</Form.Label>
            <Form.Control/>
        </Form.Group>
        <Button variant="success" type="submit">Submit</Button>
      </Form>
   </div>
   );
};
  
export default Contact;