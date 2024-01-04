import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { clearChatInfo } from "../utils/chatSlice";
const TrackAuthStatus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { displayName, photoURL, uid, email } = user;
        dispatch(
          addUser({
            displayName,
            photoURL,
            uid,
            email,
          })
        );
        navigate("/home");
        // ...
      } else {
        // User is signed out
        // ...
        navigate("/");
        dispatch(removeUser());
        dispatch(clearChatInfo());
      }
    });

    () => unsubscribe();
  }, []);

  return null;
};

export default TrackAuthStatus;
