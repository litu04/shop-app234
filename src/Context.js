import { createContext, useState, useContext } from "react";
import {data} from './productData'

export const Cart = createContext()
const Context = ({children}) => {
    const [products, setProducts] = useState(data)
    const [cart, setCart] = useState([])
    const [searchData, setSearchData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <Cart.Provider value = {{ cart, setCart, products, setProducts, searchData, setSearchData, searchQuery, setSearchQuery }}> 
                {children}
            </Cart.Provider>
        </>
    )
}

export const CartState = () => {
    return useContext(Cart);
  };

export default Context