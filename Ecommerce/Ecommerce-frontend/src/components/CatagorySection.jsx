import React from 'react'
import HeroImage from '../assets/Images/hero-image.jpg'

const CatagorySection = () => {

    const categories=[
        {
            title:"men",
            imageUrl:HeroImage,
        },
        {
            title:"women",
            imageUrl:HeroImage,
        },
        {
            title:"kids",
            imageUrl:HeroImage,
        },
    ]


  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((category,index)=>(
            <div key={index} className='relative h-64 transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <img src={category.imageUrl} alt='' className='w-full h-full object-cover rounded-lg shadow-md'></img>
                <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold'>{category.title}</p>
                    <p className='text-gray-600'>view all</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CatagorySection