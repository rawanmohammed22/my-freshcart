import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/Cartcontext';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loadingt from '../Loadingt/Loadingt';

export default function Category() {

  const [Category, setCategory] = useState([])

  async function getCategory() {
    try {
        const { data } = await axios.get(
            `https://ecommerce.routemisr.com/api/v1/categories`,
           );
        console.log(localStorage.getItem('usertoken'));
        setCategory(data.data)
        
       
       
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}




   useEffect(()=>{

getCategory()

   },[])

  return (
   <>
        {Category?<div className="flex flex-wrap   container  ">
 
                                                            
    {Category?.map((Category)=>  
        
      <div>
<img src={Category.image} className=' w-[300px] p-5 h-[300px] '          />
<h1 className=' text-gray-600  font-bold text-2xl  '>      {Category.name}  
                                                        </h1>
                                                        

</div>
       
        
        
        
     
     )}
     
     
  
</div>
:<Loadingt/>}
    
   
   
   
   </>
  )
}


