import React from "react";
import { createContext, useEffect, useState, useContext } from "react";
//this is imported from firebase component
import { authentication, database } from "../firebase";
//this is for sign,login etc...
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
//this is for string data in cloud
import { setDoc, doc } from "firebase/firestore";
//creating
const AuthContext = createContext();
//adding child as props
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({}); //users will be stored as objects

  /*   function signUp(email, password) {
    createUserWithEmailAndPassword(authentication, email, password);
    setDoc(doc(database, "users", email), {
      savedShows: [],
    });
  } */
  const signUp = (email, password) => {
    //setdoc updates cloud storage with given data when signup function runs
    setDoc(doc(database, "users", email), {
      savedShows: [],
    });
    return createUserWithEmailAndPassword(authentication, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(authentication, email, password);
  };

  const logOut = () => {
    return signOut(authentication);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(authentication, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unSubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuthentication = () => {
  return useContext(AuthContext);
};
