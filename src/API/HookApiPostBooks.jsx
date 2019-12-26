import React, {useState} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap'

export function HookApiPostBooks() {
    const [form, setState] = useState({
        title: '',
        author: '',
        pages: '',
        language: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://127.0.0.1:4000/books', form)
        console.log(form)
    }

    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form onSubmit={handleSubmit}>
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
            <Button>Submit</Button>
        </form>
    )
}