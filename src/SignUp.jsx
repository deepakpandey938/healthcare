import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('user')
        if(auth){
           navigate('/')
        }
    })



    const collectData=async()=>{
    console.log(name,email,password);
    let result=await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },
    })
    result= await result.json();    
    console.log(result);
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate('/')
    }
    }


    return(
        <div className="Register-box">
            <h1 className="register-container-header">Register your self</h1>
            <input className="input-box" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter Name" />
            <br />
            <input className="input-box" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="Email" placeholder="Enter Email"/>
            <br />
            <input className="input-box"value={password} onChange={(e)=>{setPassword(e.target.value)}} type="Password" placeholder="Enter Password"/>
            <br/>
            <button className="button" onClick={collectData}>SignUp</button>
        </div>
    )
}
export default SignUp