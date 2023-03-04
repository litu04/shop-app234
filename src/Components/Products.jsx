import React from 'react'
import './Products.css'
import { Link } from "react-router-dom"
import {data} from '../productData'

export default function Products() {
    






    return(
        <>
        <section>
            <div className='sortby'>
            <label for="sortby">Sort by:-</label>
                <select name="sortby" id="sortby">
                    <option value="0">What's New</option>
                    <option value="1">Popularity</option>
                    <option value="2">Better Discount</option>
                    <option value="3">Customer Rating</option>
                    <option value="4">Recommended</option>
                </select>
            </div>

            <div className='img1'>
                    {
                     data.map((data,i) => (
                        <div key={i}>
                            <Link to={`/Details/${i}`}>
                    <img src={data.otherImages[0]} height='220px' alt="" className='img'/>
                    </Link>
                    <div className='imgdiv1'>
                        <p className='imgp1'>{data.name}</p>
                        <p className='imgp2'>{data.description}</p>
                        <span><span className='imgspan'>Rs.{data.finalPrice} </span><span className='imgspan1'>{data.strickPrice}</span><span className='imgspan2'>{data.discount}% OFF</span></span>
                    </div>
                        </div>
                     ))   
                    }
                    
            </div>
        </section>
        </>
    )
}