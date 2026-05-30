import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa6'
import { useSelector } from 'react-redux';

const Checkout = () => {
    const[billingToggle, setBillingToggle]= useState(true);
    const[shippingToggle, setShippingToggle]= useState(true);
    const[paymentToggle, setPaymentToggle]= useState(true);
    const[paymentMethod, setPaymentMethod]= useState("cod");

    const cart = useSelector(state => state.cart)

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row space-x-10 mt-4 justify-between'>
          <div className='md:w-2/3'>
            <div className='border p-2 mb-6'>
                <div className='flex items-center justify-between' onClick={()=> setBillingToggle(!billingToggle)}>
                    <h3 className='text-lg font-semibold mb-2'>Billing information</h3>
                    {billingToggle? <FaAngleDown/>: <FaAngleUp/>}
                </div>
                <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                    <div>
                        <lebal className="block text-gray-700" htmlFor="">Name</lebal>
                        <input 
                            type='text'
                            name='name'
                            placeholder='Enter name'
                            className='w-full px-3 py-2 border'
                        ></input>
                    </div>
                    <div>
                        <lebal htmlFor="">Email</lebal>
                        <input 
                            type='email'
                            name='email'
                            placeholder='Enter email'
                            className='w-full px-3 py-2 border'
                        ></input>
                    </div>
                    <div>
                        <lebal htmlFor="">Phone</lebal>
                        <input 
                            type='text'
                            name='phone'
                            placeholder='Enter phone'
                            className='w-full px-3 py-2 border'
                        >
                        </input>
                    </div>
                </div>
            </div>

            <div className='border p-2 mb-6'>
                <div className='flex items-center justify-between' onClick={()=> setShippingToggle(!shippingToggle)}>
                    <h3 className='text-lg font-semibold mb-2'>Shipping information</h3>
                    {shippingToggle? <FaAngleDown/>: <FaAngleUp/>}
                </div>
                <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                    <div>
                        <lebal className="block text-gray-700" htmlFor="">Address</lebal>
                        <input 
                            type='text'
                            name='address'
                            placeholder='Enter Address'
                            className='w-full px-3 py-2 border'
                        ></input>
                    </div>
                    <div>
                        <lebal htmlFor="">City</lebal>
                        <input 
                            type='text'
                            name='city'
                            placeholder='Enter city'
                            className='w-full px-3 py-2 border'
                        ></input>
                    </div>
                    <div>
                        <lebal htmlFor="">Zip code</lebal>
                        <input 
                            type='zip'
                            name='zipcode'
                            placeholder='Enter zip code'
                            className='w-full px-3 py-2 border'
                        >
                        </input>
                    </div>
                </div>
            </div>

            <div className='border p-2 mb-6'>
                <div className='flex items-center justify-between' onClick={()=> setPaymentToggle(!paymentToggle)}>
                    <h3 className='text-lg font-semibold mb-2'>Payment method</h3>
                    {paymentToggle? <FaAngleDown/>: <FaAngleUp/>}
                </div>
                <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                    <div className='flex items-center mb-2'>
                        <input 
                            type='radio'
                            name='name'
                            checked= {paymentMethod === 'cod'}
                            onChange={()=> setPaymentMethod('cod')}
                        ></input>
                        <lebal className="block text-gray-700 ml-2" htmlFor="">Cash on delevery</lebal>                      
                    </div>
                    <div className='flex items-center mb-2'>
                        <input 
                            type='radio'
                            name='name'
                            checked= {paymentMethod === 'dc'}
                            onChange={()=> setPaymentMethod('dc')}
                        ></input>
                        <lebal className="block text-gray-700 ml-2" htmlFor="">Debit card</lebal>                      
                    </div>
                    {paymentMethod === "dc" && (
                        <div className='bg-gray-100 p-4 roundd-lg mb-4'>
                            <h3 className='font-semibold text-xl mb-4'>debit card information</h3>
                            <div className='mb-4'>
                                <lebel className="block text-gray-700 font-semibold mb-2">card number</lebel>
                                <input type='text'
                                placeholder='enter card number'
                                required
                                className='border p-2 w-full rounded'/>
                            </div>
                            <div>
                                <lebel className="block text-gray-700 font-semibold mb-2">card holder name</lebel>
                                <input type='text'
                                placeholder='enter card holder name'
                                required
                                className='border p-2 w-full rounded'/>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <div className='w-1/2 mr-2'>
                                    <lebel className="block text-gray-700 font-semibold mb-2">expiry date</lebel>
                                    <input type='text'
                                    placeholder='MM/YY'
                                    required
                                className='border p-2 w-full rounded'/>
                                </div>
                                <div className='w-1/2 mr-2'>
                                    <lebel className="block text-gray-700 font-semibold mb-2">CVV</lebel>
                                    <input type='text'
                                    placeholder='CVV'
                                    required
                                className='border p-2 w-full rounded'/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
          </div>

          <div className='md:w-1/3 bg-white p-6 rounded-lg border shadow-md'>
            <h3 className='font-semibold text-lg mb-4'>Order Summery</h3>
            <div className='space-y-4'>
                {cart.products.map((product)=>(
                    <div key={product.id} className='flex justify-between'>
                        <div className='flex items-center'>
                            <img 
                            src={product.image} 
                            alt={product.name}
                            className='w-16 h-16 object-contain rounded'
                            />
                            <div className='ml-4'>
                                <h3 className='text-md font-semibold'>{product.name}</h3>
                                <p className='text-gray-600'>
                                    ${product.price} x {product.quantity}
                                </p>
                            </div>
                        </div>
                        <div className='text-gray-800'>
                            ${product.price * product.quantity}
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-4 border-r pt-4'>
                <div className='flex justify-between'>
                    <span>Total price</span>
                    <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                </div>
                
            </div>
            <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
            >place order</button>
          </div>
        </div>
      
    </div>
  )
}

export default Checkout