import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/Cartcontext';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loadingt from '../Loadingt/Loadingt';

export default function AllOrders() {

  const [AllOrders, setAllOrders] = useState({})

  let{cart}= useContext(CartContext)

  async function getAllOrders() {
    try {
        const { data } = await axios.get(
            `https://ecommerce.routemisr.com/api/v1/orders/user/672b9bae4f0f1ef513f96f16`,
           );
        console.log(data);
        setAllOrders(data)
        
       
       
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}




   useEffect(()=>{

getAllOrders()

   },[])

  return (
   <>
       
   
   
   
   </>
  )
}
