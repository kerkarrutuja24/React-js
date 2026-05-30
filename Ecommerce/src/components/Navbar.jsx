import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const products = useSelector(state => state.cart.products )
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
          <Link to="/">ecommerce</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form>
            <input type="text" placeholder='search product' className='w-full roundd px-4 py-2 border'/>
            <FaSearch className='absolute top-3 right-3 text-red-700'></FaSearch>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to="/Cart" className='relative'>
          <FaShoppingCart className='text-lg'/>
          <span className='absolute top-0 text-xs left-3 w-3 bg-red-600 rounded-full flex'>
            {products.length}
          </span>
          </Link>
          <button className='hidden md:block'>
            <Link to="/Login">Login | Register</Link>
          </button>
          <button className='block md:hidden'>
            <FaUser/>
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        <Link to="/" className='hover:underline'>
          Home
        </Link>
        <Link to="/Shop" className='hover:underline'>
          Shop
        </Link>
        <Link to="/" className='hover:underline'>
          Contact
        </Link>
        <Link to="/" className='hover:underline'>
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar