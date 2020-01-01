import {useState, useEffect} from 'react';
import Axios from 'axios'

export const UseForm = (props, ValidateBook) => {
    
    const [book, setBook] = useState({data: []})
    const [data, setData] = useState({
        title: '',
        author: '',
        published_date: '',
        pages: '',
        language: '',
        publisher_id: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const apiUrl = 'http://127.0.0.1:5000/books/';
    
    useEffect(() => {
        Axios.get(apiUrl)
        .then(res => {
            setBook(res.data)
        })
        .catch(err => console.log(err))
    })
    
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            alert(JSON.stringify(data, null,2));
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(ValidateBook);
        setIsSubmitting(true);
        Axios.post(apiUrl, data)
        .then(res => {
            const dataBook = [...book, res.data]
            setBook(dataBook)
        })
        .catch(err => console.log(err))
    } 
    
    const handleRemove = (id) => {
        console.log(id)
        Axios.delete(apiUrl+id)
        .then(res=>{
            console.log(res.data)
            const dataBooks = book.filter(item=>item.id !==id)
            setBook(dataBooks)
        })
        .catch(err=>console.error(err))
    }
    
    const handleUpdate = (id) => {
        console.log(id)
        props.history.push('/updatebook/' + id)
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    
    return {
        handleChange,
        handleRemove,
        handleSubmit,
        handleUpdate,
        data,
        book,
        errors
    }
}