import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Slider.scss"

export const Slider = () => {

    const [currentSlide,setCurrentSlide]=useState(0);

    const data=[
        "https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg",
        "https://media.istockphoto.com/photos/shopping-woman-picture-id1199014988?b=1&k=20&m=1199014988&s=612x612&w=0&h=EXfJHx3r9H9d5QDTYctD3YK-6Hwtat1aR3Y_hxP6ADs=",
        "https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg"
    ]

    const prevSlide=()=>{
        setCurrentSlide(currentSlide==0 ? 2 : (prev)=> prev-1);
    }

    const nextSlide=()=>{
        setCurrentSlide(currentSlide==2 ? 0 :(prev)=> prev +1);
    }


  return (
    <div className='slider'>
        <div className="container" style ={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]}></img>
            <img src={data[1]} />
            <img src={data[2]} />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon />
            </div>
        </div>
    </div>
  )
}
