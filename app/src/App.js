import React, { Component } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Video from './components/Video';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Chat from './components/Chat';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Chat/>
        <Slider />
        <Video />
        <Reviews />
        <Footer />
      </div>
    );
  }
}

export default App;
