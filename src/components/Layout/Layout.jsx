import React, { useContext, useEffect } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/usercontext'
export default function Layout() {




    



  return (
    <>
    
    <Navbar/>
    
    <div className="container   py-16                  ">
      
    <Outlet></Outlet>


    </div>
     


     
 
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
