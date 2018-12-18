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
import Users from '../db/users.json'
import { LinkToRegistration } from "../Components/LinkToRegistration";
import ShowUsers from '../Components/ShowUsers'
import UserDetails from './../Components/UserDetails';
import { Headphones } from "../Components/Headphones";
import { Phones } from "../Components/Phones";
import { Laptops } from "../Components/Laptops";
import { Cameras } from "../Components/Cameras";
import { Headphone } from "../Components/Headphone";
import { Phone } from "../Components/Phone.jsx";
import { Laptop } from "../Components/Laptop";
import { Camera } from "../Components/Camera";

const index = () => (
  <div className="App">
    <Header />
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
    <Headphones />
    <Footer />
  </div>
);
const headphone = () => (
  <div>
    <Header />
    <Headphone header={"headphone"} />
    <Footer />
  </div>
);
const phones = () => (
  <div>
    <Header />
    <Phones />
    <Footer />
  </div>
);
const phone = () => (
  <div>
    <Header />
    <Phone header={"phone"} />
    <Footer />
  </div>
);

const laptops = () => (
  <div>
    <Header />
    <Laptops />
    <Footer />
  </div>
);
const laptop = () => (
  <div>
    <Header />
    <Laptop header={"laptop"} />
    <Footer />
  </div>
);
const cameras = () => (
  <div>
    <Header />
    <Cameras />
    <Footer />
  </div>
);
const camera = () => (
  <div>
    <Header />
    <Camera header={"camera"} />
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

const signup = () => (
  <div>
    <Header />
    <hr />
    <SignUp />
  </div>
);

const editUsers = () =>(
  <div className="App">
  <Header />
  <hr/>
  <UserDetails users={Users} />
  </div>
)

const admin = () => (
  <div className="App">
    <Header />
    <hr/>
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
        <Route path="/phones" render={phones} />
        <Route path="/laptops" render={laptops} />
        <Route path="/cameras" render={cameras} />
        <Route path="/headphone/:id" render={headphone} />
        <Route path="/phone/:id" render={phone} />
        <Route path="/laptop/:id" render={laptop} />
        <Route path="/camera/:id" render={camera} />
        <Route path="/login" component={login} />
        <Route path="/search" component={admin} />
        <Route path="/signup" component={signup} />
        <Route path='/user/:id' component={editUsers} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
