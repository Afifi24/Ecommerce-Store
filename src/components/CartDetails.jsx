import React,{useContext,useEffect} from 'react'
import {CartContext} from '../components/Context'
const CartDetails = () => {
  const {selectitem,AddItem,isopen} = useContext(CartContext)
 
  return (
    <div className='w-[90%] mt-20 rounded-xl overflow-hidden h-[70vh] max-h-screen shaddow my-4 m-auto flex items-start flex-col md:flex-row gap-4 '>
        <div className='flex-1  w-full justify-start flex h-full overflow-hidden'>
            <img className=' h-full w-full md:w-auto object-cover  ' src={selectitem?.img} alt="" />
        </div>
        <div className='flex-1 p-4 flex flex-col gap-4 '>
            <h2 className='font-bold text-xl'>{selectitem?.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum fugiat amet expedita adipisci optio eum totam voluptatibus unde temporibus!</p>
            <h4 className='font-bold text-xl'>${selectitem?.price}</h4>
            <button onClick={()=>AddItem(selectitem)} className='uppercase px-4 rounded-full w-full sm:w-fit py-3 bg-black text-white hover:text-black hover:bg-transparent border border-transparent hover:border-black duration-200 font-bold mt-10 '>Add to cart</button>
        </div>
    </div>
  )
}

export default CartDetails