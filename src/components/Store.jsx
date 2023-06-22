import React,{useContext,useEffect} from 'react'
import { CartContext } from './Context'
import {GrFormClose} from 'react-icons/gr'
import img1 from '../assets/img3.jpg'
import {MdDelete} from 'react-icons/md'
const Store = () => {
  const {OpenClose,isopen,setIsopen,CloseStore,ref,selectitem,AddItem,addtocart,Delete,count,Addamount,Removeamount} = useContext(CartContext)
  useEffect(()=>{
    if(isopen===true){
      document.body.style.overflow= 'hidden'
    }else{
      document.body.style.overflow= 'auto'
    }
  },[isopen])
  return (
    <div>
     {
      isopen && 
     
      <div ref={ref}  onClick={CloseStore} className='fixed top-0   h-screen w-full bg-black bg-opacity-50'>
       <div className=''>
       <div className=' absolute  overflow-y-scroll right-0 top-0 h-screen w-1/2  md:w-1/3 p-5 bg-white'>
             <div className='flex items-center justify-between'>
              <h2 className='font-bold text-md md:text-lg lg:text-2xl'>cart({count})</h2>
               <GrFormClose onClick={()=>setIsopen(false)}  className='lg:text-3xl md:text-2xl sm:text-xl text-lg cursor-pointer'/>
             </div>
             <div className='h-1 mt-2 md:mt-10 mb-4 w-full bg-black'/>
              <div className='flex flex-col gap-6 '>
                { count ===0 && <h2 className='font-semibold text-sm md:text-lg  lg:text-xl'>Your Cart is Empty</h2>}
              {addtocart?.map(item=>(
              <div key={item.id} className=' w-full  flex flex-col md:grid md:grid-cols-4   items-start gap-2 md:gap-4 '>
              <div className=' h-full w-full md:col-span-1'>
               <img className=' w-full  max-h-[100px] object-cover ' src={item?.img} alt="" />
              </div>
              <div className='flex w-full  md:col-span-3  flex-col md:gap-3  gap-1 '>
               <h2 className='font-semibold text-sm md:text-lg '>{item?.title}</h2>
                <h3 className='font-bold text-sm md:text-lg '>${item.price*item.amount}</h3>
                <div className='flex w-full  items-end justify-between'>
                      <div className='flex items-center  bg-gray-200 w-fit'>
                       <button onClick={()=>Removeamount(item)} className='px-3  duration-200 hover:bg-gray-300'>-</button>
                        <p className='px-3 text-sm'>{item.amount}</p>
                        <button onClick={()=>Addamount(item)} className='px-3  duration-200 hover:bg-gray-300'>+</button>
                      </div>
                      <button onClick={()=>Delete(item)} className=' text-lg md:mr-4'><MdDelete/></button>
                </div>
              </div>
            </div>
             ))}
              </div>
       </div>
       </div>
    </div>
    }
    </div>
  )
}

export default Store