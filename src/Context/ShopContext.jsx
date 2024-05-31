import React,{createContext,useState} from 'react'
import all_products from '../Components/assets/all_product'

const ShopContext = createContext()

function getDefaultCard(){
        let cart = {}
        for (let index = 0; index < all_products.length; index++) {
            cart[index] = 0; 
        }
        return cart;
    }

const ShopContextProvider = (props)=>{

    const [cartItems,setItems] = useState(getDefaultCard)
    
    function addToCart(itemId){
        setItems(
            (prev)=>({...prev,[itemId]:prev[itemId]+1})
        )
    
    }
    function removeFromCart(itemId){
        setItems(
            (prev)=>({...prev,[itemId]:prev[itemId]-1})
        )
    }
    function getTotalCartAmount(){
        let totalAmount = 0 ;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_products.find((e)=>e.id===Number(item))
                totalAmount+= itemInfo.new_price*cartItems[item]
            }
        }
        return totalAmount
    }
    function getTotalCartItems(){
        let totalItem = 0 ;
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                totalItem+=cartItems[item] 
            }
        }
        return totalItem
    }
    const contextValue = {all_products,cartItems,getTotalCartItems,getTotalCartAmount,addToCart,removeFromCart}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
export {ShopContext}



