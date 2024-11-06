
import style from './Checkout.module.css';
import { useFormik } from 'formik';

import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/Cartcontext';
import axios from 'axios';

export default function Checkout() {
  const [loading, setloading] = useState(false)

  const token = localStorage.getItem('usertoken');
  if (!token) {
    console.error("User token is missing");
  }
  
 
  let{cart}=useContext(CartContext)  
 




  
  async function Checkoutsession(shippingAddress) {
   
  
    try {
      setloading(true)
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.cartId}?url=http://localhost:5176`,
        { shippingAddress },
        {
          headers: {
            token: localStorage.getItem('usertoken'),
          },
        }
      )
     setloading(false) 
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error in Checkoutsession:", error);
      setloading(false) 
    }
  }
  


async function Checkout(values) {

  let response = await  Checkoutsession(values)

   if (response.status == 'success'){

      window.location.href  = response.session.url
   }
  
}

 
    
     
   
     
  
  const formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city:''
    },
  
    onSubmit:Checkout,
  });

  return (
    <>


      <div className="container">
        <h1 className="py-8 font-bold m-auto uppercase mt-6">Checkt</h1>
   


        <form onSubmit={formik.handleSubmit} className="m-auto">
          <div className="mb-5">
            <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Details:
            </label>
            <input
              type="text"
              name="details"
              id="details"
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              required
            />
            {formik.touched.details && formik.errors.details && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{formik.errors.details}</span>
              </div>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{formik.errors.phone}</span>
              </div>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              city:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {formik.touched.city && formik.errors.city && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{formik.errors.city}</span>
              </div>
            )}
          </div>


          
          { loading? 
<button type="button"  className=      "        absolute    right-16  text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"><i className="fa-solid fa-spinner"></i></button>
:
<button type="submit"  className=      "        absolute    right-16  text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">submit</button>

}
          
        </form>
       
      </div>
     
    </>
  );
}
