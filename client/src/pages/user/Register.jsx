import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        mobile:'',
        password:''
    });
    const handleChange = (e)=>{
        setFormData(()=>({...formData,[e.target.name]:e.target.value}))
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/user/register',formData);
            alert("User Registered Successfully")
            navigate('/login')
        }
        catch(er){
            console.error(er);
            alert("Sorry Try Again Later")
        }
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card py-3">
                            <div className="card-body">
                               <form method='POST'onSubmit={handleSubmit} >
                                 <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <input type="text" placeholder='Enter Your Name' name='name' className='form-control' onChange={handleChange} />
                                    </div>
                                    <div className="col-sm-6">

                                        <input type="email" name="email" id="" className='form-control' placeholder='Enter Email' onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <input type="text" placeholder='Enter Your Mobile' name='mobile' className='form-control'onChange={handleChange} />
                                    </div>
                                    <div className="col-sm-6">

                                        <input type="password" name="password" id="" className='form-control' placeholder='Enter Password' onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3 mx-auto text-center">
                                        <button type='Submit' className='btn btn-primary'>Register</button>
                                    </div>
                                </div>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register