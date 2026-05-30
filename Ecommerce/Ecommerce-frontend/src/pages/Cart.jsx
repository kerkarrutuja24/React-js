import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hero from "../assets/Images/hero-image.jpg"
import { FaTrashAlt } from 'react-icons/fa'
import Model from '../components/Model'
import ChangeAddress from '../components/ChangeAddress'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector(state=> state.cart)
  const[address, setAddress]= useState('main street 4264')
  const[isModelOpen, setIsModelOpen]= useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {cart.products.length>0 ? 
      <div>
        <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
        <div className='flex flex-col md:flex-row space-x-10 mt-4 justify-between'>
          <div className='md:w-2/3'>
            <div className='flex justify-between items-center border-b mb-4 text-xs font-bold'>
              <p>PRODUCTS</p>
              <div className='flex space-x-8'>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
                <p>REMOVE</p>
              </div>
            </div>
            <div>
              {cart.products.map((product)=>(
                <div key={product.id} 
                className='flex items-center justify-between p-3 border-b'>
                  <div className='md:flex items-center space-x-4'>
                    <img src={product.image}
                     alt={product.name} 
                     className='w-16 h-16 rounded object-contain'></img>
                    <div className='flex-1 ml-4'>
                      <h3 className='text-lg font-semibold'>{product.name}</h3>
                    </div>
                  </div>
                  <div className='flex space-x-12 items-center'>
                    <p>${product.price}</p>
                    <div className='flex items-center justify-center border-b'>
                      <button className='text-xl font-bold px-1.5 border-r' onClick={()=> dispatch(decreaseQuantity(product.id))}>-</button>
                      <p className='text-xl px-2'>{product.quantity}</p>
                      <button className='text-xl px-1 border-l' onClick={()=> dispatch(increaseQuantity(product.id))}>+</button>
                    </div>
                    <p>${(product.quantity * product.price).toFixed(2)}</p>
                    <button className='text-red-500 hover:text-red-700'
                      onClick={()=> dispatch(removeFromCart(product.id))}>
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='md:w-1/3 bg-white p-6 rounded-lg border shadow-md'>
            <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
            <div className='flex justify-between mb-5 border-b pb-1'>
              <span className='text-sm'>TOTAL QUANTITY: </span>
              <span>{cart.totalQuantity}</span>
            </div>
            <div className='mb-4 border-b pb-2'>
              <p>Shipping:</p>
              <p className='ml-2'>Shipping to:{""}
                <span className='text-xs font-bold'>{address}</span>
              </p>
              <button 
              className='text-blue-500 hover:underline mt-1 ml-2'
              onClick={()=>setIsModelOpen(true)}>
                change address
              </button>
            </div>
            <div className='flex justify-between mb-4'>
              <span>Total price:</span>
              <span>{cart.totalPrice.toFixed(2)}</span>
            </div>
            <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800' onClick={()=> navigate('/Checkout')}>proceed to Checkout</button>
          </div>
        </div>
        <Model isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}>
          <ChangeAddress setIsModelOpen={setIsModelOpen} setAddress={setAddress}></ChangeAddress>
        </Model>
      </div>
      :<div className='flex justify-center'>
        <img src={hero} alt="" className='h-50 w-50'></img>
      </div>
      }
    </div>
  )
}

export default Cart