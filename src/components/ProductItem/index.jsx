import React from 'react'

import {Link} from "react-router-dom"

import './index.css'

function ProductItem(props) {
    const {product} = props
    const {id, name, description, poster, rating, price} = product
  return (
    <Link id="link-element" to={`/products/${id}`} className="router-link-component">
      <li className='product-item'>
        <img className='poster' src={poster} alt={name} />
        <div>
          <h1 className='product-title'>{name}</h1>
          <p className='product-description'>{description}</p>
        </div>
      </li>
    </Link>
  )
}

export default ProductItem