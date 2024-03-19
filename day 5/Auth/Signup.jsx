import React, { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Signup.css';

const Login = forwardRef(({}, ref) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    const adminUser = event.target[0].value;
    const username = event.target[1].value;
    const email = event.target[2].value;
    const password = event.target[3].value;
    const confirmPassword = event.target[4].value;
    const mobileNumber = event.target[5].value;

    const buttonClicked = event.nativeEvent.submitter;

    if (buttonClicked.name === 'signup') {
      if (!adminUser || !username || !email || !password || !confirmPassword || !mobileNumber) {
        setErrorMessage('Please fill in all fields.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }

      // Store user data in local storage
      localStorage.setItem('adminUser', adminUser);
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('mobileNumber', mobileNumber);

      console.log('Signup success');
      navigate('/');
    }
  }

  return (
    <div className="bg1">
      <div className="containersignup">
        <form onSubmit={onSubmit}>
          <div className="signupheading">
            <label>Sign Up</label>
          </div>
          <br></br>
          <p1>
            <div className="sideheadingsignup">
              Already Have An Account <Link to="/"> Sign in</Link>
            </div>
          </p1>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Enter Admin/User</div>
          <input className="signupemailfield" type="text" placeholder="Enter Admin/User" required></input>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Username:</div>
          <input className="signupemailfield" type="text" placeholder="Enter Username" required></input>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Email:</div>
          <input className="signupemailfield" type="text" placeholder="Enter Email" required></input>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Password:</div>
          <input className="signupemailfield" type="password" placeholder="Enter password" required></input>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Confirm Password:</div>
          <input className="signupemailfield" type="password" placeholder="Enter Confirm password" required></input>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Enter Mobile Number</div>
          <input className="signupemailfield" type="number" placeholder="Enter Mobile Number" required></input>
          <br></br>
       
          <button type="submit" name="signup" className="signupbutton">
            <div className="signupbuttonletterinside">Sign Up</div>
          </button>
          <br></br>
          <p1>
          </p1>
          <br></br>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
});

export default Login;
