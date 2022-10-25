import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuthentication } from "../context/AuthContext";
export default function ProtectedRoute({ children }) {
  const { user } = UserAuthentication();
  if (!user) {
    <Navigate to="/" />;
  } else {
    return children;
  }
}
