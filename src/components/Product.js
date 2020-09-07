import React from 'react'
import './Product.css'
import {useStateValue} from '../StateProvider'


export default function Product({id,title,price,rating,image}) {
    const [{ basket}, dispatch] = useStateValue();
    const addToBasket = () =>{
      //ADD item to basket..
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id,
              title,
              price,
              rating,
              image
          }
      })
    };
    return (
        
        
        <div className="product">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price"> 
            <small>$</small>
            <strong>{price}</strong> </p>
             <div className="product_rating">
                 {
                     Array(rating).fill().map((_) =>(
                         <p className="fa fa-star checked"></p>
                     ))
                 }
             </div>
             </div>
             <img src={image} alt="product image" />
             <button onClick={addToBasket}>Add to basket</button>
  


        </div>
    )
}
