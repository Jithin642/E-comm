import React from "react";
import { useState } from "react";
import "./Product.scss"

const Product=()=>{
    const [selectedImg, setSelectedImg]=useState(0)

    const images=["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfCbyF7xiclVEDDt2eL1x6Kj4Z-szikEwT93bSD12ktHTQvI-t8rutPFIxhHTWk157RwObBFomhu90MFP36JACAKymRuYfHV91uFNaGSS0T1FsRJcPOmMGpQ&usqp=CAY", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSm6UC5e_yk94JNJLzItHSWMLaYAZT7d8fXFwygwCo2gzI5MtyVHg6U1N_YCU-GOxxy9GJw1fI1wzCPrMf1kPzdo0Uyk57zZ_kcsUarVWU&usqp=CAE"];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={(e)=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={(e)=>setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt=""/>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Product