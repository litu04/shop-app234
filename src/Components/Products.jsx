import React from 'react'
import './Products.css'
import { CartState } from "../Context"
import SingleProduct from './SingleProduct'

export default function Products() {

    const { products, searchQuery, searchData } = CartState()
    
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
                {searchQuery.length !== 0 || searchData.length > 0 ? (
                    searchData.map((prod) => (
                        <SingleProduct prod={prod} key={prod.id} />
                    ))
                ) : (
                    products.map((prod) => (
                        <SingleProduct prod={prod} key={prod.id} />
                    ))
                )}  
            </div>
        </section>
        </>
    )
}