import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './homePage';

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (userName === "Mbale" && password === "Mbale2024") {
        setLoginSuccess(true);
        navigate('/Home'); 
      } else {
        alert("Incorrect login details");
        setLoading(false);
      }
    }, 1000); 
  }

  const handleEmailChange = (event) => {
    setUserName(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loginSuccess ? (
        <div>
          <Home />
        </div>
      ) : (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:border-blue-500"
                required
                value={userName}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 text-lg border rounded-md focus:outline-none focus:border-blue-500"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className={`w-full py-2 text-lg font-semibold text-white rounded-md ${loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'}`}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
          <p className='text-slate-400'>Eugene</p>
        </div>
      )}
    </div>
  );
}
