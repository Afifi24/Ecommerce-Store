import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import WrapContext from './components/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <WrapContext>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </WrapContext>

)
