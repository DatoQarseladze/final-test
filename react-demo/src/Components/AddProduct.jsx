import React, {Component} from 'react'


export default class AddProduct extends Component {

 render () {
  return (
    <div className = 'forPro'>
      <form
        className='addProduct'
        action='http://localhost:5000/products'
        method='POST'
      >
      <div className="proCont">
        <p>
            <label>
                <input
                type="radio"
                name="cat"
                value="HEADPHONES"
                ></input>
                <img src="http://icons.iconarchive.com/icons/flat-icons.com/flat/256/Headphone-icon.png" alt=''></img>
            </label>
            </p>
            <p>
            <label>
                <input
                type="radio"
                name="cat"
                value="PHONES"
                ></input>
                <img src="http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Old-Mobile-icon.png" alt=''></img>
            </label>
            
            </p>
            <p>
            <label>
                <input
                type="radio"
                name="cat"
                value="LAPTOPS"
                ></input>
                <img src="http://download.seaicons.com/icons/designbolts/free-multimedia/1024/TV-icon.png" alt=''></img>
            </label></p>
            <p>
            <label>
                <input
                type="radio"
                name="cat"
                value="CAMERAS"
                ></input>
                <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-f4bb4b5840cd6e5f063c1e90b1b29da9-battery.png" alt=''></img>
            </label>
   </p></div>
        <label>
          <input
            className='product-input'
            type='text'
            placeholder='BRAND'
            name='brand'
            required
          />
        </label>
        <label>
          <input
            className='product-input'
            type='text'
            placeholder='MODEL'
            name='model'
            required
          />
        </label>
        <label>
          <input
            className='product-input'
            type='text'
            placeholder='PRICE'
            name='price'
            required
          />
        </label>
        <label>
          <input
            className='product-input'
            type='text'
            placeholder='URL'
            name='url'
            required
          />
        </label>
        <label>
          <input
            className='product-input'

            type='text'
            placeholder='COLOR'
            name='color'
            required
          />
        </label>
        <label>
          <input
            className='product-input'
  
            type='text'
            placeholder='DESC'
            name='desc'
            required
          />
        </label>
        <label>
          <input
            className='product-input'
            type='number'
            placeholder='ID'
            name='id'
            required
          />
        </label>
        
        <button 
        className='product-button'
     
        >add Product</button>
      </form>
    </div>
  )
 }
 
}
