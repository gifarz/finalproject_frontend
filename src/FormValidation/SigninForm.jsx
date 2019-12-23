import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'reactstrap';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 5) {
    errors.name = 'Min 5 characters';
  }

  if (!values.password) {
    errors.password = 'Required';
  } 

  return errors;
};

export const SigninForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="container m-5">
      <h2>Please Sign In!</h2>
      <label htmlFor="name" style={{marginTop: "20px"}}>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder = "Insert your name"
        onChange={formik.handleChange}
        value={formik.values.name}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="name" style={{marginTop: "20px"}}>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder = "Insert your password"
        onChange={formik.handleChange}
        value={formik.values.password}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <Button type="submit" color="primary" style={{marginTop: "20px"}}>Submit</Button>
    </form>
  );
};
