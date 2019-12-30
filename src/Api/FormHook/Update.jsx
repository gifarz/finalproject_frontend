import React, {useState} from 'react';
import Axios from 'axios';

function Update(props) {

    const [data, setData] = useState({
        title: '',
        author: '',
        published_date: '',
        pages: '',
        language: '',
        publisher_id: ''
    })
    const apiUrl = 'http://127.0.0.1:5000/books/';

    // useEffect(() => {
    //     const id = props.match.params.id;
    //     Axios.get(apiUrl+id)
    //     .then(res => {
    //         setData(res.data)
    //     })
    //     .catch(error => console.log(error))
    // })

    function handleSubmit(e) {
        e.preventDefault()
        const id = props.match.params.id
        Axios.put(apiUrl+id, data)
        .then(res => {
            alert('Data has been succesfully updated')
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }

    function handleChange(e) {
        const newBook = {...data}
        newBook[e.target.id] = e.target.value
        setData(newBook)
    }

    return (
        <div className="container mt-5">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        value={data.title} 
                        type="text" 
                        id="title" 
                        name="title" 
                        className="form-control"
                        placeholder="Insert the title"
                    />
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
                        placeholder="Insert the Author"
                    />
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
                        placeholder="Insert the published_date"
                    />
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
                </div>
                <div className="form-group">
                    <label>Publisher ID</label>
                    <input 
                        onChange={(e)=>handleChange(e)} 
                        value={data.publisher_id} 
                        type="text" 
                        id="publisher_id" 
                        name="publisher_id" 
                        className="form-control"
                        placeholder="Insert the publisher id"
                    />
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>

        </div>
    )
} 
export default Update;