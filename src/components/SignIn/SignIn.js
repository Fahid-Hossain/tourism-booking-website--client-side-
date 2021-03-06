import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { googleSignIn, setUser, setError } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || "/home";

    //googleSignInHandler 
    const googleSignInHandler = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
                console.log(result.user);
                history.push(redirect_url);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }
    return (
        <div>
            <form className="w-75 mx-auto">
                <img className="my-4" src="https://img.icons8.com/stickers/100/000000/login-rounded-right.png" alt="" width="" height=""/>
                <h1 className ="h3 mb-3 fw-normal">Please sign in</h1>

                <div className ="form-floating">
                <input type ="email" className ="form-control mb-2" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className ="form-floating">
                <input type ="password" className ="form-control mb-1" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className ="checkbox mb-3">
                <label>
                <input type ="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
                <button className ="w-100 btn btn-lg btn-primary" type ="submit">Sign in</button>
                <p className ="mt-4 mb-3 text-muted">OR</p>
            </form>
            <button onClick={googleSignInHandler} type="button" className="btn btn-danger">Sign In with Google</button>
        </div>
    );
};

export default SignIn;