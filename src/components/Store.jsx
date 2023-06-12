import React,{useContext} from 'react'
import { CartContext } from './Context'
import {GrFormClose} from 'react-icons/gr'
import img1 from '../assets/img3.jpg'
const Store = () => {
  const {OpenClose,isopen,setIsopen,CloseStore,ref} = useContext(CartContext)
  return (
    <div>
     {
      isopen && 
     
      <div ref={ref}  onClick={CloseStore} className='fixed top-0   h-screen w-full bg-black bg-opacity-50'>
       <div className=' absolute  right-0 top-0 h-full w-1/2  md:w-1/3 p-5 bg-white'>
             <div className='flex items-center justify-between'>
              <h2 className='font-bold text-2xl'>cart(2)</h2>
               <GrFormClose onClick={()=>setIsopen(false)}  className='text-3xl cursor-pointer'/>
             </div>
             <div className='h-1 mt-10 mb-4 w-full bg-black'/>
             <div className='grid grid-cols-3   items-start gap-1 '>
               <div className=' h-full  col-span-1'>
                <img className=' w-full ' src={img1} alt="" />
               </div>
               <div className='flex col-span-2 max-h-[130px] h-[120px] flex-col justify-between'>
                <h2 className='font-bold'>High Rise Boyfriends Jean</h2>
                 <h3>$45.99</h3>
                 <div className='flex items-end justify-between'>
                       <div className='flex items-center  bg-gray-200 w-fit'>
                        <button className='px-4 py-1 duration-200 hover:bg-gray-300'>-</button>
                         <p className='px-3'>0</p>
                         <button className='px-4 py-1 duration-200 hover:bg-gray-300'>+</button>
                       </div>
                       <button className='text-[12px] mr-4'>Remove</button>
                 </div>
               </div>
             </div>
       </div>
    </div>
    }
    </div>
  )
}

export default Store