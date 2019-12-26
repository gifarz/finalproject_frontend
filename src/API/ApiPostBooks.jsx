import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'reactstrap';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.id) {
    errors.name = 'Required';
  } 

  if (!values.title) {
    errors.email = 'Required';
  } 

  if (!values.author) {
    errors.password = 'Required';
  } 

  if (!values.pages) {
    errors.passwordConfirmation = 'Required';
  } 

  if (!values.language) {
    errors.passwordConfirmation = 'Required';
  } 

  return errors;
};

export const ApiPostBooks = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      author: '',
      pages: '',
      language: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="container mt-5">
      <h2>Please Add The Book!</h2>
      <label htmlFor="name" style={{marginTop: "20px"}}>Id Book</label>
      <input
        id="id"
        name="id"
        type="text"
        placeholder = "Insert Id"
        onChange={formik.handleChange}
        value={formik.values.id}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.id ? <div style={{color: "red"}}>{formik.errors.id}</div> : null}

      <label htmlFor="title" style={{marginTop: "20px"}}>Title of Book</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder = "Insert the title"
        onChange={formik.handleChange}
        value={formik.values.title}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.title ? <div style={{color: "red"}}>{formik.errors.title}</div> : null}

      <label htmlFor="author" style={{marginTop: "20px"}}>Author of Book</label>
      <input
        id="author"
        name="author"
        type="text"
        placeholder = "Insert the author"
        onChange={formik.handleChange}
        value={formik.values.author}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.author ? <div style={{color: "red"}}>{formik.errors.author}</div> : null}

      <label htmlFor="page" style={{marginTop: "20px"}}>Page of Book</label>
      <input
        id="page"
        name="page"
        type="text"
        placeholder = "Insert the page"
        onChange={formik.handleChange}
        value={formik.values.page}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.page ? <div style={{color: "red"}}>{formik.errors.page}</div> : null}

      <label htmlFor="name" style={{marginTop: "20px"}}>Language of Book</label>
      <input
        id="language"
        name="language"
        type="text"
        placeholder = "Insert the language"
        onChange={formik.handleChange}
        value={formik.values.language}
        style={{display: "block", width: "100%"}}
      />
      {formik.errors.language ? <div style={{color: "red"}}>{formik.errors.language}</div> : null}

      <Button type="submit" color="success" style={{marginTop: "20px"}}>Sign Up</Button>
    </form>
  );
};
