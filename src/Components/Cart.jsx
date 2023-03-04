import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom';

export default function Cart() {
    return(
        <>
        <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          {/* you have <span className="total-items-count">{totalItem} </span> items */}
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            {/* <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars> */}
          </div>
        </div>

        <div className="card-total">
          <h3>
            {/* Cart Total : <span>{totalAmount}₹</span> */}
          </h3>
          <button>checkout</button>
          {/* <button className="clear-cart" onClick={clearCart}> */}
            {/* Clear Cart
          </button> */}
        </div>
      </section>
        </>
    )
}