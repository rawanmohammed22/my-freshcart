import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Brands from './components/Brands/Brands.jsx';
import Cart from './components/Cart/Cart.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Products from './components/Products/Products.jsx';
import Home from './components/Home/Home.jsx';
import Category from './components/Category/Category.jsx';
import { UserProvider } from './context/usercontext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import CartContextProvider from './context/Cartcontext';


import Details from './components/Details/Details.jsx';
import { Toaster } from 'react-hot-toast';
import List from './components/List/List.jsx';
import Items from './components/Items/Items.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import AllOrders from './components/AllOrders/AllOrders.jsx';


const routers = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute><Items /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
    {path:'whishlist'  ,  element: <ProtectedRoute><List /></ProtectedRoute>                                                                       },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'category', element: <ProtectedRoute><Category /></ProtectedRoute> },
      { path: 'navbar', element: <ProtectedRoute><Navbar /></ProtectedRoute> },
      { path: 'details/:id', element: <ProtectedRoute> <Details/></ProtectedRoute> },
      { path: 'Products', element: <ProtectedRoute> <Details/></ProtectedRoute> },
      { path: 'checkout', element: <ProtectedRoute> <Checkout/></ProtectedRoute> },
      { path: 'allorders', element: <ProtectedRoute> <AllOrders/></ProtectedRoute> }
     
    ],
  },
]);

function App() {






  return (
    <CartContextProvider>
    <UserProvider>
      <RouterProvider router={routers} />
    </UserProvider>
    <Toaster />
    </CartContextProvider>
  );
}

export default App;

