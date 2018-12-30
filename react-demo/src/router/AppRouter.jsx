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
import About from "../Components/Aboutus";
import Users from "../db/users.json";
import ShowUsers from "../Components/ShowUsers";
import UserDetails from "./../Components/UserDetails";
import { Headphones } from "../Components/Headphones";
import { Phones } from "../Components/Phones";
import { Laptops } from "../Components/Laptops";
import { Cameras } from "../Components/Cameras";
import { Headphone } from "../Components/Headphone";
import { Phone } from "../Components/Phone.jsx";
import { Laptop } from "../Components/Laptop";
import { Camera } from "../Components/Camera";
import  Support  from '../Components/Support'
import Cart from "../Components/Cart";
import Search from "../Components/Search";
import Filter from "../Components/ProFilter"
import Profile from "../Components/ProfilePage"
import AddProduct from "../Components/AddProduct"
import Orderd from "../Components/Orderd"
import "../css/Aboutus.css";
import Burger from '../Components/Burger'
import Popup from "reactjs-popup";
import Menu from "../Components/Menu";

const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "80%",
  margin: '150px auto 0',
  display: 'flex',
  justifyContent: 'center',
  border: "none"
};

const index = () => (
  <div className="App">
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
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
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Categories />
    <Footer />
  </div>
);
const aboutus = () => (
  <div className="aboutus">
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <About />
    <Footer />
  </div>
);
const headphones = () => (
  <Switch>
    <Route exact path="/headphones" component={headphonesList} />
    <Route path="/headphones/:id" component={headphone} />
  </Switch>
);
const headphonesList = () => (
  <div className="headphones">
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Headphones />
    <Footer />
  </div>
);
const headphone = () => (
  <div>
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Headphone />
    <Footer />
  </div>
);
const phones = () => (
  <Switch>
    <Route exact path="/phones" component={phonesList} />
    <Route path="/phones/:id" component={phone} />
  </Switch>
);
const phonesList = () => (
  <div>
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Phones />
    <Footer />
  </div>
);
const phone = () => (
  <div>
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Phone />
    <Footer />
  </div>
);

const laptops = () => (
  <Switch>
    <Route exact path="/laptops" component={laptopsList} />
    <Route path="/laptops/:id" component={laptop} />
  </Switch>
);
const laptopsList = () => (
  <div>
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Laptops />
    <Footer />
  </div>
);
const laptop = () => (
  <div>
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Laptop header={"laptop"} />
    <Footer />
  </div>
);
const cameras = () => (
  <Switch>
    <Route exact path="/cameras" component={camerasList} />
    <Route path="/cameras/:id" component={camera} />
  </Switch>
);
const camerasList = () => (
  <div>
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Cameras />
    <Footer />
  </div>
);
const camera = () => (
  <div>
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <Camera />
    <Footer />
  </div>
);

const login = () => (
  <div>
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
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
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <hr />
    <SignUp />
  </div>
);
const cart = () => (
  <div> 
    <Cart></Cart>
  </div>
);

const editUsers = () => (
  <div className="App">
    <Header />
    <hr />
    <UserDetails users={Users} />
  </div>
);

const admin = () => (
  <div className="App">
    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <hr />
    <Table />
    <Footer />
  </div>
);

const support = () => (
  <div className="App">

    <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <hr />
    <Support />
  <Footer />


  </div>
)

const product = () =>(
  <div> 
    <Header></Header>
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Burger open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <hr/>
    <AddProduct/>
    <Footer/>
  </div>
)

const AppRouter = () => (
  <BrowserRouter>
    <div className="main">
      <Switch>
        <Route path="/" render={index} exact />
        <Route path="/categories" render={explore} />
        <Route path="/headphones" render={headphones} />
        <Route path="/phones" render={phones} />
        <Route path="/laptops" render={laptops} />
        <Route path="/cameras" render={cameras} />
        <Route path="/login" component={login} />
        <Route path="/signup" component={signup} />
        <Route path="/user/:id" component={editUsers} />
        <Route path="/company" component={aboutus} />
        <Route path='/support' component={support} />
        <Route path ="/cart" component={cart}/>
        <Route path = "/search" component={Search}/>
        <Route path = "/filter" component={Filter}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/product" component={product}/>
        <Route path = '/data' component={admin}/>
        <Route path = '/ordered' component={Orderd}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
