import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'
import { productsData } from '../api/Api'
import { ProductCtx } from '../components/Productctx'

const Home = () => {

  const [products, setProducts] = useState([])
  const data = useLoaderData()
  console.log(data)

  useEffect(()=>{
    setProducts(data.data)
  }, [data])

 
  // console.log(data.data)
  return (
    <div>
      <Banner />
      <ProductCtx.Provider value={products}>
        <Products products={products}/>
      </ProductCtx.Provider>

    </div>
  )
}

export default Home