import React from 'react';

const Registration = () => {
    return (

        <div className="d-flex justify-content-center align-items-center">
            <div className='col-md-6 mt-5'>
                <h2>Registration page</h2>
            <form>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

        </div>
        
    );
};

export default Registration;