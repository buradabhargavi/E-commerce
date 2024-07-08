import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Store/AuthContent/Auth-Context";

const ForgotPassword = () => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;

    if (enteredNewPassword !== enteredConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA8GNjdMz5gejxIq0E9wkfqAnGYkALjRPU",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: authContext.token,
            password: enteredNewPassword,
            returnSecureToken: false,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Password change failed");
      }

      console.log("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password:", error.message);
      alert(`Failed to change password. Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login template my-4  d-flex justify-content-center align-items-center">
      <div className=" w-50 p-5 bg-info rounded-4">
        <form onSubmit={submitHandler}>
          <div className="mb-4 text-dark">
            <label htmlFor="email" className="mb-2 ">
              Email
            </label>
            <input
              required
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="form-control"
            />
          </div>

          <div className="mb-4 text-dark">
            <label htmlFor="newPassword" className="mb-2">
              New Password
            </label>
            <input
              required
              ref={newPasswordRef}
              type="password"
              placeholder="Enter New Password"
              className="form-control"
            />
          </div>

          <div className="mb-4 text-dark">
            <label htmlFor="confirmPassword" className="mb-2">
              Confirm Password
            </label>
            <input
              required
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm New Password"
              className="form-control"
            />
          </div>

          <div className="pt-3 d-grid">
            <button type="submit" className="btn btn-primary">
              {isLoading ? "Updating..." : "Update Password"}
            </button>
          </div>
          <p className="text-light  mt-3">
            <Link className="px-3 text-decoration-none" to="/signin">
              Click here To Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
