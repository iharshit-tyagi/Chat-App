import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TrackAuthStatus = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        navigate("/home");
        // ...
      } else {
        // User is signed out
        // ...
        // navigate("/");
      }
    });

    () => unsubscribe();
  }, []);

  return null;
};

export default TrackAuthStatus;
