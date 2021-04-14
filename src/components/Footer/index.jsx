import React, {Component} from 'react';
import './style.css';
import logo from '../../assets/keyrus-logo-footer.png';


export  default class Footer extends Component {
    render() {
        return (
            <footer>
            <img src={logo} className="logoFooter" />
             </footer>
        )
    }
}
