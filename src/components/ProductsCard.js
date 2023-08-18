import React, { useState, useEffect } from 'react'
import './Products.css'
import {NavLink, useNavigate} from 'react-router-dom'
import {BsFillBagPlusFill} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/wizzyCartSlice'
import { ToastContainer, toast } from 'react-toastify';


const ProductsCard = ({product}) => {

  const dispatch = useDispatch()

  const navigate  =useNavigate()
  const [clicked ,  setIsClicked] = useState(false)
  const _id = product.title
  const idString = (_id)=>{
    return String(_id).toLowerCase().split(' ').join('')
    
  }

  const root = idString(_id)

  
  const handleClick = ()=>{
    
    navigate(`/products/${root}`,{
      state: {
        item: product,
      }
    }) 
    
  }

  const handleToastClick =()=>{
    setIsClicked(true)
    if(clicked){
      toast.error(`oops! ${product.title} has been added before`)
    } else{
      toast.success(`${product.title} is added`)
    }
  }

  
    

  return (
    
      <div className='product' >
        <div onClick={handleClick}>
          <img  src={product.image} alt='Product-img'/>
        </div>
        <div className='write-up'>
          <div className='heading'>
            <h1>{product.title}</h1>
            <p>{product.category}</p>
          </div>
            <div className='price'>
              <p>${product.oldPrice}</p>
              <p>${product.price}</p>
            </div>
        </div>
        <div>
          {product.isNew && <span>sale</span> }
        </div>
        
        <div className='cart' onClick={()=>dispatch(addToCart({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
          description: product.description,          
        })) &  handleToastClick()}><BsFillBagPlusFill /></div>

        <ToastContainer position='top-left' autoClose={2000}
        hideProgressBar={false} newestOnTop={false} closeOnClick
        rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark'
      
        />
      </div>
      

    
  )
}

export default ProductsCard