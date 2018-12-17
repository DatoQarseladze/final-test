import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Video from "./components/Video";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Chat from "./components/Chat";
import Products from "./DB/products.json";
import { Headphones } from "./components/Headphones";
import { Phones } from "./components/Phones";
import { Categories } from "./components/Categories.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Chat />
      <Slider />
      <Video />
      <Reviews />
      <Footer />
      <Footer1 />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <p className="allProducts">
            <Link to="/">{Homepage}</Link>
          </p>

          <Route path="/" exact component={Homepage} />
          <Route path="/categories" component={Categories} />
          <Route
            exact
            path="/headphones"
            render={() => <Headphones items={Products.HEADPHONES} />}
          />
          <Route
            path="/phones"
            render={() => <Phones items={Products.PHONES} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
