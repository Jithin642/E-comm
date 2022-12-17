import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="img/flag.jpg" height={20} width={20}/>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>IND</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                        
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Children</Link>
                   
                    </div>
                </div>
                <div className="center">
                <div>
                    <Link className="link" to="/">Jithin's ShopSite</Link>
                </div>
                </div>
               
                <div className="right">
                <div className="items">
                    <Link className="link" to="/">About</Link>
                </div>
                <div className="items">
                    <Link className="link" to="/">Homepage</Link>
                </div>
                <div className="items">
                    <Link className="link" to="/">Contact</Link>
                </div>
                <div className="items">
                    <Link className="link" to="/">stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonOutlineIcon />
                    <FavoriteBorderIcon />
                    <div className="carticon">
                        <ShoppingCartIcon />
                        <span>0</span>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar