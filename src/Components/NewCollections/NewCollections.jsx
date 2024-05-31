import React from 'react'
import './NewCollections.css'
import newCollection from '../assets/new_collections'
import Item from '../item/item'
function NewCollections(){
    return(
        <div className='newCollection'>
            <h2>NEW COLLECTIONS</h2>
            <hr />
            <div className='collections'>
               {newCollection.map((item,i)=>{
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

export default NewCollections
