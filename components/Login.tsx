"use client";
import Image from "next/image";
import googleIcon from "../public/googleIcon.png";
import facebookIcon from "../public/facebookIcon.png";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./Firebase";
import { useState } from "react";
import Homepage from "./Homepage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import layerpathImg from "../public/layerpathImg.png";
const App = app;
const provider = new GoogleAuthProvider();
const auth = getAuth();

export default function () {
  const [uidVal, setUid] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
    } else {
      setUid("");
    }
  });

  function signInGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user: ", user);
        setUid(user.uid);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  function signOutGoogle() {
    signOut(auth)
      .then(() => {
        setUid("");
      })
      .catch((error) => {
        // An error happened.
        alert("Error while signing out.");
      });
  }

  return uidVal.length > 2 ? (
    <Homepage signOutFunc={signOutGoogle} uid={uidVal} />
  ) : (
    <div className="container h-[100vh] ">
      <div className=" absolute left-[50%] top-[30%]">
        <div className="relative right-[50%] shadow-lg h-[fit-content] w-[50vh] rounded-2xl p-2">
          <div className="text-center font-semibold">Login/SignUp</div>
          <Image
            src={layerpathImg}
            alt="LayerPath"
            className=" bg-gray-100"
            height={250}
          />
          <hr />
          <div className="row pl-2 pr-2">
            <div
              className="col text-center hover:bg-blue-200 shadow-md rounded mr-1 hover:cursor-pointer border-t pt-1 pb-1"
              onClick={(e) => signInGoogle()}
            >
              <Image
                src={googleIcon}
                alt="googleIcon"
                height={25}
                className=" inline mr-1"
              />
              Sign In with Google
            </div>
            {/* <div className="col text-center rounded-md hover:bg-blue-200 shadow-md hover:cursor-pointer border-t"> 
            <Image src={facebookIcon} alt="fbIcon"  height={30} className="inline mr-1"/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
