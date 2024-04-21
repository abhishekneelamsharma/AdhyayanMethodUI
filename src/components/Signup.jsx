import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Signup() {

    const [signupData, setsignupData] = useState({});
    const navigate = useNavigate();

    // store data into a state
    let name, value;
    const getSignupdata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setsignupData({ ...signupData, [name]: value })
    }

    //fetch API
    const postRegistrationData = async(e)=>{
        e.preventDefault();

        const {name,email,phone,password,cpassword} = signupData;
        const res = await fetch("https://adhayayanmethodapi-production.up.railway.app/signup",{
            method:"POST",
            credentials: 'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,password,cpassword
            })
        })
        console.log(res);
        const data = await res.json();

        if(res.status===400 || !data){
            window.alert("error");
            console.log("error");
        }else{
            window.alert("sucessfull resgistered");
            console.log("registration successfull");
            navigate("/login")
        }
    }

    return (
        <>
            <section className='signup-section my-5'>
                <h2 className='text-center'>Sign up</h2>
                <hr className='w-25 mx-auto' />

                <div className="signup-form container my-5">
                    <form method='POST' className=' py-5 px-4 rounded border border-success'>
                        <div className="form-group">
                            <label htmlFor="name"><i class="fa-solid fa-user "></i></label>
                            <input type="text" name='name' id='name' placeholder='your name'
                                value={signupData.name} onChange={getSignupdata} autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                            <input type="text" name='email' id='email' placeholder='your email'
                                value={signupData.email} onChange={getSignupdata}
                                autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"><i class="fa-solid fa-phone"></i></label>
                            <input type="text" name='phone' id='phone' placeholder='phone number'
                                value={signupData.phone} onChange={getSignupdata}
                                autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                            <input type="text" name='password' id='password' placeholder='password'
                                value={signupData.password} onChange={getSignupdata}
                                autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name"><i class="fa-solid fa-lock"></i></label>
                            <input type="text" name='cpassword' id='cpassword' placeholder='confirm password'
                                value={signupData.cpassword} onChange={getSignupdata}
                                autoComplete='off' />
                        </div>
                        <button className='btn btn-success mt-4' onClick={postRegistrationData}>Sign up</button>
                    </form>
                </div>
            </section>
        </>
    )
}
