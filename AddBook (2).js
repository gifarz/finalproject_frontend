import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import moment from "moment";
//import "./form.css";

export default function AddBook(props) {

	const url = 'http://127.0.0.1:3000/books/'

	const [Book, setBook] = useState({data: []})
	const [data, setData] = useState({
		title: '',
		author: '',
		publisher_date: '',
		pages: '',
		language: '',
		published_id: ''
	})


	const { register, handleSubmit, errors } = useForm({
		mode: "onChange"
	});

	// const onSubmit = data => {
	// 	alert(JSON.stringify(data));
	// };

	function handle(e){
		const newdata={...data}
		newdata[e.target.id]=e.target.value
		setData(newdata)
	}

	function submit(){
		axios.post(url, data)
		.then(res=>{
			console.log(res.data)
			const mydata={...Book}
			setBook(mydata)
			props.history.push('/books')
		}).catch(err=>console.error(err))
	}



  return (
  	<div className="container">
	    <form onSubmit={(handleSubmit(submit))}>
		    <div className="form-group">
		      <label htmlFor="title">Title</label>
		      <input
		        id="title"
		      	type="text"
		      	placeholder="Title"
		      	name="title"
		      	value={data.title}
		      	onChange={(e)=>handle(e)}
		      	className="form-control"
		      	ref={register({
		      		required: "This is required",
		      		minLength: {
		      			value: 3,
		      			message: "Min length is 3"
		      		}
		      	})}
		      />
		      {errors.title && <p className="text-danger">{errors.title.message}</p>}
		    </div>
	        <div className="form-group">
		      <label htmlFor="author">Author</label>
		      <input
		        id="author"
		      	type="text"
		      	placeholder="Author"
		      	name="author"
		      	value={data.author}
		      	onChange={(e)=>handle(e)}
		      	className="form-control"
		      	ref={register({
		      		required: "This is required",
		      		minLength: {
		      			value: 3,
		      			message: "Min length is 3"
		      		}
		      	})}
		      />
		      {errors.author && <p className="text-danger">{errors.author.message}</p>}
	        </div>
	        <div className="form-group">
		      <label htmlFor="publisher_date">Publisher Date</label>
		      <input
		        id="publisher_date"
		      	type="date"
		      	placeholder="Publisher Date"
		      	name="publisher_date"
		      	value={data.publisher_date}
		      	onChange={(e)=>handle(e)}
		      	className="form-control"
		      	ref={register({
		      		required: "This is required"
		      	})}
		      />
		      {errors.publisher_date && <p className="text-danger">{errors.publisher_date.message}</p>}
	        </div>
	        <div className="form-group">
		      <label htmlFor="pages">Pages</label>
		      <input
		        id="pages"
		      	type="number"
		      	placeholder="Pages"
		      	name="pages"
		      	value={data.pages}
		      	onChange={(e)=>handle(e)}
		      	className="form-control"
		      	ref={register({
		      		required: "This is required"
		      	})}
		      />
		      {errors.pages && <p className="text-danger">{errors.pages.message}</p>}
	        </div>
	        <div className="form-group">
	      	  <label htmlFor="language">Language</label>
		      <input
		        id="language"
		      	type="text"
		      	placeholder="Language"
		      	name="language"
		      	value={data.language}
		      	onChange={(e)=>handle(e)}
		      	className="form-control"
		      	ref={register({
		      		required: "This is required",
		      		minLength: {
		      			value: 3,
		      			message: "Min length is 3"
		      		}
		      	})}
		      />
		      {errors.language && <p className="text-danger">{errors.language.message}</p>}
	        </div>
	        <div className="form-group">
		      <label htmlFor="published_id">Published ID</label>
		      <input
		        id="published_id"
		      	type="text"
		      	placeholder="Published ID"
		      	name="published_id"
		      	value={data.published_id}
		      	onChange={(e)=>handle(e)}
		      	className="form-control"
		      	ref={register({
		      		required: "This is required",
		      		minLength: {
		      			value: 3,
		      			message: "Min length is 3"
		      		}
		      	})}
		      />
		      {errors.published_id && <p className="text-danger">{errors.published_id.message}</p>}
	        </div>
	      <button className="btn btn-success btn-sm">Submit</button>
	    </form>
    </div>
  );
}


//tes pertama
// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// export default function AddBook(props){

// 	const url = 'http://127.0.0.1:3000/books/'

