import React, {useState} from 'react';
import axios from 'axios';
import Comment from './Comment';
import {withRouter} from 'react-router-dom';

function CommentForm(props) {

    const [data, setData] = useState({
        message: ""
    })

    const url = "http://127.0.0.1:8000/comment/"

    const handleFieldChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const idbook = props.match.params.id
        axios.post(url+idbook, data, 
            { headers: {
			"Authorization" : sessionStorage.getItem('token')
            }}
        )
		.then(res=>{
            console.log(res.data)
            // submit.push({
            //     name: data.name,
            //     message: data.message
            // })
			console.log(res.data)
			const mydata={...data}
            setData(mydata)
        })
        .catch(err=>console.error(err), [])
    }

    return (
        <>
            <div className="row">
                <div className="col-4  pt-3 border-right">
                    <h3 style={{marginBottom: "25px"}}>Leave Comment Here</h3>
                    <form onSubmit={(submit)=>handleSubmit(submit)}>
                        <div className="form-group">
                            <textarea 
                            onChange={(e)=>handleFieldChange(e)}
                            value={data.message}
                            className="form-control"
                            placeholder="input your message" 
                            name="message" 
                            id="message"
                            required
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-dark">
                                Comment
                            </button>
                        </div>
                    </form>
                </div>
                <Comment />
            </div>
        </>
    )
}

export default withRouter(CommentForm)