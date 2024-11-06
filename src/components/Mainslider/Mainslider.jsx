import React from 'react'
import Slider from "react-slick";
import image1 from '../../assets/images/slider-image-1.jpeg'
import image2 from '../../assets/images/slider-image-2.jpeg'
import image3 from '../../assets/images/slider-image-3.jpeg'
import image4 from '../../assets/images/slider-2.jpeg'
export default function Mainslider() {


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

  return (
   <>


 <div className="flex justify-center items-center rahma ">
<div className="w-3/4 py-7 px-5">
<Slider {...settings}>
 <img  src={image1}  className='md:w-full md:h-[400px] sm:w-[100px]    sm:h-[100px]           '                        />
 <img  src={image2}   className='md:w-full md:h-[400px] sm:w-[100px]    sm:h-[100px]     '                            />
 <img  src={image3}     className='md:w-full md:h-[400px] sm:w-[100px]    sm:h-[100px]       '                          />



</Slider>
  
  </div>

  <div className="w-1/4 py-4">
  
  
  <img  src={image2}   className='md:w-[200px] md:h-[210px] sm:w-[150px]    sm:h-[200px]       '                            />
  <img  src={image4}     className='md:w-[200px] md:h-[210px] sm:w-[150px]    sm:h-[200px]       '                          />
  
  </div>
  
  </div>
   
   
   
   
   </>
  )
}
