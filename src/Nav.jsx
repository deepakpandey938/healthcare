import React, { useEffect } from 'react'
import logo from './Components/mz9-3.jpg'
import { Link,useNavigate } from 'react-router-dom';
function Nav() {
    const auth =localStorage.getItem('user');
    const navigate=useNavigate();
    const logout =()=>{
      localStorage.clear();
      navigate('/signup')
    }
    useEffect(()=>{
      const auth =localStorage.getItem('user');
      if(auth){
        navigate("/")
      }
    },[])
  return (
    <div className='nav-box'>
      <img src={logo} alt="photo" className='logo-img'  />
      {auth?<ul className='nav-ul'>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">Log out ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className='nav-ul nav-rigth' >
           <li><Link to="/signup">Signup</Link></li> 
           <li><Link to="/login">Login</Link></li>
            </ul>
                }
    </div>
  )
}

export default Nav
