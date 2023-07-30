import logo from '../logo.svg';
import '../App.css';
import React, { Component }  from 'react';

export class StonksHeader extends Component {
    render() {
        return(
         <header>
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="App-intro">
                <h2>Current Stonks Prices</h2>
            </div>
         </header>
        );
    }
}