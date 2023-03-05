import React, { useState } from 'react';
import './signin.css';
import { userSignin } from '../api';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    console.log(name, email, password);


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const user = {
            userName: name,
            userEmail: email,
            userPassword: password
        }
        console.log(user);
        const response = await userSignin(user);
        if (response.data) {
            navigate('/dashboard');
            console.log("User Signed In Successfully!")
        }
        else {
            console.log("Do smth!")
        }
    }


    return (
        <div>
            <div class="fcf-body">

                <div id="fcf-form">
                    <h3 class="fcf-h3 md">Sign In </h3>

                    <form id="fcf-form-id">

                        <div class="fcf-form-group">
                            <label for="Name">Your name</label>
                            <div >
                                <input onChange={(e) => setName(e.target.value)} type="text" name="Name" class="fcf-form-control" required />
                            </div>
                        </div>

                        <div class="fcf-form-group">
                            <label for="Email">Your email address</label>
                            <div >
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="Email" class="fcf-form-control" required />
                            </div>
                        </div>

                        <div class="fcf-form-group">
                            <label for="Password" >Enter Your Password</label>
                            <div>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="Password" class="fcf-form-control" required />
                            </div>
                        </div>

                        <div class="fcf-form-group">
                            <button onClick={handleOnSubmit} type="submit" >Send Message</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signin;