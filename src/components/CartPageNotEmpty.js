import React from 'react'
import banner from '../assets/b1.jpg'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { deleteItem, decrementQuantity, incrementQuantity } from '../redux/wizzyCartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

const CartPageNotEmpty = ({product}) => {

  const userInfo = useSelector((state)=> state.wizzyCart.userInfo)

  const dispatch =useDispatch()
  
  return (
    <div className='cart-container-not-empty'>
      <div className='left-cart'>
        <div className='left-ct'>
          <AiOutlineCloseSquare className='cancel-btn'  onClick={()=> dispatch(deleteItem(product._id)) & toast.error(`${product.title} is removed`)}/>
          
            <img src={product.image} alt={product.title}/>
          
        </div>
        
        <div className='right-content'>
          <p>{product.title}</p>
          <span>${product.price}</span>
          <div className='quantity'>
            <p>Quantity</p>
            <div className='btn'>
              <button onClick={()=>dispatch(decrementQuantity({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: product.quantity,
          description: product.description
        }) )} >-</button>
              <span>{product.quantity}</span>
              <button onClick={()=>dispatch(incrementQuantity({
          _id: product._id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: product.quantity,
          description: product.description
        }) )& toast.success(`${product.title} is increased by 1`)}>+</button>
            </div>
            
          </div>
          <span>${product.quantity * product.price}</span>
          
        </div>
      </div>
        <ToastContainer position='top-left' autoClose={2000}
        hideProgressBar={false} newestOnTop={false} closeOnClick
        rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark'
        
        />
      
      
    </div>
    
  )
}

export default CartPageNotEmpty