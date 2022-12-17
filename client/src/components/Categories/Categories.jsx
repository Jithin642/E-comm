import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"></img>
                <button>
                    <Link className="link" to="products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://media.istockphoto.com/photos/shopping-woman-picture-id1199014988?b=1&k=20&m=1199014988&s=612x612&w=0&h=EXfJHx3r9H9d5QDTYctD3YK-6Hwtat1aR3Y_hxP6ADs="></img>
                <button>
                    <Link className="link" to="products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg"></img>
                <button>
                    <Link className="link" to="products/1">New season</Link>
                </button>
            </div>
        </div>
        <div className="col col-1">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"></img>
                <button>
                    <Link className="link" to="products/1">men</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://media.istockphoto.com/photos/shopping-woman-picture-id1199014988?b=1&k=20&m=1199014988&s=612x612&w=0&h=EXfJHx3r9H9d5QDTYctD3YK-6Hwtat1aR3Y_hxP6ADs="></img>
                <button>
                    <Link className="link" to="products/1">Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg"></img>
                <button>
                    <Link className="link" to="products/1">shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}
