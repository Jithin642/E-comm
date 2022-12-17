import React from 'react'
import "./FeaturedProducts.scss"
import { Card } from '../Card/Card'

export const FeaturedProducts = ({type}) => {
    const data=[
        {
            id:1,
            img:"https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg" ,
            title:"skirt" ,
            oldPrice:20 ,
            price: 18,
            isNew:true,
        },
        {
            id:2,
            img:"https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg" ,
            title:"shirt" ,
            oldPrice:40 ,
            price: 20,
        },
        {
            id:3,
            img:"https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg" ,
            title:"hat" ,
            oldPrice:50 ,
            price: 30,
        },
        {
            id:4,
            img:"https://media.istockphoto.com/photos/shopping-woman-picture-id1199014988?b=1&k=20&m=1199014988&s=612x612&w=0&h=EXfJHx3r9H9d5QDTYctD3YK-6Hwtat1aR3Y_hxP6ADs=" ,
            title: "pant",
            oldPrice:45 ,
            price: 22,
        }
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat eos esse error vero nostrum sequi, rerum cum velit voluptas illum hic architecto impedit accusamus nobis dicta est voluptate? Nam, autem.</p>
        </div>
        <div className="bottom">
            {data.map(item=>
                <Card item={item} key={item.id}/>
            )}
        </div>
    </div>
  )
}
