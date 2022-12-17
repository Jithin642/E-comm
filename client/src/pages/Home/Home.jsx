import React from "react";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { Slider } from "../../components/Slider/Slider";
import './Home.scss'

const Home=()=>{
    return(
        <div>
            <Slider />
            <FeaturedProducts type="Featured"/>
            <FeaturedProducts type="Trending"/>
        </div>
    )
}

export default Home