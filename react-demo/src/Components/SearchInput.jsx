import React, { Component } from 'react';
// import UserData from '../db/users.json'



class SearchInput extends Component {
    // constructor (props) {
    //     super(props)
    //   }

    componentDidMount(){
        console.log(this.props);
    }
   
    //   searchHandler = e => {
    //     let variable = e.target.value
    //     console.log(variable);
    //     this.setState({ term: variable })
    //   }
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