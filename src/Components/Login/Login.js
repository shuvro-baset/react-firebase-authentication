import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword  } from "firebase/auth"; 
import initializeAuthentication from "../../Firebase/firebase.initialize"
import { Link } from 'react-router-dom';

initializeAuthentication();
// auth provider object. We can give any name for this object.
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Login = () => {

    // use State method for loggedInUser
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    // Google signIn handler function.
    const handleGoogleSignIn = (e) => {
        console.log("i am clicked");
        e.preventDefault();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // destructuring user data.
            const { displayName, email, photoURL } = result.user;
            const loggedInUser = {
                name: displayName,
                email: email,
                photo: photoURL
        };
        setUser(loggedInUser);
      })
        .catch(error => {
            console.log(error.message);
        })
      }

    // const Github signIn handler function.
    const GithubSignInHandler = (e) => {
        e.preventDefault();
        signInWithPopup(auth, githubProvider)
            .then(result =>  {
             // destructuring user data.
            const { displayName, email, photoURL } = result.user;
            const loggedInUser = {
                name: displayName,
                email: email,
                photo: photoURL
        };
        setUser(loggedInUser);
      })
        .catch(error => {
            console.log(error.message);
        })
      }

    // getting email and password from user input data
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
        }
    
    const handlePasswordChange = e => {
        setPassword(e.target.value)
        console.log(e.target.value);
    }
    // login functionality for registered user accounts
    const processLogin = (e) => {
        e.preventDefault()
        console.log("login processing.... ");
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const { displayName, email, photoURL } = result.user;
            const loggedInUser = {
                name: displayName,
                email: email,
                photo: photoURL
        }
            setUser(loggedInUser);
            console.log(loggedInUser)
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className='col-md-5 mt-5'>
                <h2>Login system</h2>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control"  aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control"  />
                    </div>
                    <button onClick={processLogin} type="submit" className="btn btn-primary">Login</button>
                    <Link to="/registration" className="btn btn-primary">Register</Link>
                    <div className="mb-3">
                        <button className="btn btn-danger" onClick={handleGoogleSignIn}>sign-in with Google</button>
                        <button className="btn btn-warning" onClick={GithubSignInHandler}>sign-in with Github</button>
                    </div>
                </form>
            </div>
            <div>
                {
                    user.email && <div>
                    <h2>Welcome {user.name}</h2>
                    <p>I know your email address: {user.email}</p>
                    <img src={user.photo} alt="" />
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;