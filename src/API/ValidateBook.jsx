 
export default function validate(data) {
    let errors = {};
    if (!data.title) {
        errors.title = "Title is required";
    } else if (data.title.length < 10) {
        errors.title = "Title needs to be more than 10 characters";
    }
    if (!data.author) {
      errors.author = "Author is required";
    } else if (data.author.length < 10) {
      errors.author = "author needs to be more than 10 characters";
    }

    if (!data.published_date) {
    errors.date = "Date is required";
    } 

    if (!data.pages) {
    errors.pages = "pages is required";
    } else if (data.pages.length < 10) {
    errors.pages = "pages needs to be more than 10 characters";
    }

    if (!data.language) {
    errors.language = "language is required";
    } else if (data.language.length < 10) {
    errors.language = "language needs to be more than 10 characters";
    }

    if (!data.publisher_id) {
    errors.publisher_id = "publisher_id is required";
    } else if (data.publisher_id.length < 10) {
    errors.publisher_id = "publisher_id needs to be more than 10 characters";
    }

    return errors;
  }