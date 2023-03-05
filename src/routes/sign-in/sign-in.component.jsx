import React from "react";
import { signInWithGooglePopup, createUserDocFromAuth } from "../../utilities/firebase/firebase.utilities";


function SignIn() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user)
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
