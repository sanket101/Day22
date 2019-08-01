import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './components/Main';
import About from './components/About';
import UserDetails from './components/UserDetails';


const router = (
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/main" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/user/:id" component={UserDetails}/>
        </div>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
