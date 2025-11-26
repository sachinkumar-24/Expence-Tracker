import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const navigate= useNavigate();

  const handleSubmit=(e)=>{
        e.preventDefault();

        if(name==="")
        {
            setMessage("Name is mandatory");
            return
        }
          if(email==="")
        {
            setMessage("Email is mandatory");
            return
        }
        if(password!==confirm)
        {
            setMessage("Passwords do not match")
            return
        }
        const user={name,email,password};
        localStorage.setItem("user",JSON.stringify(user));

        setMessage("SignUp Successful");
        setName("");
        setEmail("")
        setPassword("")
        setConfirm("")

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-purple-400">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center text-black-600 mb-6">
          Create Account
        </h2>

        {message && (
            <p className={`mb-4 text-center font-medium ${message.includes("Successful")?"text-green-600":"text-red-600"}`}>{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

           <input
            type="password"
            placeholder="Enter the password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

            <button type="submit" className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition">SignUp</button>

        </form>
    
        <div className="mt-6 text-center text-sm text-gray-600">

            <p className="mb-2">
                <button className="text-blue-600 hover:underline hover:text-blue-700">
                    Forget Password
                </button>

               <p  className="mb-2"> 
                Already have an account? 
                  <button onClick={()=>navigate("/login")} className="text-blue-600 hover:underline hover:text-blue-700">
                    Login
                </button>
               </p>
            </p>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
