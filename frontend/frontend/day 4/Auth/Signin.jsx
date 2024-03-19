import React, { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Signin.css';

const Login = forwardRef(({}, ref) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    const buttonClicked = event.nativeEvent.submitter;

    if (buttonClicked.name === 'signIn') {
      if (!email || !password) {
        setErrorMessage('Please enter both email and password.');
        return;
      }

      // Store user data in local storage
      localStorage.setItem('email', email);
      navigate('/home');
    } else if (buttonClicked.name === 'admin') {
      navigate('/admin');
    }
  }

  return (
    <div className="bg1">
      <div className="containersignin">
        <form onSubmit={onSubmit}>
          <div className="signinheading">
            <label>Sign In</label>
          </div>
          <p1>
            <div className="sideheadingsignin">
              Don't have an account? <Link to="/signup"> Signup</Link>
            </div>
          </p1>
          <br></br>
          <br></br>
          <br></br>
          <div className="signinemail">Email:</div>
          <input className="signinemailfield" type="text" placeholder="Enter Email" required></input>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="signinpassword">Password:</div>
          <input className="signinemailfield" type="password" placeholder="Enter password" required></input>
          <br></br>
          <br></br>
          <button type="submit" name="signIn" className="signinbutton">
            <div className="signinbuttonletterinside">Sign in</div>
          </button>
          <br></br>
          <p1>
            <div className="siginforgotchange">
              Forgot Password - <Link to="/forgot">Change</Link>
            </div>
            <div className="siginadminlogin">
              Admin - <Link to="/adminlogin">Go To</Link>
            </div>
          </p1>
          <br></br>
          {errorMessage && <div className="signinerror-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
});

export default Login;
