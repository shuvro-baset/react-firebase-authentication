import React from 'react';
// import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth"; 
// import initializeAuthentication from "../../Firebase/firebase.initialize"
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

// initializeAuthentication();
const Registration = () => {

    const {user,  handleRegistration, handleNameChange, handleEmailChange,handlePasswordChange ,error , message} = useFirebase();
    // use State method for set name,email, password, error, isLogin
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const auth = getAuth();

    // const handleNameChange = e => {
    //     setName(e.target.value);
    //   }
    // const handleEmailChange = e => {
    // setEmail(e.target.value);
    // }

    // const handlePasswordChange = e => {
    // setPassword(e.target.value)
    // }

    // // handling new register user by giving name, email and password
    // const handleRegistration = e => {
    //     // ignoring default reload method of form tag
    //     e.preventDefault();
    //     // validating password length.
    //     if (password.length < 6) {
    //         setError('Password Must be at least 6 characters long.')
    //         return;
    //         }
    //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //         setError('Password Must contain 2 upper case');
    //     return;
    //     }
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result => {
    //         const user = result.user; 
    //         console.log(user);
    //         verifyEmail() 
    //         setUserName()
    // })
    // }
    // // update username function
    // const setUserName = () => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //       .then(result => { })
    //   }
    // // verification email send
    // const verifyEmail = () => {
    // sendEmailVerification(auth.currentUser)
    //     .then(result => {
    //     console.log(result);
    //     })
    //   }
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
                    {
                        error && 
                        <div className="row mb-3 text-danger">{error}</div>
                    }
                    {   message &&
                        <div className="row mb-3 text-success">{message}</div>
                    }
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <br />
                <h5>Already Registered? login from here <Link to="/login">Login</Link> </h5>
            </div>

            
        </div>
    );
};


export default Registration;