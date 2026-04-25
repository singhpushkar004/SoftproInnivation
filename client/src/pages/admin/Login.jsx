import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const handleChange = (e)=>{
        setData(()=>({...data,[e.target.name]:e.target.value}));
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/admin/login',data);
        if(res.data.msg=="Login Successfully"){
            localStorage.setItem("id",res.data.id);
            localStorage.setItem("token",res.data.token);
            navigate('/admin/dashboard');
        }
        else{
            alert(res.data.msg);
            console.log(res.data);
            
        }   
    }
    console.log(data);
    
  return (
    <div>
        <form method='post' onSubmit={handleSubmit}>
            <input type="email" name="email" id="" placeholder='Enter Email' onChange={handleChange} />
            <br />
            <input type="password" name="password" onChange={handleChange} id="" placeholder='Enter Password'/>
            <br />
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login