import React from 'react';
import Axios from 'axios';

export default class ApiGetBooks extends React.Component{
    state = {
        books: []
    }
    
    componentDidMount(){
        Axios.get('http://127.0.0.1:4000/books').then(res => {
            const books = res.data;
            console.log(books)
            this.setState({ books: books.data })
        })
    }

    render(){
        return(
            <table style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Page</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.pages}</td>
                            <td>{book.language}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            // <ul>
            //     {this.state.books.map (book => (
            //         <ol key={book.id}>
            //             {book.id}. {book.title}
            //         </ol>
            //     ))}
            // </ul>
        )
    }
}