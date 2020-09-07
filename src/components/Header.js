import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'
import {auth} from '../firebase'

function Header() {

    const [{ basket,user}, dispatch] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    };
    return (
        <nav className="header">
            <Link to="/">
            <p className="header_text">CHUKS</p>
            {/* Logo on the left -> img */}
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Logo"/> 
            </Link>
            
            {/* Search box */}
            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
            </div>
            {/* Three links */}
            <div className="header_nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                 <span className="header_optionLineOne">Hello {user?.email}</span>
                 <span className="header_optionLineTwo">{user? 'Sign Out': 'Sign In'}</span>
                 </div>
                </Link>
               
                {/* 2nd Link */}
                <Link className="header_link" to="/">
                    <div className="header_option">
                 <span className="header_optionLineOne">Returns</span>
                 <span className="header_optionLineTwo">& Orders</span>
                 </div>
                </Link>

                {/* 3rd Link */}
                <Link className="header_link" to="/">
                    <div className="header_option">
                 <span className="header_optionLineOne">Your</span>
                 <span className="header_optionLineTwo">Prime</span>
                 </div>
                </Link>

                {/* 4th Link */}
               <Link className="header_link" to="/checkout">
                   <div className="header_optionBasket">
                       {/* Basket icon */}
                       <ShoppingBasketIcon />
                       {/* Number of items inthe basket */}
                       <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                   </div>
               </Link>
            </div>
        </nav>
        
    )
}

export default Header;