import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    // login with email and password
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(email);
                form.reset();
                setError('');
            })
            .catch(error => {
                console.error('error:', error);
                setError(error.message);
            })
    }

    const { providerLogin } = useContext(AuthContext);

    // google provider
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="w-full max-w-xs mx-auto pt-10 pb-6">
            <h2 className='text-black py-2 px-2 text-lg'>Please Login</h2>
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name='email' placeholder="" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-white-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name='password' placeholder="" required />
                </div>

                <button className="btn w-full mt-10" onClick={handleGoogleSignIn}>Login With Google</button>
                <p className="text-center text-gray-500 text-xs">
                    {error}
                </p>
            </form>
        </div>
    );
};

export default Login;