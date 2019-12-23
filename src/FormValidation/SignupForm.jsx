import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'reactstrap';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } 

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Required';
  } else if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passowrd doesnt match!';
  }

  return errors;
};

export const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="container m-5">
      <h2>Please Sign Up!</h2>
      <label htmlFor="name" style={{marginTop: "20px"}}>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="email" style={{marginTop: "20px"}}>Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="name" style={{marginTop: "20px"}}>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <label htmlFor="name" style={{marginTop: "20px"}}>Password Confirmation</label>
      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.passwordConfirmation}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.passwordConfirmation ? <div>{formik.errors.passwordConfirmation}</div> : null}

      <Button type="submit" color="primary" style={{marginTop: "20px"}}>Submit</Button>
    </form>
  );
};
