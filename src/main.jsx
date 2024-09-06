
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import CoinContextProvider from './context/context'
import About from "./components/About.jsx"
import HomePage from "./components/HomePage.jsx"
import Navbar from './components/Header.jsx'
import CoinData from './components/Coin.jsx'
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>} >
        <Route path='' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/:coinid' element={<CoinData/>}/>
      </Route>
    )
   )  
  


createRoot(document.getElementById('root')).render(

  <CoinContextProvider>
    <RouterProvider router={router}/>
    </CoinContextProvider>
)
