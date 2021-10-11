import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <div class="mb-3">
                    <button type="submit" class="btn btn-danger">sign-in with Google</button>
                    <button type="submit" class="btn btn-warning">sign-in with Github</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;