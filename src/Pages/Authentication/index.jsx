import {React, useEffect }from "react";
import "./index.css";
import Register from "../../components/Register";
import Login from "../../components/Login";
const Authentication = () => {
    useEffect(() => {
        const container = document.getElementById("authcontainer");
        const registerBtn = document.getElementById("register");
        const loginBtn = document.getElementById("login");
    
        if (container && registerBtn && loginBtn) {
          registerBtn.addEventListener("click", () => {
            container.classList.add("active");
          });
    
          loginBtn.addEventListener("click", () => {
            container.classList.remove("active");
          });
        }
    
        // Clean up event listeners when component unmounts
        return () => {
          if (registerBtn) {
            registerBtn.removeEventListener("click", () => {
              container.classList.add("active");
            });
          }
          if (loginBtn) {
            loginBtn.removeEventListener("click", () => {
              container.classList.remove("active");
            });
          }
        };
      }, []);
  return (
    <>
    <div className="authmain">   
      <div className="authcontainer" id="authcontainer">
       <Register />
       <Login />
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Ai-Image Generator Let your Imagination work Here</p>
              <button className="hidden authbtn" id="login">
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome to AI-Image Generator!</h1>
              <p>
                Register Now to convert your imagination into reality 
              </p>
              <button className="hidden authbtn" id="register">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
    
  );
};
export default Authentication;
