import React,{createContext,useState,useRef,useEffect} from "react";
import {items} from '../data'
import { useLocation } from "react-router-dom";
export  const CartContext = createContext()

const WrapContext = ({children})=>{

    const [isopen,setIsopen] = useState(false)
    const [count,setCount] = useState(0)
    const [element,setElement] = useState(items)
    const [selectitem,setSelectitem] = useState()
    const [addtocart,setAddtocart] = useState([])
    // const [amount,setAmount] = useState()
    const location = useLocation()
    const url = location.pathname
    const ref = useRef()

    const AddItem = (item)=>{
        const product = addtocart.find(elem=>elem.id===item.id)
         if(product){
           product.amount += 1
           setAddtocart([...addtocart])
         }else{
            item.amount=1
           setAddtocart([...addtocart,item])

           setCount(count+1)
        }

    }
    useEffect(()=>{
         const selectelement = element.filter(elem=>elem.url==url)
         setSelectitem(selectelement[0])
    },[url])
    const Delete = (item)=>{
        const Filterdelete = addtocart.filter(filt=>filt.id!==item.id)
        setAddtocart(Filterdelete)
        setCount(count-1)
    }
    const OpenClose = ()=>{
        setIsopen(!isopen)
    }
    const CloseStore = (e)=>{
        if(ref.current == e.target){
            setIsopen(false)
        }
    }
    const Addamount = (item)=>{
       item.amount +=1
       setAddtocart([...addtocart])
    }
    const Removeamount = (item)=>{
       item.amount -=1
       setAddtocart([...addtocart])
       if(item.amount===0){
          const hide = addtocart.filter(hid=>hid.id!==item.id)
          setAddtocart(hide)
          setCount(count - 1)
       }
    }
    return(
        <CartContext.Provider value={{isopen,OpenClose,setIsopen,ref,count,CloseStore,selectitem,AddItem,addtocart,Delete,Addamount,Removeamount}}>
            {children}
        </CartContext.Provider>
    )
}

export default WrapContext