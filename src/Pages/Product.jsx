import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../Context/ShopContext'
import BreadCrum from '../Components/BreadCrum/BreadCrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'
function Product(){
    const product_id = useParams()
    const {all_products} = useContext(ShopContext)
    const product = all_products.find((e)=>e.id===Number(product_id.productId))

    return(
        <div>
        <BreadCrum product={product}/>
        <ProductDisplay product={product} key={product.id}/>
        <DescriptionBox />
        <RelatedProduct />
        </div>
    )
}

export default Product ;