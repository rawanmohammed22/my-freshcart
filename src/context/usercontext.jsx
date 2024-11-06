import React, { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
 





  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};




