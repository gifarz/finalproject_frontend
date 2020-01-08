import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Login from './Login';

export default function Book(props){

	const url = 'http://127.0.0.1:8000/book/'
	const Token = sessionStorage.getItem('token')
	const Roles = sessionStorage.getItem('roles')

	const [book, setBook] = useState({book: []})
	const [data, setData] = useState({
		title: '',
        author: '',
        published_date: '',
		pages: '',
        language: '',
        publisher_id: ''
	})

	useEffect(
		()=>{
			axios.get(url, 
				{headers: {
          		"Authorization" : sessionStorage.getItem('token')
        		}
      	})
			.then(res=>{
				console.log(res.data)
				setBook(res.data)
			}).catch(err=>console.error(err))
		},[]
	)

 	const handleRemove = (id) => {
 		console.log(id)
 		axios.delete(url+id, {headers: {
			"Authorization" : sessionStorage.getItem('token')
		 }})
 		.then(res=>{
			console.log(res.data)
			alert('Data Berhasil Di hapus')
 		}).catch(err=>console.error(err))
 	}

	const handleUpdate = (id) => {
		console.log(id)
		props.history.push('/bookupdate/'+id)
	}

	const handleSubmit = ({e,submit}) => {
		axios.post(url, data, {headers: {
			"Authorization" : sessionStorage.getItem('token')
		}})
		.then(res=>{
			const {name, value} = e.target
			submit.push({
                [name]: value
            })
            setData({
                submit,
                ...data
            })
            console.log(res.data)
			const mydata={...book}
            setBook(mydata)
		}).catch(err=>console.error(err))
	}

	const handleChange= (e) => {
		const newdata={...data}
		newdata[e.target.id]=e.target.value
		setData(newdata)
	}

	return(
		<>
			{Token ? 
			<div className="container mt-5">
				{Roles === "2" ? 
				<>
					<h1>List of Books</h1>
					<hr/>
					<form className="container mt-5" onSubmit={(submit)=>handleSubmit(submit)} noValidate>
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
								required
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
								placeholder="Insert the author"
								required
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
								placeholder="Insert the published date"
								required
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
								required
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
								required
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
								required
							/>
						</div>

						<button className="btn btn-dark mb-4">Submit</button>
					</form>
					<table className="table table-hover">
						<thead className="thead-dark">
							<tr>
								<th>Title</th>
								<th>Author</th>
								<th>Pages</th>
								<th>Published Date</th>
								<th>Language</th>
								<th>PublisherID</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>{book.book.map(book => (
							<tr key = {book.id}>
							<td>{book.title}</td>
							<td>{book.author}</td>
							<td>{book.published_date}</td>
							<td>{book.pages}</td>
							<td>{book.language}</td>
							<td>{book.publisher_id}</td>
							<td>
								<button onClick={()=>handleUpdate(book.id)} className="btn btn-primary btn-sm mr-1 mb-1">Update</button>
								<button onClick={()=>handleRemove(book.id)} className="btn btn-danger btn-sm mb-1">Delete</button>
							</td>
							</tr>
						))}
						</tbody>
					</table>
				</>
				:
				<h1>Kamu bukan admin</h1>
				}
			</div>
			:
			<Login/>
			}
		</>
		
	)
}