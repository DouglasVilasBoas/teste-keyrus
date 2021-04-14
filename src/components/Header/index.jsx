import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/keyrus-logo.png';


export default class Header extends Component {
    render() {
        return (
            <nav>
                 <Link to={`/`}>
                <img src={logo} className="logoHeader" />
                </Link>
            </nav>
        )
    }
}