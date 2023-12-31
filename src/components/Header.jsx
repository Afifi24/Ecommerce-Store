import React,{useContext} from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { CartContext } from './Context'
const Header = () => {
  const {isopen,OpenClose,count} = useContext(CartContext)
 
 
  return (
    <div className='bg-black fixed top-0 w-full py-4'>
      <div className=' text-white flex items-center justify-between w-[90%] m-auto '>
        <Link to='/'> <p className='font-bold text-lg'>Store</p></Link>
        <div onClick={OpenClose} className='relative cursor-pointer'>
        <FiShoppingCart  className=' md:text-md  lg:text-lg '/>
        <span className='absolute flex items-center justify-center text-[12px] text-black -top-3 w-4 h-4 rounded-full bg-white -right-2'>{count}</span>
        </div>
      </div>
    </div>
  )
}

export default Header