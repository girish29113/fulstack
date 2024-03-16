import React, { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/SignUp.css';

const Login = forwardRef(({}, ref) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    const buttonClicked = event.nativeEvent.submitter;

    if (buttonClicked.name === 'signIn') {
      if (!username || !email || !password) {
        setErrorMessage('Please enter username, email, and password.');
        return;
      }

      console.log('Login success');
      navigate('/Home');
    } else if (buttonClicked.name === 'admin') {
      navigate('/admin');
    }
  }

  return (
    <div className="bg1">
      <div className="containersignup">
        <form onSubmit={onSubmit}>
          <div className="signupheading">
            <label>Sign Up</label>
          </div>
          <p1>
            <div className="sideheadingsignup">
              Already Have An Account <Link to="/"> Sign in</Link>
            </div>
          </p1>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Username:</div>
          <input className="signupemailfield" type="text" placeholder="Enter Username"></input>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Email:</div>
          <input className="signupemailfield" type="text" placeholder="Enter Email"></input>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="signupemail">Password:</div>
          <input className="signupemailfield" type="password" placeholder="Enter password"></input>
          <br></br>
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