
import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
  
    
    
  if (localStorage.getItem('usertoken')) {
  console.log('User is authenticated');
  return children;
} else {
  console.log('User is not authenticated');
  return <Navigate to={'/login'} />;
}


}





