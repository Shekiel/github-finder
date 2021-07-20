import React, { Component } from 'react';
import Navbar from './componets/layout/Navbar';
import UserItem from './componets/users/UserItem';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
