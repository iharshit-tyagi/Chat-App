import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import TrackAuthStatus from "./TrackAuthStatus";
import { db } from "../firebase";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const avatar = useRef(null);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleRegister = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );
      // Signed up
      const user = res.user;

      //For creating the reference to the image which will be uploaded
      const imageRef = ref(storage, `userAvatars/${name}`);

      //Before Updating the profile , i need photo url as well , to update the url in firebase
      const uploadTask = uploadBytesResumable(
        imageRef,
        avatar.current.files[0]
      );

      uploadTask.on(
        (error) => {
          alert("Image is not Uploaded");
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: name,
              email: res.user.email,
              photoURL: user.photoURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
          });
        }
      );
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      alert(errorMessage);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
      {/* <TrackAuthStatus /> */}
      <form className=" flex gap-4 flex-col p-9 w-1/3 bg-gray-300 ">
        <h2 className="mx-auto text-lg font-semibold ">NexTalk</h2>
        <p className="font-semibold"> Register</p>
        <input
          onChange={handleChange}
          className="p-1 focus:border-none border-b-2 focus:outline-none"
          type="text"
          placeholder="Display Name"
          // value={name}
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
          ref={avatar}
          id="avatar"
          className="hidden"
          type="file"
          placeholder="Avatar"
        />
        <button
          type="button"
          onClick={handleRegister}
          className=" rounded-sm bg-slate-400 text-lg text-center p-2"
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
