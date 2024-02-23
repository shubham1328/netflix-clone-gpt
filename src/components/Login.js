import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="w-full h-full object-cover object-center"
          alt="bglogo"
        />
      </div>
      <form className="sm:w-full md:w-1/3 lg:w-3/12 xl:w-3/12 2xl:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sing Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 text-white w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sing Up"}
        </button>
        <p
          className=" text-white w-full text-center cursor-pointer"
          onClick={toggleSigninForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
