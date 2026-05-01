import React, { useEffect, useState } from 'react'

import SortIcon from '@mui/icons-material/Sort';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import './index.css'
import ProductItem from '../ProductItem';
import { ProductService } from '../../services/ProductService';
import { ApiPaths } from '../../services/ApiPaths';

// const products = [
//   {
//     "name": "Mens Formula",
//     "description": "Men’s formula scents provide tailored, long-lasting fragrances that enhance presence, confidence, and freshness, with options ranging from colognes and body sprays to premium car air fresheners.",
//     "poster": "https://img.freepik.com/free-vector/mens-shaving-cosmetics-realistic-composition_1284-22831.jpg",
//     "rating": 4.5,
//     "price": "420.49",
//     "advertise_video": "QGDCPekNBfI",
//     "id": "1"
//   },
//   {
//     "name": "Skincare",
//     "description": "Skincare involves maintaining and enhancing the health of your skin through daily routines and products, tailored to your individual skin type and concerns.",
//     "poster": "https://img.freepik.com/premium-photo/skincare-product-mockup_1243992-13157.jpg",
//     "rating": 4.9,
//     "price": "961.89",
//     "advertise_video": "1Idbmo-cFNI",
//     "id": "2"
//   },
// ]

const sortByOptions = [
  {
    displayText: "(Low-High)",
    sortId: 'LOW-HIGH'
  },
  {
    displayText: "(High-Low)",
    sortId: 'HIGH-LOW'
  },
]

function Products() {

  const [activeSort, setActiveSort] = useState(sortByOptions[0].sortId)
  const [products, setProducts] = useState([])

  const handleOnChangeSort = (event) => {
    const sortingId = event.target.value
    setActiveSort(sortingId)
  }

  const getProducts = async () => {
     try {
      const res = await ProductService.getProducts(ApiPaths.getProdcutsPath)
      if (res.status === 200) {
        console.log(res.data)
        setProducts(res.data)
      }
     }catch (error) {
      console.log("api error", error)
     }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='container-fluid p-4'>
      <div className='row'>
        <div className="col-12 d-flex flex-row align-items-center justify-content-between">
          <h3>Products</h3>
          <div className='sort-container d-flex flex-row align-items-center'>
            <SortIcon />
            <div className='dropdown-container-with title'>
              <span className='sort-title'>Price</span>
              <Select
                labelId="sort-select-options"
                id="sort-select-options"
                value={activeSort}
                label="sort"
                onChange={handleOnChangeSort}
                className='sort-select-input'
              >
                {
                  sortByOptions.map(sortOption => (
                    <MenuItem key={sortOption.sortId} value={sortOption.sortId}>{sortOption.displayText}</MenuItem>
                  ))
                }
              </Select>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <ul className='product-items-container'>
            {
              products.map(each => (
                <ProductItem key={each.id} product={each} />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Products