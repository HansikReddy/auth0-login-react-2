import React, {Component} from "react";

export default class Secret extends Component{
    render(){
        return(
        <div>
            this is a Secret area. jump back to <a href="/">Home</a>
            <br/>
            <button onClick={this.props.auth.logout}>Log out</button>
        </div>
        )
    }
}