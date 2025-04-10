import React, { useState } from "react";
import Navbar from "../Components/Navbar";

export default function LoginPage() {
  // States for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  
  // States for modal forms (Forgot Password / Create Account)
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  // Handle form submission for login
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Reset error messages
    setError("");
    
    // Form validation
    if (!username || !password) {
      setError("Username and password are required.");
      setIsFormValid(false);
      return;
    }

    // Sample login process (you can add real API call here)
    if (username === "admin" && password === "password123") {
      console.log("Logged in successfully!");
      // Proceed with user authentication logic
    } else {
      setError("Invalid username or password.");
      setIsFormValid(false);
    }
  };

  // Handle Forgot Password logic
  const handleForgotPassword = (event) => {
    event.preventDefault();
    // Implement password reset logic here (e.g., email verification).
    console.log("Password reset request sent");
    setShowForgotPassword(false);
  };

  // Handle Create Account logic
  const handleCreateAccount = (event) => {
    event.preventDefault();
    // Implement account creation logic here (e.g., save user data).
    console.log("Account created successfully");
    setShowCreateAccount(false); // Return to login after account creation
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {showCreateAccount ? "Create Account" : "Login"}
        </h2>

        {/* Login Form */}
        {!showForgotPassword && !showCreateAccount && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {!isFormValid && <div className="text-red-500 text-sm mb-4">{error}</div>}
            
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
        )}

        {/* Forgot Password Form */}
        {showForgotPassword && (
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email to reset password</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email address"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Reset Password
            </button>
            <div className="mt-4 text-center">
              <button
                className="text-blue-600"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </button>
            </div>
          </form>
        )}

        {/* Create Account Form */}
        {showCreateAccount && (
          <form onSubmit={handleCreateAccount}>
            <div className="mb-4">
              <label htmlFor="newUsername" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="newUsername"
                placeholder="Create a username"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="newPassword"
                placeholder="Create a password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create Account
            </button>
            <div className="mt-4 text-center">
              <button
                className="text-blue-600"
                onClick={() => setShowCreateAccount(false)}
              >
                Back to Login
              </button>
            </div>
          </form>
        )}

        {/* Links to Forgot Password and Create Account */}
        {!showForgotPassword && !showCreateAccount && (
          <div className="mt-4 text-center">
            <button
              className="text-blue-600"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot Password?
            </button>
            <br />
            <button
              className="text-blue-600"
              onClick={() => setShowCreateAccount(true)}
            >
              Create an Account
            </button>
          </div>
        )}
      </div>
        
    
    </div>
  );
  
}
