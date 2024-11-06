import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import { CartContext } from '../../context/Cartcontext';


export default function Details() {



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
   autoplaySpeed:1000,

  };




  const [oneproduct, setoneproduct] = useState({})
     let{addToCart}=useContext(CartContext)

  let {id} =useParams()
  localStorage.setItem('id',id)
 
  async function getoneproduct(id) {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    
    console.log(data.data)
    setoneproduct(data.data)
   
  }

  useEffect(()=>{
 
    getoneproduct(localStorage.getItem('id'))
   




  },[])
  return (
    <>

   <div className="flex  justify-between  pt-9">
     


     <div className="w-1/4    ">
     
     <Slider {...settings}>
  {oneproduct?.images?.map((image, index) => (
    <img key={index} src={image} className="w-full" alt={`image-${index}`} />
  ))}
</Slider>


  
     
     </div>


   <div className="w-3/4  pt-8  mt-9         ">
  
      <div className="mt-9 ml-9 ">
     <h1 className='mt-3 font-bold   text-gray-800  mb-2    '>                             {oneproduct.title}        </h1>
     <p   className='text-gray-600 font-thin mb-2      '> {oneproduct.description
     }   </p>
    <div className="flex   justify-between   "> <p  className=' text-gray-900   font-thin'>   {oneproduct.price}  EGP             </p>
   <div className="flex   justify-between mt-2 "> <p  className=' text-gray-900     font-thin'>   {oneproduct.ratingsAverage}             </p> <i class="fa-solid fa-star text-yellow-400 mt-1 ml-1 "></i>  </div>
   <i className="fa-solid fa-heart"></i>
    </div> 

     
   
   
   
   </div>
   <button className='btn mt-3 bg-green-400  ml-11  text-center w-10/12     ' onClick={()=>addToCart(oneproduct.id)}  > +Add </button>
   </div>


   </div>
   
  


    </>
  )
}

