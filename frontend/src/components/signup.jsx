import { useState } from "react";
import axios from "axios";
import { APIURL } from "../../utills";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
   const navigate=useNavigate()
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      `${APIURL}/api/v1/user/signup`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
                withCredentials:true

      }
    );

    setMessage(res.data.message);
    setEmail("");
    setPassword("");
    navigate("/home")
    window.localStorage.setItem("isLoggedIn",true)
  } catch (err) {
    setMessage(err.response?.data?.message || "Signup failed");
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        <a href="/login">already have an account click <span className="text-blue-500 underline">Login</span></a>
      </form>
    </div>
  );
}
