import React from "react";
import './Details.css';
import {data} from '../productData'

import { useParams } from "react-router-dom";

export default function Details() {
    const { id } = useParams();
    
    return(
        <>
        <section className="leftside">
        <div className="ldiv">
        <div>User details page {data[id]}</div>
        {/* <div>User details page {id.data.name}</div> */}
        {/* <img src={params.a.otherImages[0]} alt="" className="detailimg"/>
        <img src={params.a.otherImages[1]} className="detailimg"/>
        <img src={params.a.otherImages[2]} alt="" className="detailimg"/>
        <img src={params.a.otherImages[3]} alt="" className="detailimg" /> */}
        </div>
        </section>
        <section className="rightside">
            <div className="rdiv">
            <div className="bold">Dennis Lingo</div>
            <br />
            <div>Men Slim Fit Casual Shirt</div>
            <div>Rs. 554</div>
            <div className="rate">Rs. 1849</div>
            <div className="orange">70%</div>
            <div>Size Chart</div>
            <div className="s">
                <div className="circle">
                <div className="cir">S</div>
            </div>
            <div className="circle">
                <div className="cir">M</div>
            </div>
            <div className="circle">
                <div className="cir">L</div>
            </div>
            <div className="circle">
                <div className="cir">XL</div>
            </div></div>
            </div>
            <br /><br />
            <br /><br /><br /><br />
            <button className="b">Add to Cart</button>
        </section>
        </>
    )
}