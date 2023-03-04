import React from 'react'
import './Section.css'

export default function Section() {
    return(
        <>
        <section className='container1'>
            
            <div >
                <div className='gender bold'>Gender:-</div>
                <div className='radio'><input type="radio" name='radio'/> MEN</div>
                <div className='radio'><input type="radio" name='radio'/> WOMEN</div>
            </div>
            <br />
            <div>
                <div className='categories bold'>Categories:-</div>
                <div className='check'><input type="checkbox" /> White</div>
                <div className='check'><input type="checkbox" /> Folded Sleeves</div>
            </div>
        </section>
        </>
    )
}