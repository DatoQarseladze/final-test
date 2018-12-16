import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import SignUp from "../Components/SignUp";
import Login from "./../Components/Login";
import Table from "./../Components/Table";
import Header from "../Components/Header";
import { Categories } from "../Components/Categories";
import { LinkToRegistration } from "../Components/LinkToRegistration";
import Chat from "../Components/Chat";
import Slider from "../Components/Slider";
import Video from "../Components/Video";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";
import Products from "../db/products.json";
import Headphones from "../Components/Headphones";
import Headphone from "../Components/Headphone";
import { Phones } from "../Components/Phones";
import { Phone } from "../Components/Phone.jsx";

const index = () => (
  <div className="App">
    <Header />
    {/* <Login /> */}
    <Chat />
    <Slider />
    <Video />
    <Reviews />
    <Footer />
  </div>
);
const explore = () => (
  <div className="explore">
    <Header />
    <Categories />
    <Footer />
  </div>
);
const headphones = () => (
  <div className="headphones">
    <Header />
    <Categories />
    <Headphones items={Products.HEADPHONES} />
    <Footer />
  </div>
);
const headphone = () => (
  <div>
    <Header />
    {/* <Categories /> */}
    <Headphone
      items={Products.HEADPHONES}
      header={"headphones"}
      link={"headphone"}
    />
    <Footer />
  </div>
);
const phones = () => (
  <div>
    <Header />
    <Phones items={Products.PHONES} header={"phones"} link={"phone"} />
    <Footer />
  </div>
);
const phone = () => (
  <div>
    <Header />
    <Phone items={Products.PHONES} />
    <Footer />
  </div>
);
const login = () => (
  <div>
    <Header />
    <hr />
    <h1 className="login--title">Sign in</h1>
    <div className="login--page">
      <Login />
      <LinkToRegistration />
    </div>
    <Footer />
  </div>
);

const admin = () => (
  <div className="App">
    <Table />
    <Footer />
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" render={index} exact />
        <Route path="/categories" render={explore} />
        <Route path="/headphones" render={headphones} />
        <Route path="/headphone/:id" render={headphone} />
        <Route path="/phones" render={phones} />
        <Route path="/phone/:id" render={phone} />
        <Route path="/login" component={login} />
        <Route path="/search" component={admin} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
