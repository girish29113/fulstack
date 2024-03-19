import React, { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Signin.css';
import AdminUserDetails from './AdminUserDetails'; // Import the AdminUserDetails component

const Login = forwardRef(({}, ref) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginDetails, setLoginDetails] = useState([]); // State to store login details

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

      // Regular user login logic
      // For demonstration, let's assume the email and password are correct
      navigate('/adminhome');
    } else if (buttonClicked.name === 'admin') {
      // Admin login logic
      // For demonstration, let's assume the admin email and password are 'admin' and 'password' respectively
      if (email === 'admin' && password === 'password') {
        navigate('/admin');
        setLoginDetails([...loginDetails, { username: email, password }]);
      } else {
        setErrorMessage('Invalid admin credentials.');
      }
    }
  }

  return (
    <div className="bg1">
      <div className="containersignin">
        <form onSubmit={onSubmit}>
          <div className="signinheading">
            <label>Admin Sign In</label>
          </div>
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
          <br></br>
          {errorMessage && <div className="signinerror-message">{errorMessage}</div>}
        </form>
      </div>
      {loginDetails.length > 0 && <AdminUserDetails loginDetails={loginDetails} />}
    </div>
  );
});

export default Login;
