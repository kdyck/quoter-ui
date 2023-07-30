import React, { Component } from 'react';
import moment from 'moment'
import { Button, ButtonGroup,Container,Table,Navbar,Nav,NavDropdown } from 'react-bootstrap';

export class StonksTable extends Component {

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

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Symbol</th>
              <th>Current Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickers.map(ticker =>
                  <tr>
                      <td style={{whiteSpace: 'nowrap'}}></td>
                      <td> { moment(ticker.lastSaleTime).format('LLLL')} </td>
                      <td> {ticker.symbol} </td>
                      <td> ${ticker.lastSalePrice} </td>
                      <td>
                          <ButtonGroup>
                              <Button size="sm" color="primary" to={"/getPrice?symbol=" + ticker.symbol}>View</Button>
                          </ButtonGroup>
                      </td>
                  </tr>
            )}
          </tbody>
        </Table>
      );
    }
  }
