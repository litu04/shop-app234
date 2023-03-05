import React, { useEffect, useState } from 'react'
import './Section.css'
import { gender, Categories } from "../config/productConfig"
import { CartState } from '../Context'

export default function Section() {
    const [selectedGender, setSelectedGender] = useState('')
    const [selectedcategories, setSelectedCategories] = useState([])
    // const [filterProducts, setFilterProducts] = useState('')
    const getValues = (filterValue) =>  selectedGender === filterValue
    // const getCheckedValues = (val) => {
    //     const s = selectedcategories?.some((e) => {
    //         return e.value === val
    //     })
    //     return s
    // }
    const handleRadioBtn = (e) => {
        setSelectedGender(e.target.value)   
    }
    console.log("selectedcategories--> ", selectedcategories)
    const handleCheckedItems = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSelectedCategories([...selectedcategories, value])
        } else {
            setSelectedCategories(selectedcategories.filter((val) => val !== value))
        }
    }
    const { setSearchData, products } = CartState()
    useEffect(() => {
        selectedGender.length > 0 && setSearchData(products.filter((product) => product.gender === selectedGender))
        if (selectedcategories.length > 0) {
            setSearchData(products.filter((prod) => {
                return selectedcategories.includes(prod.folded) || selectedcategories.includes(prod.link)
            }))
        }
    }, [selectedGender,selectedcategories])
    return(
        <>
        <section className='container1'>
            
            <div >
                <div className='gender bold'>Gender:-</div>
                { gender.map((gen) => (
                    <div key={gen.value} className='radio'><input type="radio" name='gender' value={gen.value} checked={getValues(gen.value)} onChange={(e) => handleRadioBtn(e)}/>{gen.label}</div>
                ))}
            </div>
            <br />
            <div>
                <div className='categories bold'>Categories:-</div>
                { Categories.map((cat) => (
                    <div key={cat.value} className='check'><input type="checkbox" name='category' value={cat.value} onChange={(e) => { handleCheckedItems(e) }} />{cat.label}</div>
                ))}
            </div>
        </section>
        </>
    )
}