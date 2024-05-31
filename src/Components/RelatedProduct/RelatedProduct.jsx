import React from 'react'
import './RelatedProduct.css'
import data_product from '../assets/data'
import Item from '../item/item'
function RelatedProduct(){
    return(
    <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item 
                key={i}
                id ={item.id}
                name={item.name}
                image={item.image}
                new={item.new_price}
                old={item.old_price}
                />
            })}
        </div>
    </div>

    )
}
export default RelatedProduct