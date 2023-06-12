import React,{createContext,useState,useRef,useEffect} from "react";
import {items} from '../data'
import { useLocation } from "react-router-dom";
export  const CartContext = createContext()

const WrapContext = ({children})=>{

    const [isopen,setIsopen] = useState(false)
    const [count,setCount] = useState(0)
    const [element,setElement] = useState(items)
    const [selectitem,setSelectitem] = useState()
    const location = useLocation()
    const url = location.pathname
    useEffect(()=>{
         const selectelement = element.filter(elem=>elem.url==url)
         setSelectitem(selectelement[0])
    },[url])
    const ref = useRef()
    const OpenClose = ()=>{
        setIsopen(!isopen)
    }
    const CloseStore = (e)=>{
        if(ref.current == e.target){
            setIsopen(false)
        }
    }
    return(
        <CartContext.Provider value={{isopen,OpenClose,setIsopen,ref,count,CloseStore,selectitem}}>
            {children}
        </CartContext.Provider>
    )
}

export default WrapContext