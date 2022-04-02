import React, { createContext, useContext, useEffect, useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../utils/init-firebase'
type ChildrentProp=
{
    children : React.ReactNode
}
type loginProp = {
    email : string,
    password : string
}

 const AuthContext = createContext({
     currentUser : null
 })
export const useAuth = () => useContext(AuthContext)
const login = ({email,password} : loginProp) =>{
 return signInWithEmailAndPassword(auth, email, password)
} 

export default function AuthContextProvier({children} : ChildrentProp) {
     const [currentUser, setCurrentUser] = useState(null)
     const value = {
        currentUser,
     }
     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
 
    }