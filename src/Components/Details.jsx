import React from "react";
import './Details.css';
import { useParams } from "react-router-dom";
import { CartState } from "../Context";

export default function Details() {
    const { products } = CartState()
    const { id } = useParams();
    const product = products.filter((prod) => prod.id === id)
    
    return(
        <>
        <section className="leftside">
        <div className="ldiv">
        <div>User details page {product[id]}</div>
        {/* <div>User details page {id.data.name}</div> */}
        {/* <img src={params.a.otherImages[0]} alt="" className="detailimg"/>
        <img src={params.a.otherImages[1]} className="detailimg"/>
        <img src={params.a.otherImages[2]} alt="" className="detailimg"/>
        <img src={params.a.otherImages[3]} alt="" className="detailimg" /> */}
        </div>
        </section>
        <section className="rightside">
            <div className="rdiv">
            <div className="bold">{product.name}</div>
            <br />
            <div>{product.description}</div>
            <div>{product.finalPrice}</div>
            <div className="rate">{product.strickPrice}</div>
            <div className="orange">{product.discount}</div>
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