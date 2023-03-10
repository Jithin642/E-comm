import React from 'react'
import{ Link} from "react-router-dom";
import "./Card.scss";

export const Card = ({item}) => {
  return (
    <Link className='link' to ={`/products/${item.id}`}>
        <div className="card">
            <div className="image">
                {item.isNew && <span>New Season</span>}
                <img src={item.img} className="mainImg" /> 
                <img src={item.img2} alt="no image" className="secondImg" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
         
    </Link>
    
  )
}
