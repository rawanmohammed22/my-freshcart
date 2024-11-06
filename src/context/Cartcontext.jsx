import axios from 'axios';
import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState({});

    async function addToCart(productId) {
        try {
            const { data } = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/cart`,
                { productId },
                {
                    headers: {
                        token: localStorage?.getItem('usertoken'),
                    },
                }
                 
            );
            
            setCart(data)
            
            toast.success(data.message,{
                duration:1000
            })

            return data
           
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    }

  




    async function addToWhishlist(productId) {
        try {
            const { data } = await axios.post(
                `https://ecommerce.routemisr.com/api/v1/wishlist`,
                { productId },
                {
                    headers: {
                        token: localStorage?.getItem('usertoken'),
                    },
                }
                 
            );
            console.log(data);
            
            toast.success(data.message,{
                duration:1000
            })
        

            return data
           
        } catch (error) {
            console.error("Error adding to whishlist:", error);
        }
    }









    async function updateCart(productId,count) {

   
        
   

        try {
            const { data } = await axios.put(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
                {count},
                {
                    headers: {
                        token: localStorage?.getItem('usertoken'),
                    },
                }
            );
           
            setCart(data)
            return data
           
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
   

    }


    async function getWhishlist() {
        try {
            const { data } = await axios.get(
                `https://ecommerce.routemisr.com/api/v1/wishlist`,
               
                {
                    headers: {
                        token: localStorage?.getItem('usertoken'),
                    },
                }
            );
            console.log(data);
            
            return data
           
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    }


    async function getCart() {
        try {
            const { data } = await axios.get(
                `https://ecommerce.routemisr.com/api/v1/cart`,
               
                {
                    headers: {
                        token: localStorage?.getItem('usertoken'),
                    },
                }
            );
            console.log(data);
            setCart(data)
            console.log(cart)
            return data
           
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    }

    async function deleteCart(productId) {
        try {
            const { data } = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
               
                {
                    headers: {
                        token: localStorage?.getItem('usertoken'),
                    },
                }
            );
           
            setCart(data)
            return data
           
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    }


    async function deletewhishlist(productId) {
        try {
            const { data } = await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
               
                {
                    headers: {
                        token: localStorage?.getItem('usertoken'),
                    },
                }
            );
           
            
            return data
           
        } catch (error) {
            console.error("Error adding to whishlist:", error);
        }
    }


   
    
    






    return (
        <CartContext.Provider value={{ cart, setCart, addToCart,getCart,updateCart,deleteCart, addToWhishlist, getWhishlist,deletewhishlist }}>
            {children}
        </CartContext.Provider>
    );
}

