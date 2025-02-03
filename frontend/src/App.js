import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    products: []
  };

  async createProduct() {
    await axios.get(process.env.REACT_APP_API_URL + '/products');
    this.loadProducts();
  }

  async loadProducts() {
    const res = await axios.get(process.env.REACT_APP_API_URL + '/products');
    this.setState({
      products: res.data
    });
  }

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.createProduct()}>Get Products</button>
          <p>products list:</p>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              {this.state.products.map(prod => (
                <td key={prod._id}>{prod._id}</td>
              ))}
              {this.state.products.map(prod => (
                <td key={prod.name}>{prod.name}</td>
              ))}
              {this.state.products.map(prod => (
                <td key={prod.price}>{prod.price}</td>
              ))}
            </tr>
          </table>
        </header>
      </div>
    );
  }
}

export default App;