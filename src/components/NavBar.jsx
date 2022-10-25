import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuthentication } from "../context/AuthContext";

export default function NavBar() {
  const { user, logOut } = UserAuthentication();
  const navigate = useNavigate();
  //console.log(user.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 h-12 w-full absolute z-[100]">
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
          alt="netflix logo"
          className="cursor-pointer w-20"
        />
      </Link>
      {/*  if there is a user then display this, if not then display the other one */}
      {user?.email ? (
        <div className="flex">
          <Link to="/account">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              className="cursor-pointer mr-5 w-9 rounded"
              alt="img"
            />
          </Link>
          <button
            className=" bg-red-600 hover:bg-red-700 px-4 py-1.5 cursor-pointer text-white rounded"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className=" px-4 py-1.5 cursor-pointer text-white rounded mr-2 hover:bg-slate-100 hover:text-black ease-in duration-100">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className=" bg-red-600 hover:bg-red-700 px-4 py-1.5 cursor-pointer text-white rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
