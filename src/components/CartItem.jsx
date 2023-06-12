import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import { Link } from 'react-router-dom'
const CartItem = () => {
  return (
    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
     <Link to={'/cartdetail'}> <img src={img1} alt="" /></Link>
      <Link to={'/cartdetail'}><img src={img2} alt="" /></Link>
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
  )
}

export default CartItem