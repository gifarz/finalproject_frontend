import React from "react";

class UserName2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "Muhammad Gifar Zaini"
        }
    }

    changeName = () => {
        this.setState({
            username: "Zaini"
        })
    }

    render(){
        return(
            <div>
                <h2 style={{textAlign: "center", marginTop: "20px"}}>
                    <strong>Halo nama saya {this.state.username}</strong>
                </h2>
            </div>
        )
    }
}

export default UserName2;