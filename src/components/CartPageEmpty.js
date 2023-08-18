import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import banner from '../assets/b1.jpg'
import './Cart.css'
import { Link } from 'react-router-dom'

const CartPageEmpty = () => {
  return (
    <div className='cart-page-empty'>
      <h3>Your Cart is Empty. Please go back to Shopping and add products to Cart</h3>
      <Link to='/' className='custom'><p><AiOutlineArrowLeft /> <span>Go Shopping</span></p></Link>
    </div>
  )
}

export default CartPageEmpty