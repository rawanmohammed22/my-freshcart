import React, { useContext } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'



import { UserContext } from '../../context/usercontext';
import { CartContext } from '../../context/Cartcontext';

export default function Navbar() {

      let Navigate = useNavigate()
  let { userData ,setUserData } = useContext(UserContext)
     let{cart}       =useContext(CartContext)

   function logout(){

       localStorage.removeItem('usertoken')
       setUserData(null)
       Navigate('/login') 


   }



  return (

   




    
    <>

    
     <nav className='oppo   lg:fixed    top-0 right-0 left-0   z-50  bg-slate-50    '> <div className="   lg:container  flex flex-col    lg:flex-row  lg:justify-around        lg:items-center ooo    lg:justify-between          py-4 ">
      
      
       <div className="flex      flex-col lg:flex-row      text-sm  text-gray-800                             ">
        <img  src={logo}   alt='logo'   className='        '             />
        
       
       </div>
       <div className="flex flex-col lg:flex-row "> {    localStorage.getItem('usertoken') &&                             
       <ul  className='flex  flex-col lg:flex-row                        '>
         <li className='mx-2     text-sm   font-thin        '><NavLink  to=''         > Home                      </NavLink></li>
         
         <li className='mx-2  text-sm '><NavLink to='products'> Products       </NavLink></li>
         <li className='mx-2  text-sm '><NavLink to='Brands'>  Brands             </NavLink></li>
         <li className='mx-2  text-sm '><NavLink to='Category'>  Categories          </NavLink></li>
        <li   className='mx-2  text-sm '>  <NavLink to='whishlist'>  WhishList         </NavLink>                                                                              </li>                                                                           





        </ul>}


        { !localStorage.getItem('usertoken') &&
        <ul  className='flex  flex-col lg:flex-row                        '>
        <li className='mx-2'><NavLink to='Register'> Register             </NavLink></li>
        <li className='mx-2'><NavLink to='Login'>  Login         </NavLink></li>
</ul>}
        





       </div>
       {     localStorage.getItem('usertoken') &&
       <div className="flex   ml-auto  me-auto   lg:ml-0   lg:me-0     "> 
       <ul  className='flex                          '>
         <li className='mx-2'>  
     <NavLink to='./cart' >   <i className="fa-solid fa-cart-shopping relative fa-1x "   style={{ fontSize: '24px', color: '#4B4B4B' }}> <NavLink to='./cart' className=' text-white py-1 px-1 rounded-md  absolute bottom-3 bg-green-600 right-4 hover:text-red-400 text-xs'>{cart.numOfCartItems} {cart._id}                                               </NavLink></i> </NavLink> 
          
          
          </li>
         <li className='mx-2          cursor-pointer'      onClick={()=> logout()} >          Logout</li>
        


       
      




        </ul>
       </div>} 
      
      
      
      
      </div> </nav></>
  )
}

