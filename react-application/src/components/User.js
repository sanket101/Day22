import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class User extends Component {
    constructor(){
        super();
        //this.details = this.details.bind(this);
    }

    details(){
        console.log(this)
        console.log();
    }

    render(){
        console.log('In User.js');
        console.log(this.props);
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.name }</h5>
                    <p className="card-text">{ this.props.phone }</p>
                    <Link className="btn btn-primary" to={`/user/${this.props.id}`}>Details</Link>
                </div>
            </div>
        );
    }
    
    

}