// 	const[Book, setBook] = useState({data: []})
// 	const [data, setData] = useState({
// 		title: '',
// 		author: '',
// 		publisher_date: '',
// 		pages: '',
// 		language: '',
// 		published_id: ''
// 	})

// 	// useEffect(
// 	// 	()=>{
// 	// 		axios.get(url)
// 	// 		.then(res=>{
// 	// 			console.log(res.data)
// 	// 			setBook(res.data)
// 	// 		}).catch(err=>console.error(err))
// 	// 	},[]
// 	// )

//  	// function remove(id){
//  	// 	//console.log(id)
//  	// 	axios.delete(url+id)
//  	// 	.then(res=>{
//  	// 		console.log(res.data)
//  	// 		const myalldata= Book.filter(item=>item.id !== id)
//  	// 		setBook(myalldata)
//  	// 	}).catch(err=>console.error(err))
//  	// }

// 	function submit(e){
// 		e.preventDefault()
// 		axios.post(url, data)
// 		.then(res=>{
// 			console.log(res.data)
// 			const mydata={...Book}
// 			setBook(mydata)
// 			props.history.push('/books')
// 		}).catch(err=>console.error(err))
// 	}

// 	function handle(e){
// 		const newdata={...data}
// 		newdata[e.target.id]=e.target.value
// 		setData(newdata)
// 	}

// 	// function update(id){
// 	// 	console.log(id)
// 	// 	props.history.push('/update/'+id)
// 	// }

// 	const errors = {};
//     if (!data.title) {
//         errors.title = "Title is required";
//     } else if (data.title.length < 6) {
//         errors.title = "Title needs to be more than 6 characters";
//     }
    
//     if (!data.author) {
//       errors.author = "Author is required";
//     } else if (data.author.length < 6) {
//       errors.author = "Author needs to be more than 6 characters";
//     }

//     if (!data.publisher_date) {
//     errors.publisher_date = "Publisher Date is required";
//     } 

//     if (!data.pages) {
//     errors.pages = "Pages is required";
//     }

//     if (!data.language) {
//     errors.language = "language is required";
//     } else if (data.language.length < 6) {
//     errors.language = "Language needs to be more than 6 characters";
//     }

//     if (!data.published_id) {
//     errors.published_id = "Published Id is required";
//     } else if (data.published_id.length < 6) {
//     errors.publisher_id = "Published Id needs to be more than 6 characters";
//     }


// 	return(
// 		<div className="container">
// 			<form onSubmit={(e)=>submit(e)}>
// 				<div className="form-group">
// 			      <label htmlFor="title">Title</label>
// 			      <input onChange={(e)=>handle(e)} value={data.title} type="text" name="title" id="title" className="form-control" />
// 			      {errors.title ? <div className="text-danger">{errors.title}</div> : null}
// 			    </div>
// 			    <div className="form-group">
// 			      <label htmlFor="author">Author</label>
// 			      <input onChange={(e)=>handle(e)} value={data.author} type="text" name="author" id="author" className="form-control" />
// 			      {errors.author ? <div className="text-danger">{errors.author}</div> : null}
// 			    </div>
// 			    <div className="form-group">
// 			      <label htmlFor="publisher_date">Pubelisher Date</label>
// 			      <input onChange={(e)=>handle(e)} value={data.publisher_date} type="date" name="publisher_date" id="publisher_date" className="form-control" />
// 			      {errors.publisher_date ? <div className="text-danger">{errors.publisher_date}</div> : null}
// 			    </div>
// 			    <div className="form-group">
// 			      <label htmlFor="pages">Pages</label>
// 			      <input onChange={(e)=>handle(e)} value={data.pages} type="number" name="pages" id="pages" className="form-control" />
// 			      {errors.pages ? <div className="text-danger">{errors.pages}</div> : null}
// 			    </div>
// 			    <div className="form-group">
// 			      <label htmlFor="language">Language</label>
// 			      <input onChange={(e)=>handle(e)} value={data.language} type="text" name="language" id="language" className="form-control" />
// 			      {errors.language ? <div className="text-danger">{errors.language}</div> : null}
// 			    </div>
// 			    <div className="form-group">
// 			      <label htmlFor="published_id">Published ID</label>
// 			      <input onChange={(e)=>handle(e)} value={data.published_id} type="text" name="published_id" id="published_id" className="form-control" />
// 			      {errors.published_id ? <div className="text-danger">{errors.published_id}</div> : null}
// 			    </div>
// 			    <button className="btn btn-success btn-sm">Submit</button>
// 			</form>
// 		</div>
// 	)
// }