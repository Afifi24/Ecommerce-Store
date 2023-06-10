import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
const Header = () => {
  return (
    <div className='bg-black py-3'>
      <div className=' text-white flex items-center justify-between w-[90%] m-auto '>
        <p className='font-bold text-lg'>Store</p>
        <FiShoppingCart className=' md:text-md lg:text-lg '/>
      </div>
    </div>
  )
}

export default Header