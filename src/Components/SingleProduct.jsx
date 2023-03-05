import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const SingleProduct = ({prod}) => {
    const {pathname} = useLocation()
  return (
    <>
        <div>
            <Link to={`${pathname}/details/${prod.id}`}>
                <img src={prod.otherImages[0]} height='220px' alt="" className='img'/>
            </Link>
            <div className='imgdiv1'>
                <p className='imgp1'>{prod.name}</p>
                <p className='imgp2'>{prod.description}</p>
                <span>
                    <span className='imgspan'>Rs.{prod.finalPrice} </span>
                    <span className='imgspan1'>{prod.strickPrice}
                    </span><span className='imgspan2'>{prod.discount}% OFF</span>
                </span>
            </div>
        </div>
    </>
  )
}

export default SingleProduct