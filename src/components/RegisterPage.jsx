import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const RegisterPage = () => {
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleRegister = () => {
    registerNewUser();
  };
  const registerNewUser = async () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user.email);
        navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
      <form className=" flex gap-4 flex-col p-9 w-1/3 bg-white">
        <h2 className="mx-auto text-lg font-semibold ">NexTalk</h2>
        <p className="font-semibold"> Register</p>
        <input
          ref={name}
          className="p-1 focus:border-none border-b-2 focus:outline-none"
          type="text"
          placeholder="Display Name"
        />

        <input
          ref={email}
          className="p-1 focus:border-none border-b-2 focus:outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-2 border-b-2 outline-none"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="avatar">
          <img
            className="w-10 inline"
            src="https://cdn-icons-png.flaticon.com/512/8377/8377243.png"
          />{" "}
          <span>Choose an Avatar</span>
        </label>
        <input
          id="avatar"
          className="hidden"
          type="file"
          placeholder="Avatar"
        />
        <button
          type="button"
          onClick={handleRegister}
          className=" border border-blue-200  text-center p-2"
        >
          Register
        </button>
        <div className=" flex gap-1">
          <p>Already a user? </p>
          <Link to={"/"}>
            <p className=" hover:underline text-gray-700">Sign In</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
