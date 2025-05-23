import React, { use } from 'react';
import { AuthContext } from './Firebase/AuthContext';

const Login = () => {

    const { signIn, setLoggedInUser } = use(AuthContext);



    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        const { email, password } = userData;
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In Now!</h1>
                        <p className="py-6">
                            We're excited to have you here. Join us and start exploring new hobbies, connecting with like-minded people, and being part of something amazing!
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button type='submit' className="btn btn-neutral mt-4">Sign In</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;