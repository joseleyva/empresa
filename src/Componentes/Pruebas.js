import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

 const Pruebas = () => (
  <div>
    <h1>Displaying Error Messages</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={ console.log()}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field name="username" />
          {/* If this field has been touched, and it contains an error, display it
           */}
         
          <Field name="email" />
          {/* If this field has been touched, and it contains an error, display
          it */}
          <ErrorMessage component={Form} name="email" />
         {touched.email && errors.email ? <Form.Control.Feedback type="invalid" tooltip>{errors.email}</Form.Control.Feedback> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Pruebas;