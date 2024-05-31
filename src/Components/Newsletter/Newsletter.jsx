import React from 'react'
import './Newsletter.css'
function Newsletter(){
    return(
        <div className='newsletter'>
            <h2>Get Exclusive Offers On Your Email</h2>
            <p>Subscribe to our newsletter to get daily updates</p>
            <div className='input'>
                <input type="text" placeholder='Your Email id' />
                <button>Subscribe</button> 
            </div>
        </div>
    )
}

export default Newsletter