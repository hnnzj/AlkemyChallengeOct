import React, { useState } from 'react';
import swal from 'sweetalert';
import { getBalance, logInUser, registerUser } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Landing() {
    const isLogged = useSelector((state) => state.isLogged);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [account, setAccount] = useState(true);

    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        if (account) {
            setLogin({ ...login, [e.target.name]: e.target.value });
        } else {
            setRegister({ ...register, [e.target.name]: e.target.value });
        }
    };

    const submitRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser(register));
        e.target.reset();
        swal('Account Created', '', 'success');
        setAccount(true);
    };

    const submitLogin = (e) => {
        e.preventDefault();
        dispatch(logInUser(login));
    };

    useEffect(() => {
        isLogged && navigate('/home');
    }, [isLogged]);

    return (
        <>
            {account ? (
                <>
                    <div className='d-flex text-center justify-content-center'>
                        <div className='balanceContainer rounded-4 chotita h-50 w-25'>
                            <form
                                onSubmit={submitLogin}
                                className='d-flex flex-column col-12 mt-4'
                            >
                                <label>Email</label>
                                <input
                                    name='email'
                                    onChange={handleChange}
                                    className='form-control'
                                />
                                <label>Password</label>
                                <input
                                    name='password'
                                    type='password'
                                    onChange={handleChange}
                                    className='form-control'
                                />
                                <button className='btn btn-primary mt-4'>
                                    Submit
                                </button>
                            </form>
                            <div className='mt-4 mb-4'>
                                <span className='mr-4'>
                                    Don't have an account?
                                </span>
                                <button
                                    className='btn btn-success'
                                    onClick={() => setAccount(false)}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='d-flex text-center justify-content-center'>
                        <div className='balanceContainer rounded-4 chotita h-50 w-25'>
                            <form
                                onSubmit={submitRegister}
                                className='d-flex flex-column  col-12'
                            >
                                <label>Username</label>
                                <input
                                    name='username'
                                    onChange={handleChange}
                                    className='form-control'
                                />
                                <label>Email</label>
                                <input
                                    name='email'
                                    onChange={handleChange}
                                    className='form-control'
                                />
                                <label>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    onChange={handleChange}
                                    className='form-control'
                                />
                                <button className='btn btn-primary  mt-4'>
                                    Submit
                                </button>
                            </form>
                            <div className='mt-4'>
                                <span className='mr-4 '>
                                    Do you have an account?
                                </span>
                                <button
                                    className='btn btn-success'
                                    onClick={() => setAccount(true)}
                                >
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Landing;
