import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup">
      <div className="signupContainer">
        <div className="signupImage">
          <img src="./assets/signup.jpg" alt="" />
        </div>
        <div className="signupDetail">
          <div>
            <h3>Login</h3>
            <span>or</span>
            <h3>Signup</h3>
          </div>
          <div>
            <input type="email" placeholder="Enter email" />
            <p>
              By continuing, I agree to all the <span>Terms</span> and{" "}
              <span>Privacy Policies</span>
            </p>
            <Link to="/login">
              <button>CONTINUE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
