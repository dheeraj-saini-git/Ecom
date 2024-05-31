import React,{useContext} from 'react'
import './css/ShopCategory.css'
// import all_products from '../Components/assets/all_product.js'
import {ShopContext} from '../Context/ShopContext.jsx'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Item from '../Components/item/item'

function ShopCategory(props){
   const {all_products} = useContext(ShopContext)
    return(
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="image" />
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='shop-category-sort'>
                Sort by <img src={dropdown_icon} alt="" />
            </div>
    
            </div>
            
            <div className="shop-category-products">
            {all_products.map((item,i)=>{
                if(props.category==item.category){
                    return <Item 
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new={item.new_price}
                    old={item.old_price}
                    />
                }else{
                    return (
                        null
                    )
                }
                })}
            </div>

            <div className="shopcategory-loadmore">
                <p>Load more</p>
            </div>
        </div>
    )
}

export default ShopCategory ;