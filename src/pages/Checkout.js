import React from 'react'
import {useStateValue} from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from '../components/CheckoutProduct'
import Subtotal from '../components/Subtotal'

export default function Checkout() {
    const [{ basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4234492668_.jpg" alt="Amazon ad" />
             {basket?.length === 0 ?(
                 <div>
                     <h2>Your Shopping Basket is empty</h2>
                     <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                 </div>
             ) : (
                 <div>
                     <h2 className="checkout_title">Your Shopping Basket</h2>
                    {/* List out all of the checkout products */}
                    {basket.map(item=>(
                     <CheckoutProduct
                     id ={item.id}
                     title ={item.title}
                     image = {item.image}
                     price = {item.price}
                     rating = {item.rating}
                     />
                    ))}

                     </div>)}
             </div>
             {basket.length > 0 &&(
                 <div className="checkout_right">
                     <Subtotal />
                     </div>
             )}
        </div>
    );
}
