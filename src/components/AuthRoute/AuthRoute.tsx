// @flow
import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export interface IAuthPageProps {}
const AuthRoute: React.FC<IAuthPageProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AuthCheck();
  }, [auth]);
  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("unauthoroad");
      navigate("/login");
    }
  });
  if (loading) return <p>...loading</p>;
  return <>{children}</>;
};
export default AuthRoute;
