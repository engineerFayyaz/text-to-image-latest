import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "firebase/compat/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import { storeUserToLocalStorage } from "../../Utils/localStorage";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [ setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false); // Loading state for Google sign-in
  const auth = getAuth();
  const navigate = useNavigate();


  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      // Signed up successfully
      const user = userCredential.user;

      // Store user data to local storage
      storeUserToLocalStorage({ name, email });

      toast.success("You are successfully registered!");
      console.log("User registered:", user);

      // Add delay before navigating to the home page
      navigate("/");
    } catch (error) {
      // Handle errors
      setError(error.message);
      console.error("Registration Error:", error);

      // Show toast message for error
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("This email is already registered. Please try again with a different email.");
          break;
        case "auth/weak-password":
          toast.error("Password should be at least 6 characters long.");
          break;
        default:
          toast.error("Registration Failed: " + error.message);
      }
    } finally {
      setLoading(false); // Stop loading
    }

    setEmail("");
    setPassword("");
    setName("");
  };

  const handleGoogleSignIn = () => {
    setGoogleLoading(true); // Start loading for Google sign-in

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google Sign-In Successful:", user);

        // Store user data to local storage
        storeUserToLocalStorage({ name: user.displayName, email: user.email });

        navigate("/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        toast.error("Google Sign-In Failed: " + error.message);
      })
      .finally(() => {
        setGoogleLoading(false); // Stop loading for Google sign-in
      });
  };

  return (
    <>
      <ToastContainer />
      {(loading || googleLoading) && <Loader />}{" "}
      <div className={`form-container sign-up ${
          loading || googleLoading ? "blur" : ""
        }`}>
        {/* Apply blur class if loading is true */}
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <button className="icon" type="button"  onClick={handleGoogleSignIn}
              disabled={googleLoading}>
              <i className="fa-brands fa-google-plus-g" /> Singup WIth Google
            </button>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="User Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {error && <p className="error">{error}</p>} */}
          <button type="submit" className="authbtn" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
