import React from 'react'
import "../css/support.css";

const Support = () => {
  return (
    <div className='support-container'>
    
      <section class='support-test'>
        <div class='support-header' />
        <div class='support-text'>
          <h3>We are here to help!</h3>
        </div>
      </section>

      <div className='help-section'>
        <div className='get-started help-section-item'>
          <img src='/img/getstarted.png' alt='' />
          <div className='help-section-text'>
            <h2>Get Started</h2>
            <ul>
                <li>How to start</li>
                <li>How to start</li>
            </ul>
       
          </div>
        </div>
        <div className='orders help-section-item'>
          <img src='/img/orders.png' alt='' />
          <div className='help-section-text'>
            <h2>Orders</h2>
            <ul>
                <li>Track packages</li>
                <li>Edit or cancel orders</li>
            </ul>
          </div>
        </div>
        <div className='return-refunds help-section-item'>
          <img src='/img/return.png' alt='' />
          <div className='help-section-text'>
            <h2>Returns</h2>
            <ul>
                <li>Return or exchange item</li>
                <li>Print return mailing labels</li>
            </ul>
          </div>
        </div>
        <div className='account-settings help-section-item'>
          <img src='/img/account.png' alt='' />
          <div className='help-section-text'>
            <h2>Get Started</h2>
            <ul>
                <li>Change email or password</li>
                <li>Update login information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
