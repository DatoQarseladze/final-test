import React, { Component } from 'react';



class SearchInput extends Component {
    componentDidMount(){
        console.log(this.props);
    }

    render() { 
        const {searchHandler} = this.props
        return ( 
            <form action=''>
          <input
            type='text'
            name='searchUsername'
            onChange={searchHandler}
          />
        </form>
         );
    }
}
 
export default SearchInput;