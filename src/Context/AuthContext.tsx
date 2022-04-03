import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/init-firebase";
type ChildrentProp = {
  children: React.ReactNode;
};
export type AuthUser = {
  name: string;
  email: string;
};
type UserContextType = {
  currentUser: AuthUser | null;
};

const AuthContext = createContext<UserContextType | null>(null);

export const AuthProvider = ({ children }: ChildrentProp) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
    return unsubscriber;
  }, []);
  const login = (email: any, password: any) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const value = {
    currentUser,
    login,
  };
  return <AuthContext.Provider value={value}></AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
