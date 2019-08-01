import React from 'react';
import Card from './Card';
import User from './User';
import axios from 'axios';

export default class Main extends React.Component {
    titleMessage = "IPhone X";
    
    constructor(){
        super();
        this.state = {
            phones : []
        }
        
        
        this.selectedProduct = this.selectedProduct.bind(this);
        console.log(`Constructor is called!`);
    }

    selectedProduct(obj){
        console.log(obj);
        //console.log(`${obj.title}`);
        const filteredList = this.originalList.filter(user => user.name == obj.name);
        
        this.setState({
            phones : [
                {
                    name : obj.name,
                    phone : obj.phone,
                    website : obj.website
                }
            ]
        });
        /*
        this.setState({
            phones : filteredList
        });

            this.setState({
                phones : [
                    {
                        name:obj.title, 
                        desc:obj.body
                    }
                ]
            });
        */
    }

    //this method is called only once before dom loaded
    componentDidMount(){
        console.log(`Component is mounted on the DOM`);

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {console.log(res); this.originalList = res.data}).then(() => this.setState({phones : this.originalList}));

        /*this.originalList =
            [
                {
                    name:'IPhone',
                    desc:'Latest IPhone Model from Apple'
                },
                {
                    name:'Redmi Note 7 Pro',
                    desc:'Best Phone with 48 MP Camera'
                },
                {
                    name:'One Plus 6',
                    desc:'Flagship phone from One Plus'
                }
            ];
        
        this.setState({
            phones : this.originalList
        });
        */
        console.log(this.state.phones);
        //this.fixedState = this.state.phones;
    }

    render(){
    
        return (
            <div className="row">
                {
                    this.state.phones.map((user,index) => <User key={index} id= {user.id} name={user.name} phone={user.phone} selected={this.selectedProduct}/>)
                }
            </div>
        );
    }
    
}

//export default Main;