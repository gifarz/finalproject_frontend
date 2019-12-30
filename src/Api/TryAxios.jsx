import React from 'react';
import Axios from 'axios';

export default class TryAxios extends React.Component {
    state = {
        persons: []
    }

    componentDidMount(){
        Axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/users"
        })
        .then(res => {
            const persons = res.data;
            this.setState ({persons})
        });
    }

    render() {
        return (
            <ul style= {{marginTop: "30px"}}>
                {this.state.persons.map (person => (
                    <ol key={person.id} style={{marginBottom: "5px"}}>
                        {person.id}. {person.address.street}
                    </ol>
                ))}
            </ul>
        )
    }
}