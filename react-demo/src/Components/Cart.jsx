import React, { Component } from 'react'
// import { l } from '../router/ItemTemplate';
const dir = "http://localhost:5000/user"

if(localStorage.getItem('authorized')!=null || localStorage.getItem('authorized')!= undefined ){
   var l = localStorage.getItem("authorized").substr(7,localStorage.getItem("authorized").indexOf(',')-8);
}
console.log(l)
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            cart: []
        }

    }
    componentDidMount() {
        this.getUsers();
    }
    getUsers() {
        fetch(dir)
            .then(user => user.json())
            .then(user => {
                this.setState({ user });
            })
            .catch(err => console.log(err))
    }
    getCart() {
        let user = this.state.user.find(user => user.id === '' + l);
        console.log(user);
        let arr = [];
        arr.push(user.onCart);
        this.setState({ cart: arr })
        return this.state.cart
    }
    render() {
        if (this.state.user.length != 0) {
            let user = this.state.user.find(user => user.id === '' + l);
            console.log(user);
            let arr = [];
            arr.push(user.onCart);

            return (

                <ul className="cart-cont">{arr[0].map((product, index) => <li className="cart-cont-li" key={index + 0}><div className="cart-cont-img" key={index + 5}><p className="cart-cont-brand">{product.brand} {product.model}</p><img src={product.url}></img></div>
                
                
                    {/* <p className="cart-cont-price" key={index + 3}>{product.price}</p><p className="cart-cont-desc" key={index + 4}>{product.desc}</p> */}
                </li>

                )}</ul>
            )
        } else return (<div></div>)
    }
}

export default Cart;