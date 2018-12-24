import React , {Component} from 'react'

import {Link} from 'react-router-dom'
class SearchedPro extends Component {

    render(){
      console.log(this.props.info)
        if(this.props.info !=undefined) {
        
        return(<form className="searched__item" >{ 
          this.props.info.map((product)=>
            <div className="searched__item-cont">
              <img
                src={product.url}
                className="searched__item--img"
                alt={`${this.props.info.model}`}
              />
              <h1 className="searched__item--brand">{product.brand}</h1>
              <h2 className="searched__item--model">{product.model}</h2>
              {/* <span className="searched__item--desc">{product.desc}</span> */}
              <span className="searched__item--price">{product.price}</span>
             <button className="searched__item--addto--cart"> Read More...</button>
            </div>
        )}</form>)

        }  else return <div></div>
    }


}

export default SearchedPro;