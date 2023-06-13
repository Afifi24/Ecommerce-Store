import React,{useContext} from 'react'
import { CartContext } from './Context'
import {GrFormClose} from 'react-icons/gr'
import img1 from '../assets/img3.jpg'
import {MdDelete} from 'react-icons/md'
const Store = () => {
  const {OpenClose,isopen,setIsopen,CloseStore,ref,selectitem,AddItem,addtocart,Delete,count,Addamount,Removeamount} = useContext(CartContext)
  return (
    <div>
     {
      isopen && 
     
      <div ref={ref}  onClick={CloseStore} className='fixed top-0   min-h-screen w-full bg-black bg-opacity-50'>
       <div className=' absolute  right-0 top-0 h-full w-1/2  md:w-1/3 p-5 bg-white'>
             <div className='flex items-center justify-between'>
              <h2 className='font-bold text-2xl'>cart({count})</h2>
               <GrFormClose onClick={()=>setIsopen(false)}  className='text-3xl cursor-pointer'/>
             </div>
             <div className='h-1 mt-10 mb-4 w-full bg-black'/>
              <div className='flex flex-col gap-4 '>
                { count ===0 && <h2 className='font-semibold text-xl'>Your Cart is Empty</h2>}
              {addtocart?.map(item=>(
              <div key={item.id} className='grid grid-cols-4   items-start gap-4 '>
              <div className=' h-full  col-span-1'>
               <img className=' w-full  max-h-[100px] object-cover ' src={item?.img} alt="" />
              </div>
              <div className='flex col-span-3  flex-col gap-3 '>
               <h2 className='font-bold'>{item?.title}</h2>
                <h3>${item.price}</h3>
                <div className='flex items-end justify-between'>
                      <div className='flex items-center  bg-gray-200 w-fit'>
                       <button onClick={()=>Removeamount(item)} className='px-3  duration-200 hover:bg-gray-300'>-</button>
                        <p className='px-3'>{item.amount}</p>
                        <button onClick={()=>Addamount(item)} className='px-3  duration-200 hover:bg-gray-300'>+</button>
                      </div>
                      <button onClick={()=>Delete(item)} className=' text-lg mr-4'><MdDelete/></button>
                </div>
              </div>
            </div>
             ))}
              </div>
       </div>
    </div>
    }
    </div>
  )
}

export default Store