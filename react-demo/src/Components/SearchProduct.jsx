import React ,{Component} from "react"


export default class SearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          match : []
        }
    }

    convertCat(x){
        if(x===1){
            return 'HEADPHONES'
        }
        if(x===2){
            return 'PHONES'
        }
        if(x===3){
            return 'CAMERAS'
        }
        if(x===4){
            return 'LAPTOPS'
        }
    }
    convertColor(x){
        if(x===1){
            return 'white'
        }
        if(x===2){
            return 'Blue'
        }
        if(x===3){
            return 'Green'
        }
        if(x===4){
            return 'black'
        }
    }
    priceConvert (x) {
        let price = {
            min : 0,
            max : 0 
        }
        if(x===1){
            price.min = 0;
            price.max = 500;
        }
        if(x===2){
            price.min = 501;
            price.max = 1000;
        }
        if(x===3){
            price.min = 1001;
            price.max = 2000;
        }
        if(x===4){
            price.min = 2001;
        }
        return price;
    }
    componentDidMount(){
        // findProduct(arr,colorBool,priceBool,color,price,category,match);
    }
    findProduct(arr,colorBool,priceBool,color,price,category){
       let match = [];
        // console.log(arr[category].length)
        if(colorBool === false && priceBool === false){
        //   console.log(arr[category].length)  
        for(let i = 0 ; i<arr[category].length;i++){
           match.push(arr[category][i]);
        }
            
        } 
        if(colorBool !==false && priceBool === false){
            for(let i = 0 ; i<arr[category].length;i++){
                if(arr[category][i].color === color){
                  match.push(arr[category][i]);
                } 
            }
           
        }else if(colorBool ===false && priceBool !== false){
            for(let i = 0 ; i<arr[category].length;i++){
                if(Number(arr[category][i].price.substr(1,arr[category][i].price.length)) >= price.min && Number(arr[category][i].price.substr(1,arr[category][i].price.length)) <=price.max){
                    match.push(arr[category][i]);
                }
            }
        } else if(colorBool === true && priceBool === true){
            
            for(let i = 0 ; i<arr[category].length;i++){
                // console.log(Number(arr[category][i].price.substr(1)))
            if(Number(arr[category][i].price.substr(1,arr[category][i].price.length)) >= price.min && Number(arr[category][i].price.substr(1,arr[category][i].price.length)) <=price.max && arr[category][i].color == color){
                match.push(arr[category][i])
            }
        }
    }
    return match;
    }
    render(){
        if(this.props.onSearch.products.length != 0){
        let k = this.props.onSearch.products;
        let price = this.priceConvert(this.props.onSearch.price);
        let cb = this.props.onSearch.colorChoose;
        let pb = this.props.onSearch.priceChoose;
        let c = this.convertColor(this.props.onSearch.color);
        let cat = this.convertCat(this.props.onSearch.category);

        console.log(cat);
        console.log(cb,pb)
        console.log(this.props.onSearch)
        // console.log(k.color,price);
        // console.log(cat)
        // console.log(k)
        // console.log(cb)
        // console.log(pb);
        console.log(this.findProduct(k,cb,pb,c,price,cat))
        return (<div className="filteredPro">{this.findProduct(k,cb,pb,c,price,cat).map((product,index)=><div className="filter-son" key={index}> <img src = {product.url} /><h2>{product.brand}</h2><h6>{product.model}</h6><h4>{product.price}</h4><button className="filterSonB"> Read More...</button></div>)}</div>)
        } else return (<div></div>)
    }
}
