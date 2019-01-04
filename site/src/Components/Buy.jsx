import React , {Component} from "react"
import Zoom from "react-img-zoom";
import {Redirect} from 'react-router-dom'

class Buy extends Component{
    constructor(props) {
        super(props);
        this.state = {
          value : 1,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    priceConvert(x){
        return Number(x.substr(1,x.length));
    }

    handleChange(e) {
        this.setState({value: e.target.value});
      }
    boy(a,b){
        console.log(a)
        if(a > this.priceConvert(b)){
            console.log(this.priceConvert(b));
            let k = a-this.priceConvert(b);
            let arr = this.props.cart[0];
            let user = this.props.user;
            let arrU = this.props.cart[0][this.props.element];
            let qua = this.props.cart[0][this.props.element].quantity-1;
            arr.splice(this.props.element,1)
            fetch("http://localhost:5000/bought",{
                method : "POST",
                headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
                },
                body : JSON.stringify({k,arr,arrU,qua,user})
  })
} else {
    
}
    }
        
    render(){
        var x = document.getElementsByClassName("BuyP");
        var y = document.getElementsByClassName("content11 clearfix")
      
        
        if(this.props.element !== ''){
            console.log(this.props.cart[0][this.props.element].price)
            console.log(this.props.user.balance)
            // this.boy(this.props.user.balance,this.props.cart[0][this.props.element].price)
        
            if (x['0'].style.display === "") {
                x['0'].style.display = "block";
            } else if (x['0'].style.display === "none") {
                x['0'].style.display = "block";
            } else {
              x['0'].style.display = "none";
            }
            y['0'].style.display = 'none';
        // console.log(this.props.element)
        return (<div className="BuyP"> 
    
        <div className="clicked__item--wrapper">
        <div className="clicked__item">
          {this.props.cart[0][this.props.element].url && (
            <div
              className="clicked__item--img"
              // height={this.state.imgheight}
              // width={this.state.imgwidth}
            >
              <Zoom
                // className="clicked__item--img"
                img={this.props.cart[0][this.props.element].url}
                zoomScale={2}
                height={400}
                width={400}
                transitionTime={0.5}
              />
            </div>
          )}
          <h1 className="clicked__item--brand">{this.props.cart[0][this.props.element].brand}</h1>
          <h2 className="clicked__item--model">{this.props.cart[0][this.props.element].model}</h2>
          <span className="clicked__item--price">{this.props.cart[0][this.props.element].price}</span>
          {(this.props.cart[0][this.props.element].quantity >= 5 && (
            <span className="clicked__item--quantity">
              In Stock
            </span>
          )) || (
            <span className="clicked__item--quantity" >
              Left: {this.props.cart[0][this.props.element].quantity}
            </span>
          )}
          <span className="clicked__item--desc">{this.props.cart[0][this.props.element].desc}</span>
          <button className="clicked__item--addto--cart" onClick={()=>{this.boy(this.props.user.balance,this.props.cart[0][this.props.element].price)}}>Buy Now</button>
        </div></div> 
        </div> ) }else return (<div className="BuyP"></div>)
    }
}

export default Buy