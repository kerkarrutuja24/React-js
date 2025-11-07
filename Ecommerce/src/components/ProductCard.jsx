import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductCard = ({product}) => {
  return (
    <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
        <img src={product.image} alt="" className='h-80 w-72 object-cover rounded-t-xl'></img>
        <h3 className='text-lg font-bold text-black truncate block capitalize'>{product.name}</h3>
        <p className='text-lg font-semibold text-black cursor-auto my-3'>{product.price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
        </div>
        <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-500 group text-white text-sm rounded-full hover:w-32
         hover:bg-red-700 transition-transform duration-300 hover:scale-105'>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>add to cart</span>
        </div>
    </div>
  )
}

export default ProductCard