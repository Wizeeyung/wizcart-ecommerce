import React, { useState, useEffect, useContext } from 'react'
import Products from '../components/Products'
import { ProductCtx } from '../components/Productctx'
import { useLoaderData } from 'react-router-dom'
import { productsData } from '../api/Api'

const Shop = () => {

  const product = useLoaderData()
  console.log(product)
  const [products, setProduct] = useState([])
  

  useEffect(()=>{
    setProduct(product.data)
  },[product])
  
  return (
    <div>
      <Products products={products}/>
    </div>
  )
}

export default Shop