import React, {useState} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap'

export function HookApiPostBooks() {
    const [form, setForm] = useState({
        title: '',
        author: '',
        pages: '',
        language: ''
    })
;
    const apiUrl = "http://127.0.0.1:5000/books"

    const saveBook = (e) => {
        e.preventDefault();
        const data = {
            title: form.title,
            author: form.author,
            pages: form.pages,
            language: form.language
        }
        axios.post(apiUrl, data)
        .then(res => {
            alert('Data berhasil ditambahkan')
            if (res.data.redirect === '/') {
                window.location = '/index'
            } else if (res.data.redirect === apiUrl) {
                window.location = apiUrl
            }
        }) 
        .catch(err => {
            window.location = apiUrl
        })
    }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     axios.post('http://127.0.0.1:5000/books', {
    //         title: form.title,
    //         author: form.author,
    //         pages: form.pages,
    //         language: form.language
    //     })
    //     console.log(form)
    // }

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={saveBook}>
            <label htmlFor="title" style={{display: "block"}} >
                Title of Book
                <input
                    value={form.title}
                    name="title"
                    type="text"
                    onChange={updateField}
                    style={{
                        display: "block",
                        width: "100%"
                    }}
                />
            </label>
            <label htmlFor="author" style={{display: "block"}}>
                Author of Book
                <input
                    value={form.author}
                    name="author"
                    type="text"
                    onChange={updateField}
                    style={{
                        display: "block",
                        width: "100%"
                    }}
                />
            </label>
            <label htmlFor="page" style={{display: "block"}}>
                Page of Book
                <input
                    value={form.pages}
                    name="pages"
                    type="number"
                    onChange={updateField}
                    style={{
                        display: "block",
                        width: "100%"
                    }}
                />
            </label>
            <label htmlFor="language" style={{display: "block"}}>
                Language of Book
                <input
                    value={form.language}
                    name="language"
                    type="text"
                    onChange={updateField}
                    style={{
                        display: "block",
                        width: "100%"
                    }}
                />
            </label>
            <Button type="submit">Submit</Button>
        </form>
    )
}