import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-wizzy.png'
import {AiOutlineMenuUnfold, AiOutlineCloseCircle} from 'react-icons/ai' 
import {IoBagOutline} from 'react-icons/io5'
import './Headers.css'
import { useSelector } from 'react-redux'


const Header = () => {

  const userInfo = useSelector((state)=> state.wizzyCart.userInfo)
  const productData = useSelector((state)=> state.wizzyCart.productData)
  console.log(userInfo)

  const [close, setClose] = useState(false)

  const hideShowMenu = ()=>{
    setClose(!close)
  }

  const closeMenu =()=>{
    setClose(false)
  }

  // const showMenu = () =>{
  //   setClose(true)
  // }
  console.log(close)

  return (
    <header>
      <Link to='/'><img  src={logo} alt={logo}/></Link>
      <nav className='nav-links'>
        <ul>
          <Link to='/cart' className='custom-link'>
            <li><IoBagOutline /><span>{productData.length}</span></li>
          </Link>
          <div className= {close ?  'links' : 'links close-link' }>
            <span className='close' onClick={hideShowMenu}><AiOutlineCloseCircle /></span>
            <div className='items'>
              <Link to='/' className='li-links'><li onClick={closeMenu}>Home</li></Link>
              <li onClick={closeMenu}>Pages</li>
              <Link  to='/shop' className='li-links'><li onClick={closeMenu}>Shop</li></Link>
              <li onClick={closeMenu}>Element</li>
              <Link to='/login'>
                <li onClick={closeMenu}><img src='https://e7.pngegg.com/pngimages/416/62/png-clipart-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer-thumbnail.png' alt='profilepic' /></li>
              </Link>
              {userInfo && <p className='mail'>{userInfo.name ? userInfo.name : userInfo.email}</p>}
            </div>
           
            
          </div>
          <span className='menu' onClick={hideShowMenu}><AiOutlineMenuUnfold /></span>
        </ul>


      </nav>

    </header>
  )
}

export default Header