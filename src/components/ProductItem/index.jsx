
import { Rating } from "@mui/material"
import { Link } from "react-router-dom"

import './index.css'
import { Helper } from "../../utils/Helper"



function ProductItem(props) {
  const { product } = props
  const { id, name, description, poster, rating, price } = product

  return (
    <Link id="link-element" to={`/products/${id}`} className="router-link-component">
      <li className='product-item'>
        <img className='poster' src={poster} alt={name} />
        <div>
          <h1 className='product-title'>{name}</h1>
          <p className='product-description'>{description}</p>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center mb-2">
          <span>{Helper.formatter.format(price)}</span>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </div>
      </li>
    </Link>
  )
}

export default ProductItem