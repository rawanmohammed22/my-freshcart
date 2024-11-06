
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/Cartcontext'
import axios from 'axios'
import Loadingt from '../Loadingt/Loadingt'
import { Link, Navigate } from 'react-router-dom'

export default function Cart() {


  const [first, setfirst] = useState({})
  
   
   let{getCart} =useContext(CartContext)
   let{updateCart} =useContext(CartContext)
   let{deleteCart} =useContext(CartContext)
   let{cart} =useContext(CartContext)






   



  async function getcarts() {
    let response = await getCart()
    
    console.log(response)
    setfirst(response.data)
    
   }

   async function updatecarts(productId,count) {
    let response = await updateCart(productId,count)
   
   
    setfirst(response.data)
    
   }

   async function deltecarts(productId) {
    let response = await  deleteCart(productId)
   
   
    setfirst(response.data)
    
    
   }

useEffect(()=>{


getcarts()





},[])










  return (
    <>
    
    
     {first?<div className="relative overflow-x-auto sm:rounded-lg  py-10 my-9 mx-auto ooo">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 py-10 bg-slate-200">
  <div className="flex  "> <div className='mx-9 w-1/2 '><h1 className=''>cart total price: </h1>
   <h1 className='my-5'>{first.totalCartPrice}
</h1></div><div className="w-1/2"> <Link to={'/checkout'}> <button className='px-6 py-4 bg-green-400 mr-auto '                               >check out</button></Link></div></div> 
    <tbody>

                                                            
    {first.products?.map((product)=>  <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700  py-8 px-8  my-10   hover:bg-gray-100 dark:hover:bg-gray-600">
        <td>
      




        </td>
        
        
        
        <td className="p-4 w-1/4">


         <img src={product.product.imageCover} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button  onClick={()=>updatecarts(product.product.id,product.count-1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-gray-200 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
          {product.count}
            </div>
            <button  onClick={()=>updatecarts(product.product.id,product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-gray-200 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {product.price*product.count}
        </td>
        <td className="px-6 py-4">
          <button  onClick={()=>deltecarts(product.product.id)} >Remove</button>
        </td>
      </tr> )}
     
      <h1>  {cart.cartId}</h1>
    </tbody>
  </table>
</div>
:<Loadingt/>}

</>)}