import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import 'antd/dist/antd.css';
import './App.css'
import './index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App ragaca">
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
