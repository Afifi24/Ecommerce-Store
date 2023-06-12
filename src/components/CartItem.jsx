import React from 'react'
import img1 from '../assets/img/jean1.jpg'
import img2 from '../assets/img/shoes1.jpg'
import { Link } from 'react-router-dom'
import {items} from '../data'
const CartItem = () => {
  return (
    <div className='grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {items.map(item=>(
        <div key={item.id}  className=' max-h-[50vh] md:max-h-[70vh] p-3    bg-white shaddow rounded-md'>
          <Link to={item.url} >
              <img className='h-[80%] w-full object-cover ' src={item.img} alt="" />
              <h2 className='font-bold mt-2'>{item.title}</h2>
              <p>${item.price}</p>
        </Link>
         </div>
      ))}
      
      
    </div>
  )
}

export default CartItem