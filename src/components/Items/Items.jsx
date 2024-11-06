import React, { useEffect, useState } from 'react'
import style from './Items.module.css'
import axios, { Axios } from 'axios'
import Products from '../Products/Products'
import Loadingt from '../Loadingt/Loadingt'
import Categoryslider from '../Categoryslider/Categoryslider'
import Mainslider from '../Mainslider/Mainslider'

export default function Items() {
 const [products, setproducts] = useState([])







   async function getrecentproducts(){

    let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)


   

    setproducts(data.data)


  }

  useEffect(()=>{
  

    getrecentproducts()




  },[])

  


  

      
     
  return (










    
    <>
   
  
      
    
    
    
    <h1  className='font-bold'>Recent Products</h1>
    
   {products.length?

   <div className="flex ooo container    flex-wrap">
    
  
   {products.map((product,index)=><Products product={product} key={index}          />)}
  
 
  
  
  
 
</div>: <div className="flex text-center py-16  m-auto   absolute   justify-center items-center bg-black opacity-40 w-full  h-full rawan  ">
  

  <Loadingt/>
  
  </div>
   }

    </>


    
  )
    
    
    
    
    
    
    
    
    
  
}


