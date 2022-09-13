import React, { useState } from "react";
import { authService, firebaseInstance } from "../myBase";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        }else if(name ==="password"){
            setPassword(value);
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                data = await authService.createUserWithEmailAndPassword(email,password);
            }else{
                data = await authService.signInWithEmailAndPassword(email,password);
            }
            console.Sign(data);
        }catch(error){
            setError(error.message);
        }
    }
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async(event) => {
        const {target: {name}} = event;
        let provider;
        if(name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }
    return(
        <div>
            <div>{newAccount ? "계정 생성" : "로그인"}</div><br/>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="Email" value={email} onChange={onChange} required/><br/>
                <input name="password" type="password" placeholder="Password" value={password} onChange={onChange} required/><br/>
                <input type="submit" value={newAccount ? "계정 생성" : "로그인"}/>
                <br/>{error}
            </form>
            <button onClick={toggleAccount}>
                {newAccount ? "로그인하러 가기" : "계정 생성하러 가기"}
            </button>
            <br/>
            <br/>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
            </div>
        </div>
    )
};

export default Auth;