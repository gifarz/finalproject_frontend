import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Button} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {useForm} from 'react-hook-form'
// import{ UseForm } from './UseForm';
// import ValidateBook from './ValidateBook'

function FormHook(props) {
    // const {watch} = useForm();
    const [book, setBook] = useState({data: []})
    const [data, setData] = useState({
        title: '',
        author: '',
        published_date: '',
        pages: '',
        language: '',
        publisher_id: ''
    })
    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const apiUrl = 'http://127.0.0.1:5000/books/';

    useEffect(() => {
        Axios.get(apiUrl)
        .then(res => {
            setBook(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmitting) {
            alert(JSON.stringify(data, null,2));
        }
    });

    function handleSubmit(e) {
        e.preventDefault()
        setError(errors);
        setIsSubmitting(true);
        Axios.post(apiUrl, data)
        .then(res => {
            const dataBook = {...book}
            setBook(dataBook)
        })
        .catch(err => console.log(err))
    }

    function handleRemove(id){
        console.log(id)
        Axios.delete(apiUrl+id)
        .then(res=>{
            console.log(res.data)
            const dataBooks = book.filter(item=>item.id !==id)
            setBook(dataBooks)
        })
        .catch(err=>console.error(err))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    function handleUpdate(id){
        console.log(id)
        props.history.push('/updatebook/' + id)
    }

    const errors = {};
    if (!data.title) {
        errors.title = "Title is required";
    } else if (data.title.length < 2) {
        errors.title = "Title needs to be more than 10 characters";
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


    const display = book.data.map(item => 
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.published_date}</td>
            <td>{item.pages}</td>
            <td>{item.language}</td>
            <td>{item.publisher_id}</td>
            <td>
                <Button 
                    color="primary" 
                    onClick={()=> handleUpdate(item.id)}
                    style={{marginRight: "10px"}}
                    >Update
                </Button>
                <Button color="danger" onClick={()=> handleRemove(item.id)}>Delete</Button>
            </td>
        </tr>
    )

    return (
        <React.Fragment>

            <form onSubmit={(e)=>handleSubmit(e)} noValidate>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        onChange={handleChange} 
                        value={data.title} 
                        type="text" 
                        id="title" 
                        name="title" 
                        className="form-control"
                        placeholder="Insert the title"
                    />
                    {errors.title && <p style={{color: "red"}}>{errors.title}</p> }
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        value={data.author} 
                        type="text" 
                        id="author" 
                        name="author" 
                        className="form-control"
                        placeholder="Insert the author"
                    />
                    {errors.author && <p style={{color: "red"}}>{errors.author}</p> }
                </div>
                <div className="form-group">
                    <label>Published Date</label>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        value={data.published_date} 
                        type="date" 
                        id="published_date" 
                        name="published_date" 
                        className="form-control"
                        placeholder="Insert the date"
                    />
                    {errors.published_date && <p style={{color: "red"}}>{errors.published_date}</p> }
                </div>
                <div className="form-group">
                    <label>Pages</label>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        value={data.pages} 
                        type="number" 
                        id="pages" 
                        name="pages" 
                        className="form-control"
                        placeholder="Insert page"
                    />
                    {errors.pages && <p style={{color: "red"}}>{errors.pages}</p> }
                </div>
                <div className="form-group">
                    <label>Language</label>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        value={data.language} 
                        type="text" 
                        id="language" 
                        name="language" 
                        className="form-control"
                        placeholder="Insert the language"
                    />
                    {errors.language && <p style={{color: "red"}}>{errors.language}</p> }
                </div>
                <div className="form-group">
                    <label>Publisher Id</label>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        value={data.publisher_id} 
                        type="text" 
                        id="publisher_id" 
                        name="publisher_id" 
                        className="form-control"
                        placeholder="Insert the publisher id"
                    />
                    {errors.publisher_id && <p style={{color: "red"}}>{errors.publisher_id}</p> }
                </div>
                <button className="btn btn-dark" disabled={!errors}>Submit</button>
            </form>

            <table 
                className="table" 
                style={{width: "100%", marginTop: "30px"}}
            >
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Date</th>
                        <th>Page</th>
                        <th>Language</th>
                        <th>Publisher Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {display}
                </tbody>
            </table>

        </React.Fragment>
    )
}

export default withRouter(FormHook)