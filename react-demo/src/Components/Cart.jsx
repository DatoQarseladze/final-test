import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router-dom'
// import { l } from '../router/ItemTemplate';
import Buy from '../Components/Buy'
const dir = "http://localhost:5000/user"

if (localStorage.getItem('authorized') != null || localStorage.getItem('authorized') != undefined) {
    var l = localStorage.getItem("authorized").substr(7, localStorage.getItem("authorized").indexOf(',') - 8);
}
console.log(l)
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            cart: [],
            pro:'' ,
        }

    }
    componentDidMount() {
        this.getUsers();
    }
    handleClick = (e) => {
        this.setState({ pro : e.target.id })
    }
    getUsers() {
        fetch(dir)
            .then(user => user.json())
            .then(user => {
                this.setState({ user });
            })
            .catch(err => console.log(err))
    }
    // getCart() {
    //     let user = this.state.user.find(user => user.id === '' + l);
    //     console.log(user);
    //     let arr = [];
    //     arr.push(user.onCart);
    //     this.setState({ cart: arr })
    //     return this.state.cart
    // }
    render() {
        if (this.state.user.length != 0) {
            let user = this.state.user.find(user => user.id === '' + l);
            console.log(user);
            let arr = [];
            arr.push(user.onCart);
                

            return (
                <div>
                <div className="content11 clearfix">{arr[0].map((product, index) =><div className="cube-container"> <div className="photo-cube" key={index + 0}>
                <img src={product.url} className="front-photo"></img>
                <div className="back-photo photo-desc" key={index + 5}><h6 className="cart-cont-brand">{product.brand} {product.model}</h6> <h6 className="front-price">{product.price}</h6>
            <button className="cube-button" id={index} onClick={this.handleClick}>Buy Now</button></div>
                <img src={product.url} className="left-photo"></img>
                <img src={product.url} className="right-photo"></img>

                    {/* <p className="cart-cont-price" key={index + 3}>{product.price}</p><p className="cart-cont-desc" key={index + 4}>{product.desc}</p> */}
                </div>
                </div>
                

                )}  
                </div>
                <div><Buy element={this.state.pro} cart={arr} user={user}className="BuyP" ></Buy></div>
                <Link to='/'><button type="button" className="get-back btn btn-dark">Get Back</button></Link>
                </div>
                
            )
            
        } else return (<div className="mm"></div>)
    }
}

export default Cart;