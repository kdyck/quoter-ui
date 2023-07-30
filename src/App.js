import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import moment from 'moment'
import { Button, ButtonGroup,Container,Table,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {StonksNavigation} from './components/Navigation.js'
import {StonksHeader} from './components/Header.js'
import {StonksTable} from './components/Table.js'


class App extends Component {
    state = {
        tickers: []
    };

    async componentDidMount() {
        //todo: make symbol dynamic
        const tickerSymbols = "orcl,aapl,amzn,tsla,voo"
        const response = await fetch('/getPrice?symbol='.concat(tickerSymbols));
        const body = await response.json();
        this.setState({tickers: body});
    }

  render() {
    const {tickers} = this.state;
    
    return (
        <div className="App">
            <StonksNavigation/>
            <StonksHeader/>
            <StonksTable/>
        </div>
    );
  }
}

export default App;
