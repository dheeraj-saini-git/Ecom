import React from 'react'
import './item.css'
import { Link } from 'react-router-dom';
function Item(props){
    return(
        <div className='item'>
           <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="image" /></Link>
            <p>{props.name}</p>
            <div className="item-price">
                <div className="new-price">${props.new}</div>
                <div className="old-price">${props.old}</div>
            </div>
        </div>
    )
}
export default Item ;