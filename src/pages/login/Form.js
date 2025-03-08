import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log("Form submitted successfully:", { email, password });
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='bg-white px-10 py-1 rounded-3xl border-2 border-gray '>
                <h1 className='text-2xl font-bold pt-8'>Welcome To Thee Castable</h1>
                <p className='font-medium text-gray-500 text-base mt-4'>Welcome back AI!</p>
                <div className='mt-8'>
                    <div>
                        <label className='text-base font-medium'>Email </label>
                        <input
                            className={`w-full border-2 rounded-xl p-4 mt-1 ${errors.email ? 'border-red-500' : 'border-gray-100'}`}
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className='text-base font-medium'>Password</label>
                        <input
                            className={`w-full border-2 rounded-xl p-4 mt-1 ${errors.password ? 'border-red-500' : 'border-gray-100'}`}
                            placeholder='Enter Your Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
                        <div>
                            <input type='checkbox' id='remember' />
                            <label className='ml-2 font-medium text-sm' htmlFor="remember">Remember for 30 days</label>
                        </div>
                        <button className='font-medium text-sm text-violet-700 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>Forgot Password</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button
                            type='submit'
                            className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl gradientBg text-white text-base font-bold'>
                            Sign in
                        </button>
                        <button className='flex rounded-xl py-2 border-2 item-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-base'>
                            <FcGoogle className='mt-1 ' /> Sign in with Google
                        </button>
                    </div>

                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-sm'>Don't have an account?</p>
                        <button className='text-violet-500 text-base font-medium ml-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                            <a href='SignUp/'>Sign Up</a>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
