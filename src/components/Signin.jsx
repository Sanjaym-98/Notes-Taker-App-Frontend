import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Signin.css"
const Login=()=>{
    const navigate =useNavigate();
    const [data,setdata]= useState({email:"",password:""})

    const handlesubmit=async (e)=>{
        e.preventDefault(e)
        if((data.password.length>5)){
            axios.post('https://notesbackend-ware.onrender.com/api/v1/login',data)

            .then(result=>{
                console.log(data)
                console.log(result)
                localStorage.setItem('token',JSON.stringify(result.data.message.token))
                localStorage.setItem('userdetails',JSON.stringify(result.data.message.userdetails));
                setdata({email:"",password:""})
                 navigate('/homepage')
            }).catch((e)=>{
                console.log(e.message)
            })
        }
    }
    return (
        
        <div id="main">
            <h1 className="head">Notes Taker App</h1>
        <div id="container">
           <div id="centre">
           <form onSubmit={handlesubmit}>
                <div>
              Email Address  <input type="email" placeholder="User email" required value={data.email} onChange={(e)=>setdata({...data,email:e.target.value})}  />
                </div>
                <div>
                 Password<input type="password" placeholder="Password" value={data.password} required onChange={(e)=>setdata({...data,password:e.target.value})} />
                </div>
                <button>SigIn In</button>
                
                <Link to={'/signup'}><button className='signUp m-2 p-1 rounded-2'>Sign Up</button></Link>
            </form>
           </div>
            
        </div>
        </div>
    )
}

export default Login;
