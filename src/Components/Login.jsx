import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate=useNavigate()

    const handleLogin=async ()=>{
        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result=await result.json();
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));
          navigate('/')
        }else{
            alert("please enter connect details")
        }
    }
  return (
    <div className='login'>
      <input placeholder='Inpute email'className="input-box" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <input placeholder='Inpute password'className="input-box" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <button className="button" onClick={handleLogin} >SignIn</button>
    </div>
  )
}

export default Login
