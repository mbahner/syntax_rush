import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class Navbar extends Component{
    render() {
        return (
            <div id="nav">
                <Link to='/game'>
                    Home
                </Link>

                <Link to='/login'>
                    Login
                </Link>

                <Link to='/signup'>
                    Sign up
                </Link>
            </div>
        );
    }
}

export default Navbar;