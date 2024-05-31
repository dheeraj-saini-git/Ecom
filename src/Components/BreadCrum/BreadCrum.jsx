import React from 'react'
import './BreadCrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

function BreadCrum(props){
  
    return(
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" />
            SHOP <img src={arrow_icon} alt="" />
            {props.product.category}<img src={arrow_icon} alt="" />
            {props.product.name}
          
        </div>
    )
}
export default BreadCrum