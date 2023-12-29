import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import TrackAuthStatus from "./TrackAuthStatus";
const RegisterPage = () => {
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const avatar = useRef(null);

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
      const imageRef = ref(storage, `userAvatars/${name.current.value}`);

      //Before Updating the profile , i need photo url as well , to update the url in firebase
      const uploadTask = uploadBytesResumable(
        imageRef,
        avatar.current.files[0]
      );
      console.log(name.current.value);
      uploadTask.on(
        (error) => {
          alert("Image is not Uploaded");
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(name.current.value);
            await updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: downloadURL,
            });
          });
        }
      );

      // await setDoc(doc(db, "users", res.user.uid), {
      //   uid: res.user.uid,
      //   displayName: res.user.displayName,
      //   email: res.user.email,
      //   photoURL: res.user.photoURL,
      // });
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
    }
  };

  return (
    <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
      <TrackAuthStatus />
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
          ref={avatar}
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
