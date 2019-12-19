import React from 'react';

class Three extends React.Component{
    constructor(){
        super();
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.updateClock(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    updateClock(){
        this.setState({
            date: new Date()
        })
    }
    render(){
        return(
            <div>
                {this.state.date.toLocaleTimeString()} 
            </div>
        )
    }
}

export default Three;