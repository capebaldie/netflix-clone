import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuthentication } from "../context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const { user, logIn } = UserAuthentication;
  const { user, logIn } = UserAuthentication();
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://i.ibb.co/vXqDmnh/background.jpg"
          className="block absolute w-full h-full object-cover"
          alt="background"
        />
        <div className="bg-black/40 fixed top-0 left-0 w-full h-screen"></div>
        <div className="absolute w-full h-full bg-gradient-to-b from-black/60"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[450px] mx-auto bg-black/75 text-white rounded-md">
            <div className="max-w-[320px] mx-auto py-10">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form
                onSubmit={formSubmit}
                className=" flex flex-col justify-center py-5"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="rounded p-3 my-4 bg-slate-200 text-black"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="rounded p-3 my-4 bg-slate-200 text-black"
                />
                <button className="bg-red-600 rounded p-3 my-4 hover:bg-red-700">
                  Sign In
                </button>
                <div className="flex justify-between text-sm text-slate-500">
                  <p>
                    <input type="checkbox" className="mr-1" />
                    Remember Me
                  </p>
                  <a href="https://help.netflix.com/en/">
                    <p className="cursor-pointer hover:text-slate-100">
                      Need help?
                    </p>
                  </a>
                </div>
                <p className="py-4 text-center cursor-pointer">
                  <span className="text-sm text-slate-500 pr-3">
                    new to netflix?
                  </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
