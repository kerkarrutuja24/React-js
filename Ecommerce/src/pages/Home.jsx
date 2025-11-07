
import React, { useEffect } from 'react';
import { catagories, mockData } from '../assets/mockData';
import HeroImage from '../assets/Images/hero-image.jpg';
import InfoSection from '../components/InfoSection';
import CatagorySection from '../components/CatagorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
          <div className='bg-red-600 text-white text-xs px-2 py-2.5'>shop by categories</div>
          <ul className='space-y-4 bg-gray-100 p-3 border'>
            {catagories.map((catagory, index) => (
              <li key={index} className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                {catagory}
              </li>
            ))}
          </ul>
        </div>

        <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
          <img src={HeroImage} alt='' className='h-full w-full' />
          <div className='absolute top-16 left-8'>
            <p className='text-gray-600 mb-4'>shop your dream product</p>
            <h2 className='text-3xl font-bold'>Welcome to ecommerce</h2>
            <p className='text-xl mt-2.5 font-bold text-gray-800'>millions of product</p>
            <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>
              shop now!
            </button>
          </div>
        </div>
      </div>

      <InfoSection />
      <CatagorySection />

      <div>
        <h2>Top Products</h2>
        <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
          {products?.products?.slice(0, 5).map((product) => (
            <ProductCard product={product}/>
          ))}
        </div>
      </div>

      <Shop></Shop>

    </div>
  );
};

export default Home;
