import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Products from '../Products/Products';
import Loadingt from '../Loadingt/Loadingt';

export default function Categoryslider({product}) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    autoplay:true,
   autoplaySpeed:1000,

  };

 
  const [categories, setcategories] = useState([])
  async function getcategories(){
    
    let{data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)

  


    console.log(data.data)
    setcategories(data.data)



  }
 useEffect(()=>{

 getcategories()



                 },[])





  return (
   <> 
    <h1 className='text-gray-500'>shop popular categorie</h1>
   
    <Slider {...settings} className='relative px-3'>
   {categories?.map((category, index) => (
     <img key={index} src={category.image} className="md:w-full md:h-[200px]    sm:w-[300px] sm:h-[300px]                    px-3 " alt='kb'     />
   ))}
   {
    !product && <div className="flex text-center py-16  m-auto   absolute   justify-center items-center bg-black opacity-40 w-full  h-full rawan  ">
  

    <Loadingt/>
    
    </div>




   }
 
 </Slider>
 
 
 
 
 
 
 </>
  )
}
