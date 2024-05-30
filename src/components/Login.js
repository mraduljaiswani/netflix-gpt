import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BackgroundImage, MradulPhoto } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  const handleClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!IsSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: MradulPhoto,
          })
            .then(() => {
              const { email, uid, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img className=" absolute " src={BackgroundImage} alt="" />
      </div>
      <form
        className="form-container bg-black mx-auto my-36 left-0 right-0 p-14 w-3/12 absolute rounded-lg shadow-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-semibold text-white mb-6">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            type="text"
            className="input-field w-full mb-4 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            placeholder="Name"
            ref={name}
          />
        )}
        <input
          type="text"
          className="input-field w-full mb-4 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          placeholder="Email"
          ref={email}
        />
        <input
          type="password"
          className="input-field w-full mb-6 p-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          placeholder="Password"
          ref={password}
        />

        <span className="font-semibold text-red-600">{ErrorMessage}</span>
        <button
          className="w-full mt-4 mb-4 p-3 bg-red-600 text-white rounded font-semibold hover:bg-red-700"
          onClick={handleClick}
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 mt-4">
          {IsSignInForm ? "New to Netflix? " : "Already Registered? "}
          <span
            onClick={toggleSignInForm}
            className="text-white hover:underline cursor-pointer"
          >
            {IsSignInForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
