import React from "react";
import "./Footer.scss"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrival</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Comapre</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam beatae ipsum error cumque doloribus delectus voluptas consequuntur eligendi ullam quibusdam necessitatibus quaerat debitis officiis nostrum, ut dicta non voluptatem.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore ipsa magni est sequi, provident et, ab recusandae temporibus aspernatur iusto id dolore maiores suscipit! Adipisci aliquid obcaecati reiciendis ad?</span>
                </div>

            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Jithin store</span>
                    <span className="copyright">copyright 2023 reserved</span>
                </div>
                <div className="right">
                    <img src="/img/Payment_Options.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer