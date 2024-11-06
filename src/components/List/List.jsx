
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/Cartcontext'
import axios from 'axios'
import Loadingt from '../Loadingt/Loadingt'

export default function List() {


  const [first, setfirst] = useState({})
  
   
   let{ getWhishlist} =useContext(CartContext)
   let {addToCart}=useContext(CartContext)
   let{deletewhishlist}=useContext(CartContext) 



   function addd(productId) {

    addToCart(productId)
    {
      deltecartss(productId)
    }
    
   }


  
   



  async function getcartss() {
    let response = await getWhishlist()
   console.log(response)
   
    setfirst(response)
    
   }

   async function updatecarts(productId,count) {
    let response = await updateCart(productId,count)
    
   
    setfirst(response.data)
    
   }

   async function deltecartss(productId) {
    let response = await deletewhishlist(productId)
 
   
    setfirst(response.data)
    
    
   }
   async function addcarts(productId) {
    let response = await addToCart(productId)
    console.log(response.data.imageCover)
   
    setfirst(response)
    
   }

useEffect(()=>{


getcartss()





},[])










  return (
    <>
    
    
   <div className="relative overflow-x-auto sm:rounded-lg  py-10 my-9 mx-auto ooo">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 py-10">
   
    <tbody>
    
     {first?<tr className=' bg-slate-200 '>
        <td>
          <h1 className='p-11'> MY WHISH LIST</h1>
        {first.data?.map((product)=>  <tr className="bg-gray-200 border-b   dark:bg-gray-800 dark:border-gray-700  py-8 px-8  my-10   hover:bg-gray-100 dark:hover:bg-gray-600">
        <td className="p-4 w-1/4 ">
         <img src={product.imageCover} />
          
       
        </td>
         <td className='w-1/4'> 
         <h2  className=''>                            {product.title}</h2>
         <h2 className='pt-5 text-green-600 '>  {product.price}</h2>
         <button  className='text-red-800 pt-2' onClick={()=>deltecartss(product.id)} >Remove</button>
          
         
              </td>
              <td>            <button onClick={()=>addd(product.id)}                        className='w-1/4 p-5 bg-slate-600'>add to cart </button>                                </td>
      </tr> )}
        </td>

      </tr>:<Loadingt/>}
     
      
    </tbody>
  </table>
</div>


</>)}