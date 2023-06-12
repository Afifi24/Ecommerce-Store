import React from 'react'
import img1 from '../assets/img1.jpg'
const CartDetails = () => {
  return (
    <div className='w-[90%] mt-20 rounded-xl overflow-hidden h-[90vh] max-h-screen shaddow my-4 m-auto flex items-start flex-col md:flex-row gap-4 '>
        <div className='flex-1 w-full h-full overflow-hidden'>
            <img className='w-full h-full object-cover ' src={img1} alt="" />
        </div>
        <div className='flex-1 p-4 flex flex-col gap-4 '>
            <h2 className='font-bold text-xl'>Satlton balt jacket</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum fugiat amet expedita adipisci optio eum totam voluptatibus unde temporibus!</p>
            <h4 className='font-bold text-xl'>$50.99</h4>
            <button className='uppercase py-2 rounded-full w-full bg-black text-white hover:text-black hover:bg-transparent border border-transparent hover:border-black duration-200 font-bold mt-10 '>Add to cart</button>
        </div>
    </div>
  )
}

export default CartDetails