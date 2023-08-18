import React, {useContext, useEffect, useState} from 'react'
import { useLoaderData, useLocation, useNavigate, useParams, Link } from 'react-router-dom'
import RatingStars from './StarRating'
import { addToCart } from '../redux/wizzyCartSlice'
import './Products.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'

const SingleProduct = () => {

  const productData = useSelector((state)=> state.wizzyCart.productData)

  const dispatch = useDispatch()

  const [product, setProduct] = useState({})
  const [baseQty, setBaseQty] = useState(1)
  const [clicked, setClicked] = useState(false)

  const location = useLocation()

  const {item} = location.state || {}

  
  
  useEffect(()=>{
    setProduct(item)
  },[]) 

 

  const handleToastClick =()=>{
    setClicked(true)
    if(clicked){
      toast.error(`oops! ${product.title} has been added before`)
    } else{
      toast.success(`${product.title} is added`)
    }
  }



  return (
    <div className='single-product-container'>
      <div className='left-details'>
        <img src={product.image} alt={product.title} />
        <div>
          {product.isNew && <span>sale</span> }
        </div>
      </div>
      <div className='right-details'>
        <h1>{product.title}</h1>
        <div className='price-single-product'>
          <p>${product.oldPrice}</p>
          <p>${product.price}</p>
        </div>
        <div className='star'>
          <RatingStars product ={product} />
        </div>
        <p className='description'>{product.description}</p>
        <div className='quantity-box'>
          <div className='quantity'>
            <p>Quantity</p>
            <div className='btn'>
              <button onClick={()=> baseQty > 1 ?  setBaseQty(baseQty - 1) : null }>-</button>
              <span>{baseQty}</span>
              <button onClick={()=> setBaseQty(baseQty + 1)}>+</button>
            </div>
            
          </div>
          <button className='last-btn' onClick={()=>dispatch(addToCart({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: baseQty,
          description: product.description
        }) ) & handleToastClick() }>add to cart</button>
          
        </div>
        <p><span className='category'>Category:</span> {product.category}</p>
        <Link to='/shop' className='custom'><p><AiOutlineArrowLeft /> <span>Go Shopping</span></p></Link>
      </div>
      <ToastContainer position='top-left' autoClose={2000}
      hideProgressBar={false} newestOnTop={false} closeOnClick
      rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark'
      
      />
      
    </div>
  )
}

export default SingleProduct