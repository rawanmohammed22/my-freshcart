import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/Cartcontext';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loadingt from '../Loadingt/Loadingt';

export default function Brands() {

  const [brands, setbrands] = useState([])

  async function getbrands() {
    try {
        const { data } = await axios.get(
            `https://ecommerce.routemisr.com/api/v1/brands`,
           );
        console.log(data);
        setbrands(data.data)
        
       
       
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}




   useEffect(()=>{

getbrands()

   },[])

  return (
   <>
        {brands?<div className="flex flex-wrap p-4 m-4">
 
                                                            
    {brands?.map((brand)=>  
        
      

<img src={brand.image}/>


       
        
        
        
     
     )}
     
     
  
</div>
:<Loadingt/>}
    
   
   
   
   </>
  )
}
