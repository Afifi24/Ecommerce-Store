import React,{createContext,useState,useRef} from "react";

export  const CartContext = createContext()

const WrapContext = ({children})=>{

    const [isopen,setIsopen] = useState(false)
    const [count,setCount] = useState(0)
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
        <CartContext.Provider value={{isopen,OpenClose,setIsopen,ref,count,CloseStore}}>
            {children}
        </CartContext.Provider>
    )
}

export default WrapContext