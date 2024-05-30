import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  return (
    <>
      <div className=" absolute w-screen px-8  py-4 z-10 bg-gradient-to-b from-black flex justify-between">
        <img className="w-1/5 -mt-4" src="/Netflix_Logo_PMS.png" alt="" />
        {user && (
          <div className="flex">
            <span className=" p-2 m-2 h-10 mt-10 font-semibold text-cyan-200 ">
              {user.displayName.toUpperCase()}
            </span>
            {showGpt && (
              <select
                onChange={handleLangChange}
                name="Language"
                id=""
                className="p-2 m-2 h-10 mt-10 font-semibold bg-cyan-200  rounded-lg"
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="p-2 m-2 h-10 mt-10 font-semibold bg-cyan-200  rounded-lg"
              onClick={handleGPTSearch}
            >
              {showGpt ? "HomePage" : "GPT Search"}
            </button>
            <img
              className=" w-16 h-16 mt-5 "
              // src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
              src={user.photoURL}
              alt=""
            />
            <button
              className=" p-2 h-10 mt-10 m-2 rounded-lg font-semibold text-white bg-red-600 "
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
