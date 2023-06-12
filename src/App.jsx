import React from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import CartDetails from './components/CartDetails'
import {Route,Routes} from 'react-router-dom'
import Store from './components/Store'
import { useLocation } from 'react-router-dom'
const App = () => {
  // const location = useLocation()
  // location={location} key={location.pathname}
  return (
    <div>
      <Header/>
      <Store/>
      <Routes  >
          <Route path='/' element={<Cart/>}/>
          <Route path='/cartdetail/:element' element={<CartDetails/>}/>
      </Routes>
    </div>
  )
}

export default App