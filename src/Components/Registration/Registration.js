import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth"; 
import initializeAuthentication from "../../Firebase/firebase.initialize"
import { Link } from 'react-router-dom';

initializeAuthentication();
const Registration = () => {
    // use State method for set name,email, password, error, isLogin
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

      // handling new register user by giving name, email and password
      const handleRegistration = e => {
        // ignoring default reload method of form tag
        e.preventDefault();
        // validating password length.
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
          }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
        return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user; 
            console.log(user);
        })
        
    
      }
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className='col-md-5 mt-5'>
                <h2>Registration Here...</h2>
                <form onSubmit={handleRegistration}>
                    <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input type="text" onBlur={handleNameChange} className="form-control"  required />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" onBlur={handleEmailChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" onBlur={handlePasswordChange} className="form-control" required  />
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <br />
                <h5>Already Registered? login from here <Link to="/login">Login</Link> </h5>
            </div>

            <div>
                {/* {
                    user.name && <div>
                    <h2>Welcome {user.name}</h2>
                    <p>I know your email address: {user.email}</p>
                    <img src={user.photo} alt="" />
                    </div>
                } */}
            </div>
        </div>
    );
};


export default Registration;