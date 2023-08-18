import React, { useContext } from 'react'
import './Products.css'
import ProductsCard from './ProductsCard'
import { ProductCtx } from './Productctx'

const Products = ({products}) => {

  // const products = useContext(ProductCtx)

  return (
    <div className='products-container'>
      <div className='title'>
        <h1>PRODUCTS</h1>
        <p>
          Welcome to Wizzy's cart, on here you can shop effectively.
        </p>

      </div>
      <div className='product-container'>
      {products.map((product)=>(
        <ProductsCard key={product._id} product={product}/>
      ))}
      </div>
      
      

  
      

    </div>
  )
}

export default Products