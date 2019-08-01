import React from 'react';
import axios from 'axios';

export default class UserDetails extends React.Component {
    
    constructor(){
        super();
        this.state = {
            user : {}
        }
    }

    componentDidMount(){
        console.log('In Component');
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
        .then(res => {console.log(res); this.user = res.data}).then(() => {console.log(this.user); this.setState({user : this.user})});
    }

    render(){
        console.log(this.props);
        //this.id = this.props.match.params;
        //console.log(`id is ${id}`);
        return (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Name : { this.state.user.name }</h5>
                    <p className="card-text">Phone : { this.state.user.phone }</p>
                    <p className="card-text">Phone : { this.state.user.username }</p>
                    <p className="card-text">Phone : { this.state.user.email }</p>
                    <p className="card-text">Phone : { this.state.user.website }</p>
                </div>
            </div>
        );
    }
}