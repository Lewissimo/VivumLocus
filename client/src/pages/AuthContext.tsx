import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { JwtPayload, jwtDecode } from 'jwt-decode';


interface AuthContextInterface{
    userLogin: (email : string, password : string) => Promise<number>;
    signOutUser: () => void;
    user: JwtPayload | null;
    
}


export const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const apiURL = 'http://localhost:5000/api';
const AuthContextProvider = ({children} : {children : ReactNode}) => {
    const [user, setUser] = useState<JwtPayload | null>(null);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }, [])

    const signOutUser = () => {
        localStorage.removeItem('token');
        setUser(null);
    }

    const userLogin = async (email: string, password: string) => {
        try{
            const response = await fetch(`${apiURL}/users/login`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw response;
              }
              if(response.status === 401){
                return 401;
              }
              if(response.status === 200){
                  const data = await response.json();
                  const decoded = jwtDecode(data.token);
                  console.log(decoded);
                  setUser(decoded);
                  
                setUser(data);
                  localStorage.setItem('token', data.token);
                  return 200;
              }
              else{
                return 1;
              }
              
        }
        catch(err){
            console.log(err);
            return 1;
        }
    }

    const registerUser = () => {}

    const value = {
        userLogin,
        signOutUser,
        user
    }
    return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider