import React, {useState} from 'react'
import './Home.css'
import Product from '../components/Product'

 function Home() {
    //  const [product,setProduct] = useState({
    //      id: "1234",
    //      title:"Harry Potter and the Goblet of Fire: The Illustrated Edition",
    //      price: 18.89,
    //      rating: 5,
    //      image:"https://m.media-amazon.com/images/I/71Ih2rWClAL._AC_UY327_FMwebp_QL65_.jpg",
        
    //  }
    //   )
    //  const{id,title,price,rating,image} = product;
    return (
        <div className="home">
           <img className="home_image"
           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
           alt="Home image"
           />
           {/* Product */}
           {/* Product id, title, price,rating,image */}
           <div className="home_row">
           <Product 
           id  = {"1"}
           title ={"Harry Potter and the Goblet of Fire: The Illustrated Edition"}
           price ={18.89}
           rating ={5}
           image ="https://m.media-amazon.com/images/I/71Ih2rWClAL._AC_UY327_FMwebp_QL65_.jpg"
           
           />
            <Product 
            id  = {"2"}
            title ={"Nintendo Switch with Neon Blue and Neon Red Joy‑Con"}
            price ={369.95}
            rating ={5}
            image ="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"

           
           />
           </div>
           <div className="home_row">
           <Product 
            id  = {"3"}
            title ={"Willful Smart Watch for Android Phones and iOS Phones"}
            price ={35.99}
            rating ={3}
            image ="https://m.media-amazon.com/images/I/51oAPLRW9DL._AC_UY327_FMwebp_QL65_.jpg"
           
           />
             <Product 
            id  = {"4"}
            title ={"PUMA Men's Tazon 6 Running Shoe"}
            price ={34.99}
            rating ={5}
            image ="https://m.media-amazon.com/images/I/81HAR8Z+SYL._AC_UL480_FMwebp_QL65_.jpg"
           
           />
            <Product 
            id  = {"5"}
            title ={"Aroma Housewares Digital Rice Grain Cooker"}
            price ={18.89}
            rating ={4}
            image ="https://m.media-amazon.com/images/I/81F74EKURVL._AC_UY327_FMwebp_QL65_.jpg"
           
           />
           </div>
           <div className="home_row">
           <Product 
           id  = {"6"}
           title ={"Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor for Business, 100 Hz"}
           price ={529}
           rating ={4}
           image ="https://m.media-amazon.com/images/I/71qkzkC7bHL._AC_UY327_FMwebp_QL65_.jpg"
           
           />
           </div>
        </div>
    )
}

export default Home;