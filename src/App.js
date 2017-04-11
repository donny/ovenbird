import React, { Component } from 'react';
import Melbourne from "./Melbourne";
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <nav className="nav-overlay">
            <div className="nav-overlay-content">
              <a href="#">Hello1</a>
              <a href="#">Hello2</a>
            </div>
          </nav>
          <Melbourne/>
        </div>
    );
  }
}

export default App;
