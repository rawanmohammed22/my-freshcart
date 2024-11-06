import React, { useContext, useEffect } from 'react'
import style from './Products.module.css'
import { Link, Navigate } from 'react-router-dom'
import Details from '../Details/Details'
import axios from 'axios'
import Cartcontextprovider, { CartContext } from '../../context/Cartcontext'
export default function Products({product}) {
   

     let{addToCart}    = useContext(CartContext)
     let {addToWhishlist} = useContext(CartContext)

 


  


  return (






    <> 



    






    <div className=" md:w-1/4 sm:w-full  p-4  product ">
     <div>
    <Link to={`/details/${product.id}`}                      >
     <img    src={product.imageCover}                          />
     <p  className='  text-green-500  font-thin      '>            {product.category.name}                       </p>
     <p className='my-3 font-bold   text-gray-800      '>                             {product.title}        </p>
    <div className="flex"> <p  className=' text-gray-900   pr-3 pr-8 font-thin'>   {product.price}  EGP             </p>
   <div className="flex  "> <p  className=' text-gray-900     font-thin'>   {product.ratingsAverage}             </p> <i class="fa-solid fa-star text-yellow-400 mt-1 ml-1 "></i>  </div>
         <i className="fa-solid fa-heart pt-11   hover:text-red-500        " onClick={()=>addToWhishlist(product.id)}></i>  </div> 

    </Link>
    <button className='btn mt-3 bg-green-400  ml-2  text-center w-full' onClick={() =>  addToCart(product.id)} > +Add </button>
    
    </div>
    </div>
   
    
    
    
    
    
    </>
  )
}
