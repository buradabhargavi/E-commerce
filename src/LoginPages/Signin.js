import React, { useContext, useRef } from "react";
import AuthContext from "../Store/AuthContent/Auth-Context";
import { Link } from "react-router-dom";

const SignIn = () => {
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const authContext = useContext(AuthContext);
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = userEmailRef.current.value;
    const enteredPassword = userPasswordRef.current.value;
    try {
      const response = fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8GNjdMz5gejxIq0E9wkfqAnGYkALjRPU",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response;
      if (data.ok) {
        const authData = await data.json();
        console.log(authData);
        console.log(authContext.login);
        authContext.login(authData);
      } else {
        let errorMessage = "Authentication failed";
        throw new Error(errorMessage);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="login template my-4  d-flex justify-content-center align-items-center">
      <div className=" w-25 p-3 bg-dark rounded-4">
        <form onSubmit={submitHandler}>
          <h3 className="text-center mb-3 text-light">Sign In</h3>
          <div className="mb-4 text-light">
            <label htmlFor="email" className="mb-2 ">
              Email
            </label>
            <input
              type="email"
              ref={userEmailRef}
              placeholder="Enter your Email"
              className="form-control"
            />
          </div>
          <div className="mb-4 text-light">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              ref={userPasswordRef}
              placeholder="Enter your Password"
              className="form-control"
            />
          </div>
          <div className="pt-3 d-grid">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className="text-light   mt-2">
            <Link className="px-2 text-decoration-none" to="/forgotPassword">
              Forgot Password
            </Link>
            <Link className="px-2 " to="/signup">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
