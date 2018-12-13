import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Video from "./Components/Video";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Chat from "./Components/Chat";
import Products from "./DB/products.json";
import { Headphones } from "./Components/Headphones";
import { Phones } from "./Components/Phones";
import { Categories } from "./Components/Categories.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Chat />
      <Slider />
      <Video />
      <Reviews />
      <Footer />
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
            {/* <Link to="/categories">Products</Link> */}
          </p>

          <Route path="/" exact component={Homepage} />
          <Route path="/categories" component={Categories} />
          <Route
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
