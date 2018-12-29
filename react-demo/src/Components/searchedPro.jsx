import React , {Component} from 'react'

import {Link} from 'react-router-dom'
class SearchedPro extends Component {

    render(){
      function convertCat(x){
        if(x==1){
          return "cameras"
        }
        if(x==2){
          return "phones"
        }
        if(x==3){
          return "headphones"
        }
        if(x==4){
          return "laptops"
        }
      }
      console.log(this.props.info)
        if(this.props.info !=undefined) {
        console.log(this.props.cat)
        return(<ul className="items__wrapper" >{ 
          this.props.info.map((product,index)=>
            <li className="item" key={index}>
            <a className="item--div" href={"/" + convertCat(this.props.cat.charAt(index))+'/'+product.id}  >
              <img
                src={product.url}
                className="item--img"
                alt={`${this.props.info.model}`}
              />
              <div className="item--spec">
              <h1 className="item--brand">{product.brand}</h1>
              <h2 className="item--name">{product.model}</h2>
              {/* <span className="searched__item--desc">{product.desc}</span> */}
              <p className="item--price">{product.price}</p>
            </div> <button className="item--btn"> Read More...</button></a>
            </li>
        )}</ul>)

        }  else return <div></div>
    }


}

export default SearchedPro;