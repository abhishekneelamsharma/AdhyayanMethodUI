import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import {axios} from "axios";

export default function Login() {
    const { state, dispatch } = useContext(UserContext);


    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({});
    let name, value;
    const storeLoginData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setLoginData({ ...loginData, [name]: value });

    }

    const postLoginData = async (e) => {
        try {
            e.preventDefault();

            const { email, password } = loginData;

            const res = await fetch("https://am-api-production.up.railway.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })

            const data = await res.json();

            if (res.status === 400 || !data) {
                window.alert("check details");
            } else {
                dispatch({ type: "USER", payload: true });
                window.alert("login successfully");
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <section className="login-section mt-5">
                <h2 className='text-center'>Login</h2>
                <hr className='w-25 mx-auto' />

                <div className="signup-form container my-5">
                    <form method="POST" className=' py-5 px-4 rounded border border-success'>

                        <div className="form-group">
                            <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                            <input type="text" id='email' placeholder='your email'
                                name="email" value={loginData.email} onChange={storeLoginData}
                                autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                            <input type="text" id='password' placeholder='password'
                                name="password" value={loginData.password} onChange={storeLoginData}
                                autoComplete='off' />
                        </div>

                        <button className='btn btn-success mt-4' onClick={postLoginData}>Login</button>
                    </form>
                </div>

            </section>
        </>
    )
}
