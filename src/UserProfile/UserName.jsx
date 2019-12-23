import React from 'react';

class UserName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
    }

    componentWillReceiveProps(nextProps){
        if(!this.props.name && nextProps.name){
            this.setState({
                username: nextProps.username
            })
        }
    }

    render(){
        return(

        )
    }
}

class UserNameUpdate extends React.Component{
    render(){
        return(
            <h1>Hallo nama saya {this.props.username}</h1>
        )
    }
}