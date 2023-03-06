import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocFromAuth,
} from "../../utilities/firebase/firebase.utilities";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields()

    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use!')
        } else{
            console.log('Theres an error', error);
        }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign Up With Email</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor="">Email</label>
        <input
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;