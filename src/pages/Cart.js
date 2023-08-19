import React, { useEffect, useState } from 'react'
import CartPageEmpty from '../components/CartPageEmpty'
import { useDispatch, useSelector } from 'react-redux'
import CartPageNotEmpty from '../components/CartPageNotEmpty'
import banner from '../assets/b1.jpg'
import { resetCart } from '../redux/wizzyCartSlice'
import {ToastContainer, toast } from 'react-toastify'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import Error from './Error'


const Cart = () => {

  const dispatch =useDispatch()
  const navigate = useNavigate()

  const userInfo = useSelector((state)=> state.wizzyCart.userInfo)

  const productData = useSelector((state)=> state.wizzyCart.productData)
  const [totalAmount , setTotalAmount] = useState('')
  const [payNow, setPayNow] =useState(false)
  console.log(payNow)
  useEffect(()=>{
    let price = 0;
    productData.map((item)=>(
      price += item.quantity * item.price
    ))

    setTotalAmount(price.toFixed())
  },[productData])


  const handleCheckOut = () =>{
    if (!userInfo){
      toast.error('please sign-in to checkout')    
    } else if(userInfo){
      setPayNow(true)
    }
  }




  return (
     <div className='cart-container'>
        <img src={banner} alt='banner'/>
        {productData.length > 0 ? (<div className='cart-content'>
          <div className='cart-left'>
            <h2>Shopping Cart</h2>
            {productData.map((product)=>{
              return(
                <CartPageNotEmpty key={product._id} product={product} />
              )
            })}
            {productData.length > 0 &&  <button className='reset-btn' onClick={()=> dispatch(resetCart(productData)) & toast.error('Your cart is empty')}>Reset Cart</button> }
            <Link to='/' className='custom'><p><AiOutlineArrowLeft /> <span>Go Shopping</span></p></Link>
            
          </div>
          <div className='cart-right'>
            <h2>cart totals</h2>
            <p>Subtotal: <span>${totalAmount}</span></p>
            <div className='shipping'>
              <p>Shipping:</p>
              <p>This shipping is proudly sponsored by wizzy cart
                and this must be delivered to the exact address
              </p>
            </div>
            <div className='totals'>
              <h3>Total</h3>
              <h3>${totalAmount}</h3>
            </div>
            
            
            <button onClick={handleCheckOut}>proceed to checkout</button>
            {payNow && ( <Error />
              // <div className='stripes'>
              //   <StripeCheckout
              //     stripeKey = 'pk_test_51NeJ8VIqs7XmD6HQLed9d2JIFWYJVrmoe8tq7xRkBbeKQiru6wtqwD3xruKPeXefaGKkVqJcZ3Njp0TvGgxF87Ec00qTR8Jwjb'
              //     name = 'Wizzy Online Cart'
              //     amount = {totalAmount * 100}
              //     label = 'Pay to wizzy'
              //     description = {`Your payment amount is $${totalAmount}`}
              //     // token = {payment}
              //     email = {userInfo.email}
              //   />
              //   <div className='stripe' onClick={()=> navigate('*')}></div>
                
              // </div>
            )}
          </div>

        </div>)
        : <CartPageEmpty /> }

        <ToastContainer position='top-left' autoClose={2000}
        hideProgressBar={false} newestOnTop={false} closeOnClick
        rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark'
        
        /> 
        
    </div>
  
  )
}

export default Cart