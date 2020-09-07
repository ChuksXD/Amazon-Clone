import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from '../firebase'

export default function Login() {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const login = (e) =>{
        e.preventDefault(); //This stops refresh
        //Do Login logic here
        auth.signInWithEmailAndPassword(email,password).then((auth) =>{
            //logged in, redirect to home page
            history.push("/");
        }).catch((e)=> alert(e.message));
    }

    const register = (e) =>{
        e.preventDefault(); //This stops refresh
        //Do register logic here
        auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
            //created a user and logged in, redirect to homepage
            history.push("/");
        }).catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to ="/">
             <p className="login_text">CHUKS</p> 
            <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="login logo" />
            </Link>
             
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)}type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)}type="password"/>
                    <button type="submit" onClick={login}
                    className="login_signInButton"> Sign In</button>
                </form>
                <p> By continuing, you agree to Chuks Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}
