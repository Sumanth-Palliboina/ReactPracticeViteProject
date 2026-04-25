import React from 'react'

import { useNavigate } from 'react-router-dom'

import "./index.css"

import groceriesImg from '../../assets/Groceries.png';

function Dashboard() {

  const navigate = useNavigate()

  const navigateToProducts = () => {
    navigate("/products")
  }

  return (
    <div className='dashboardBg p-5'>
      <div className='conatiner'>
        <div className='row'>
          <div className='col-12 col-lg-8'>
            <h1 className="heading">Welcome to Mahesh Shopping Kart</h1>
            <p className='para'>
              Discover the latest products, enjoy exclusive deals,
              and shop with confidence. <br /> Your satisfaction is our priority &#128512;.
            </p>
            <button onClick={navigateToProducts} className='shopBtn btn btn-secondary'>Shop</button>
          </div>
          <div className='d-none'>
            <img className='groceries' src={groceriesImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard