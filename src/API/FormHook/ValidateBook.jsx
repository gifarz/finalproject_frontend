import FormHook from './FormHook';

export default function validate(props) {
  const [data] = FormHook()
  const errors = {};
  if (!data.title) {
      errors.title = "Title is required";
  } else if (data.title.length < 5) {
      errors.title = "Title needs to be more than 5 characters";
  }
  if (!data.author) {
    errors.author = "Author is required";
  } else if (data.author.length < 3 ) {
    errors.author = "author needs to be more than 3 characters";
  }

  if (!data.published_date) {
  errors.date = "Date is required";
  } 

  if (!data.pages) {
  errors.pages = "Pages is required";
  } 

  if (!data.language) {
  errors.language = "Language is required";
  } else if (data.language.length < 3) {
  errors.language = "language needs to be more than 3 characters";
  }

  if (!data.publisher_id) {
  errors.publisher_id = "Publisher Id is required";
  } else if (data.publisher_id.length < 5) {
  errors.publisher_id = "Publisher Id needs to be more than 5 characters";
  }

  return errors;
}