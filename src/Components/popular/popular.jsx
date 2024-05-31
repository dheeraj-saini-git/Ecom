import React from 'react'
import './popular.css'
import data_products from '../assets/data'
import Item from '../item/item'
function Popular(){
    return(
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr /> 
            <div className="popular-item">
                {data_products.map((item,i)=>{
                    return <Item 
                    key={i}
                    id={item.id}
                    name = {item.name}
                    image = {item.image}
                    new = {item.new_price}
                    old = {item.old_price}
                    />
                })}
            </div>
        </div>
    )
}

export default Popular;