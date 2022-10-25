import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/protectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      {/*wrapping contents inside authcontext*/}
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
