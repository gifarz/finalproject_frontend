import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function HookApiGetBooks() {
    const [data, setData] = useState({ data: [] })

    // async function fetchData() {
    //     const res = await Axios ('https://127.0.0.1:4000/books')
    //     const data = await res.data
    //     setData(data)
    // }

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios ('https://127.0.0.1:5000/books');
            setData(result.data)
            console.log(setData)
        } 
        fetchData()
    }, [])

    return(
        <table>
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
                {data.data.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.page}</td>
                        <td>{book.language}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}