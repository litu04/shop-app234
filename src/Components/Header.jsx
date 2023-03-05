import React, { useEffect} from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { CartState } from '../Context';

export default function Header() {
  const { products, searchData, setSearchData, searchQuery, setSearchQuery } = CartState()
  useEffect(() => {
    if (searchQuery.length > 0) {
      setSearchData(products.filter((data) => {
        return Object.values(data).join("").toLowerCase().includes(searchQuery.toLowerCase())
      }))
    }
    console.log("HI--- ", searchData);
  }, [searchQuery])

  return (
    <>
      <header className="container">
        <nav className="flex space-between">
          <div className="left flex items-center">
            <Link to="/">
              <img src="data:image/png;base64,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" alt="myntra-clone" className="icon-holder" />
            </Link>
            <div className="category">
              <ul className="flex items-center justify-center uppercase bold">
                <li>Men</li>
                <li>Women</li>
                <li>Kid</li>
              </ul>
            </div>
          </div>
          <div className="middle flex items-center">
            <input className="search-input" placeholder="search your product here" type="text" onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <div className="right flex items-center">
            <a href="">
              <button className="cart-btn">
                <Link to='/Cart'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1u85zAVAiAqiFatB_buLWig9SUO7UHsLeQ&usqp=CAU" alt="cart" className="svg" />
                  <p>7</p>
                </Link>
              </button>
            </a>
          </div>
        </nav>
        <br />
        <hr />
      </header>
    </>
  )
}