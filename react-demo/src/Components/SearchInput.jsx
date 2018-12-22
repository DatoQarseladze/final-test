import React, { Component } from 'react';



class SearchInput extends Component {
    componentDidMount(){
        console.log(this.props);
    }

    render() { 
        const {searchHandler} = this.props
        return (
            <div  className='searchInputUser'>
            <form action=''>
          <input
            type='text'
            name='searchUsername'
            onChange={searchHandler}
          />
        </form>
        </div> 
         );
    }
}
 
export default SearchInput;