import React from 'react'
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Shop = () => {

  const products = useSelector((state) => state.products);

  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <h2>shop Products</h2>
        <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
          {products.products.map((product) => (
            <ProductCard product={product}/>
          ))}
        </div>
      </div>
  )
}

export default Shop