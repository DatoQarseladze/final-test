import React, { Component } from "react";
import  $ from 'jquery'
import "../user.css"
import SearchedPro from './searchedPro'
const dir = "http://localhost:5000/get"
let k = 1;
let save = '';
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: [],
            query : 'Apple',
        }
    }
    componentDidMount() {
        this.getProduct();
        
        
    $("#inpt_search").on('focus', function () {
        $(this).parent('label').addClass('active');
    });
    
    $("#inpt_search").on('blur', function () {
        if($(this).val().length == 0)
            $(this).parent('label').removeClass('active');
    });
    }

    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
      }
     
    getProduct() {
        fetch(dir)
            .then(product => product.json())
            .then(product => {
                this.setState({ product });
            })
            .catch(err => console.log(err))
    }
    
    getSearchedProduct(x,arr){
        let match = [];
        save = '';
        for(let i = 0;i<4;i++){
            if(i==0) {
                for(let j = 0;j<arr['CAMERAS'].length;j++){
                    if(x == arr['CAMERAS'][j].brand || x == arr['CAMERAS'][j].model) {
                        match.push(arr['CAMERAS'][j]);
                        save = save+1;
                    }
                }
               
            }
            if(i==1) {
                for(let j = 0;j<arr['PHONES'].length;j++){
                    if(x == arr['PHONES'][j].brand || x == arr['PHONES'][j].model) {
                       match.push(arr['PHONES'][j]);
                       save = save+2;
                    }
                }
              
            }
            if(i==2) {
                for(let j = 0;j<arr['HEADPHONES'].length;j++){
                    if(x == arr['HEADPHONES'][j].brand || x == arr['HEADPHONES'][j].model) {
                        match.push(arr['HEADPHONES'][j]);
                        save = save+3;
                    }
                }
                
            }
            if(i==3) {
                for(let j = 0;j<arr['LAPTOPS'].length;j++){
                    if(x == arr['LAPTOPS'][j].brand || x == arr['LAPTOPS'][j].model) {
                        match.push(arr['LAPTOPS'][j]);
                        save = save+4;
                    }
                }
                
            }
        }
        if(match.length!=0){
            console.log(match)
            return match
        
        }
        
    }

    render() {
        if(this.state.product.length != 0 ) {
            // console.log(this.state.product)
            
        return (<div>
            <div className="cntr">
                <div className="cntr-innr">
                    <label className="search1" htmlFor="inpt_search">
                        <input id="inpt_search" type="text" maxLength={15} ref={input => this.search = input}
         onChange={this.handleInputChange}/>
                    </label>
                </div>
            </div>
            <SearchedPro info={this.getSearchedProduct(this.state.query,this.state.product)} cat = {save}/>
            </div>)
        } else {
            return (<div>{()=>{if(k == 1){window.location.reload();k++;}}}</div>)}
        } 

}

export default Search;