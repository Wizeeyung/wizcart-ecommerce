import axios from 'axios'

export async function productsData(){
  const products = await axios.get('https://fakestoreapiserver.reactbd.com/products')

  return products
}


export async function getProduct(){
  const url = 'https://fakestoreapiserver.reactbd.com/products'
  const options = {
    method: 'GET'
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}