import React,{Component} from 'react';

export default class Card extends Component {
    constructor(){
        super();
        //this.details = this.details.bind(this);
    }

    details(){
        console.log(this)
        console.log();
    }

    render(){
        console.log(this.props);
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.title }</h5>
                    <p className="card-text">{ this.props.body }</p>
                    <a href="#" className="btn btn-primary" onClick={() => this.props.selected(this.props)}>Details</a>
                </div>
            </div>
        );
    }
    
    

}