import React from 'react'
import {useStateValue} from '../StateProvider'
import './CheckoutProduct.css'


export default function CheckoutProduct({id,title,price,rating,image}) {
    const [{ basket}, dispatch] = useStateValue();

    const removeFromBasket =() =>{
     //Remove item from basket
     dispatch({
         type: "REMOVE_FROM_BASKET",
         id:id,
     });
    }
    return (
        <div className="checkoutProduct">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img className="checkoutProduct_image"src={image} alt="checkout image"/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price"> 
                     <small>$</small>
                     <strong>{price}</strong> </p>
                     <div className="checkoutProduct_rating">
                 {
                     Array(rating).fill().map((_) =>(
                         <p className="fa fa-star checked"></p>
                     ))
                 }
                      </div>
                      <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}
