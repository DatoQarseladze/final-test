import React, { Component } from 'react';
import SearchProduct from "./SearchProduct"
const userURL = "http://localhost:5000/get";




class ProFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "4",
            categoryChoose: false,
            colorChoose: false,
            categoryDate: [],
            color: "",
            priceChoose : false,
            price : "",
            products: [],
            matchProduct: []
        }
    }
    componentDidMount() {
        this.GetProduct();

    }
    handleClick = (e) => {
        this.setState({ category: e.target.id })
        this.setState({ colorChoose: false })
        this.setState({ categoryChoose: true })
    }
    colorClick = (e) => {
        this.setState({ color: e.target.id })
        this.setState({ colorChoose: true })

    }
    priceClick = (e) => {
        this.setState({price : e.target.id})
        this.setState({priceChoose : true})
    }
   
    GetProduct = () => {
        fetch(userURL)
            .then(products => products.json())
            .then(products => {
                this.setState({ products })

            })
            .catch(err => console.log(err));


    }
    

    render() {
        return (
            <div className="proFilter">
                <div className="proFilterDetails">
                    {/* <div className="proFilter--sidebar"> */}
                        <div className="proFilter-categories">
                            <h4>CATEGORIES</h4>
                            <div className="proFilter-categories--menu">
                                <div id="1" onClick={this.handleClick} className="menu--cate">Headphones</div>
                                <div id="2" onClick={this.handleClick} className="menu--cate">Phones</div>
                                <div id="3" onClick={this.handleClick} className="menu--cate">Cameras</div>
                                <div id="4" onClick={this.handleClick} className="menu--cate">Laptops</div>
                            </div>
                        </div>
        
                        <div className="proFilter-color">
                            <h4>Colors</h4>
                            <div className="proFilter-color--menu">
                                <div className="color1" id="1" onClick={this.colorClick}>White</div>
                                <div className="color2" id="2" onClick={this.colorClick}>Blue</div>
                                <div className="color3" id="3" onClick={this.colorClick}>Green</div>
                                <div className="color4" id="4" onClick={this.colorClick}>Black</div>
                            </div>
                        </div>
                    {/* </div> */}

                    <div className="proFilter-color">
                            <h4>Price</h4>
                            <div className="proFilter-price--menu">
                                <div className="price1" id="1" onClick={this.priceClick}>0-500</div>
                                <div className="price2" id="2" onClick={this.priceClick}>500-1000</div>
                                <div className="price3" id="3" onClick={this.priceClick}>1000-2000</div>
                                <div className="price4" id="4" onClick={this.priceClick}>2000+</div>
                            </div>
                        </div>
                    </div> 
                     {/* <div className="proFilter--img"> */}
                        <div className="searchProduct">
                            <div><SearchProduct onSearch={this.state} /> </div>
                        {/* </div> */}

                    </div> 
                </div>
            


        );
    }
}

export default ProFilter;