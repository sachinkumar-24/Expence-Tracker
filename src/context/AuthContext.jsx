import React, { useEffect, useState } from 'react'
import { createContext } from 'react';

export const AuthContext =createContext();

export const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLogin]=useState(false);

    useEffect(()=>{
        const storedData=localStorage.getItem('isLoggedIn');
        if(storedData)
        {
            setIsLogin(true);
        }

    },[])

    const login=()=>{
        localStorage.setItem("isLoggedIn",true);
        setIsLogin(true);
    }

    const logout=()=>{
         localStorage.removeItem("isLoggedIn");
        setIsLogin(false);
    }

  return (
        <AuthContext.Provider value={{isLoggedIn, login,logout}}>
            {children}
        </AuthContext.Provider>
  )
}

