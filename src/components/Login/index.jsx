import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import "../../Pages/Authentication/index"
import { storeUserToLocalStorage } from "../../Utils/localStorage"; // Importing the function

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for email/password sign-in
  const [googleLoading, setGoogleLoading] = useState(false); // Loading state for Google sign-in
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store user data to local storage
      storeUserToLocalStorage({ name: user.displayName, email: user.email });
      
      toast.success("You are successfully logged in!");
      console.log("User logged in:", user);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Login Error:", error);
      switch (error.code) {
        case "auth/invalid-credential":
          toast.error("Invalid credentials. Please try again");
          break;
        default:
          toast.error("Login Failed: " + error.message);
      }
    } finally {
      setLoading(false); // Stop loading
    }
    setEmail("");
    setPassword("");
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
      {/* Render Loader component for both email/password and Google sign-in */}
      <div
        className={`form-container sign-in w-md-100 ${
          loading || googleLoading ? "blur" : ""
        }`}
      >
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <button
              className="icon"
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
            >
              <i className="fa-brands fa-google-plus-g" /> Signin with Google
            </button>
          </div>
          <span>or use your email and password</span>
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
          <a href="/signup" className="d-block d-md-none" id="register" >Dont have an account?</a>
          <button type="submit" className="authbtn" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
