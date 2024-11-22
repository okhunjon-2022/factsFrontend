import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };

    try {
      await registerUser(data).unwrap();
      toast.success("Registration is successfully!");
      navigate("/login");
    } catch (error) {
      setMessage("Registration failed.");
    }
  };

  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-36">
      <h2 className="text-2xl font-semibold pt-5 ">Please Register</h2>
      <form
        onSubmit={handleRegister}
        className="space-y-5 max-w-sm mx-auto pt-8"
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          required
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {message && <p className="text-red-500">{message}</p>}
        <button className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium rounded-md py-3">
          Register
        </button>
      </form>
      <p className="my-5 text-center">
        Already have an account?{" "}
        <Link className="text-red-700 italic" to="/login">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
