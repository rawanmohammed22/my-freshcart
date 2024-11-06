import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { useFormik, validateYupSchema } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/usercontext'


export default function Register() {


  let {setUserData}  =useContext(UserContext)
      

  const [loading, setloading] = useState(false)


  let navigate = useNavigate()

  const [apierror, setapierror] = useState(null)
   

  async function register(value) { 
     
   


      try {
        setloading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, value);

           localStorage.setItem('usertoken', data.token)
        console.log(data); 
        
        
        navigate('/')
        

        setUserData(data.token)
      
        
        
      } catch (err) {
        console.log(err.response.data.message);
        setapierror(err.response.data.message)
        setloading(false)
      }
     
     
   
  
}
  
       
    
  




  let validationSchema = yup.object().shape({
    name: yup.string()
      .min(2, 'min is 2')
      .max(14, 'max is 14')
      .required('name is required'),
    
    email: yup.string()
      .email('email is invalid')
      .required('email is required'),
  
    password: yup.string()
      .matches(/^[A-Z][A-Za-z0-9@#$%^&+=]{5,10}$/, 'password must be like Ahmed@123')
      .required('password is required'),
    
    rePassword: yup.string()
      .oneOf([yup.ref('password')], 'passwords don\'t match')
      .required('password is required'),
  
    Phone: yup.string()
      .matches(/^01[1250][0-9]{8}$/, 'phone must be Egyptian')
      .required('phone is required')
  });
  





   let formik =   useFormik({

   initialValues:{
    name: '',
    email:'',
    password:'',
    rePassword:'',
    Phone:''


   },onSubmit:register,
    validationSchema









   })






















  return (
    <>                                               
     
     <div className="container    ">  
 <h1  className='py-8  font-bold   m-auto    uppercase   mt-6 ooo     '>register now</h1>
  
  <form onSubmit={formik.handleSubmit} className='    m-auto ooo     ' >
  
  { apierror && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{apierror}</span> 
</div>                                      }


  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name:</label>
    <input type="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="name" 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  { formik.errors.name && formik.touched.name && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.name}</span> 
</div>                                      }

<div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> email:</label>
    <input type="email"  name='email'  value={formik.values.email}   onChange={formik.handleChange}   onBlur={formik.handleBlur}               id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"  required />
  </div>
  { formik.errors.email && formik.touched.email && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.email}</span> 
</div>                                      }



<div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password:</label>
    <input type="password" id="password"  name='password'  value={formik.values.password}     onChange={formik.handleChange}     onBlur={formik.handleBlur}        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  { formik.errors.password && formik.touched.password && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.password}</span> 
</div>                                      }




  <div className="mb-5">
    <label htmlFor="repassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">repassword:</label>
    <input type="password" id="repassword" name='rePassword'  value={formik.values.rePassword}   onChange={formik.handleChange} onBlur={formik.handleBlur}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" required />
  </div>
  { formik.errors.rePassword && formik.touched.rePassword && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.rePassword}</span> 
</div>                                      }
  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> phone:</label>
    <input type="tel" id="phone"  name='Phone'  value={formik.values.Phone}  onChange={formik.handleChange}  onBlur={formik.handleBlur}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:outline-none focus:ring-2 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" required />
  </div>
  { formik.errors.Phone && formik.touched.Phone && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.Phone}</span> 
</div>                                      }

  
{ loading? 
<button type="button"  className=      "        absolute    right-16  text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"><i className="fa-solid fa-spinner"></i></button>
:
<button type="submit"  className=      "        absolute    right-16  text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">submit</button>

}
</form>
    
           
</div></>
  )
}
