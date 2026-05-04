import { useCallback, useMemo, useEffect, useState, useReducer } from 'react'

import SortIcon from '@mui/icons-material/Sort';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import './index.css'
import ProductItem from '../ProductItem';
import { ProductService } from '../../services/ProductService';
import { ApiPaths } from '../../services/ApiPaths';

import Spinner from 'react-bootstrap/Spinner';

import { toast } from "react-toastify"

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

const initialState = {
  products: [],
  loading: false,
  error: ''
}

const productsReducer = (state, action) => {
  switch(action.type) {
    case "Success_Products":
      return {...state, products: action.payload, loading: false }
    case "Fetching_Products":
      return {...state, loading: true}
    case "Producs_Failure":
      return {...state, products: [], error: action.payload, loading:false }
    default:
      return state
  }
}

function Products() {

  const [state, dispatch] = useReducer(productsReducer, initialState)

  const [activeSort, setActiveSort] = useState(sortByOptions[0].sortId)

  const [products, setProducts] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState('')

  const handleOnChangeSort = (event) => {
    const sortingId = event.target.value
    setActiveSort(sortingId)
  }

  const getProducts = async () => {
    try {
      setIsPending(true)
      const res = await ProductService.getProducts(ApiPaths.getProdcutsPath)
      if (res.status === 200) {
        console.log(res.data)
        setProducts(res.data)
        setError('')
      }
    } catch (error) {
      if (error.status === 404) {
         notifyError("Products not found. Please try after sometime.")
      }
      console.log("api error", error)
      setError(error)
    } finally {
      setIsPending(false)
    }
  }

  const notifyError = (errMsg) => {
    toast.error(errMsg)
  }

  //prevents updates after unmount, avoiding cascading renders.
  useEffect(() => {
    console.log("component is mounted")
    let isMounted = true

    const getProducts = async (isMounted = true) => {
      try {
        setIsPending(true)
        const res = await ProductService.getProducts(ApiPaths.getProdcutsPath)
        if (res.status === 200 && isMounted) {
          console.log(res.data)
          setProducts(res.data) //safe update
          setError('')
        }
      } catch (error) {
        console.log("api error", error)
        setError(error)
      } finally {
        setIsPending(false)
      }
    }

    getProducts(isMounted)

    return () => {
      console.log("component is unounted")
      isMounted = false  //prevents state update when unmount
    }
  }, [])

  const getSortedProducts = useMemo(() => {
    if (products.length > 0) {
      let itemsArr = [...products]
      if (activeSort.toLowerCase() === "low-high") {
        itemsArr.sort((a, b) => a?.price - b?.price)
      } else {
        itemsArr.sort((a, b) => b?.price - a?.price)
      }
      return itemsArr
    }
    return products
  }, [activeSort, products])

  const retryProductsFetching = () => {
    getProducts()
  }

  const renderSpinner = () => {
    return (
      <div style={{ height: '70vh' }} className='d-flex flex-column justify-content-center align-items-center'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  const renderSuccessView = () => {
    return (
      <ul className='product-items-container'>
        {
          getSortedProducts.map(each => (
            <ProductItem key={each.id} product={each} />
          ))
        }
      </ul>
    )
  }

  const renderErrorView = () => {
    return (
      <div style={{ height: '70vh' }} className='d-flex flex-column justify-content-center align-items-center'>
        <div className='text-center'>
          <img src="/products_not_found.jpg" alt="no-products-img" width="250px" height="200px" />
          <p className='text-center text-black fw-bold'>{error.status === 400 ? "Oops! Prodcuts Not found. Please try again" : "Something went wrong. Please try again."}</p>
          <button className='fw-bold btn btn-outline-info' onClick={retryProductsFetching}>Retry</button>
        </div>
      </div>
    )
  }

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
          {
            isPending === true ? renderSpinner() : error ? renderErrorView() : renderSuccessView()
          }
        </div>
      </div>
    </div>
  )
}

export default Products