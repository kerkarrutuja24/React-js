import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSection = () => {
    const infoItems=[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'></FaShippingFast>,
            title:"Free Shipping",
            desceiption:"Get your order delivered with no extra cost",
        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'></FaHeadset>,
            title:"Support 24/7",
            desceiption:"we are here to assist you anytime",
        },
        {
            icon:<FaMoneyBill1Wave className='text-3xl text-red-600'></FaMoneyBill1Wave>,
            title:"100% money back",
            desceiption:"full refund if you are not satisfied",
        },
        {
            icon:<FaLock className='text-3xl text-red-600'></FaLock>,
            title:"Payment Secure",
            desceiption:"your payment information is safe with us",
        },
        {
            icon:<FaTag className='text-3xl text-red-600'></FaTag>,
            title:"Discount",
            desceiption:"enjoy best policy on our product",
        },
    ]


  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {infoItems.map((items,index)=>(
            <div key={index} className='flex flex-col items-center text-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 border cursor-pointer'>
                {items.icon}
                <h3 className='mt-4 text-xl font-semibold'>{items.title}</h3>
                <p className='mt-2 text-gray-600'>{items.desceiption}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default InfoSection