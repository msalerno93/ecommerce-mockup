import React from "react";
import { signInWithGooglePopup } from "../../utilities/firebase/firebase.utilities";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
