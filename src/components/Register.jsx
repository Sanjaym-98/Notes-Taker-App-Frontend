import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Signup.css"

const SignUp=()=>{
     const navigate = useNavigate()
    const [data,setdata]= useState({email:"",password:"",confirmpassword:""});
    const [confirmpassword,setconfirmpassword]= useState("");
    
    const handlesubmit =async(e)=>{
        e.preventDefault();
        if(confirmpassword === data.password){
            setconfirmpassword(false); 
        }

        axios.post('http://localhost:5000/api/v1/register',data)
        .then(result=>{
            console.log(data);
            console.log(result)

            setdata({email:"",password:""})
            setconfirmpassword("")
            if(result){
                 navigate("/")
            }
        }).catch((e)=>{
            console.log(e);
        })
    }

    return(
        <div id="main">
        <div id="container">
            <form onSubmit={handlesubmit}>
                <div>
              <input type="email" placeholder="User email" value={data.email} required onChange={(e)=>setdata({...data,email:e.target.value})}/>
                </div>
                <div>
                    <input type="password" placeholder="Password" value={data.password} required onChange={(e)=>setdata({...data,password:e.target.value})}/>
                </div>
                <div>
                    <input type="password" placeholder="Repeat Password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}   />
                </div>
                <button>Sign Up</button>
                <Link to={'/'}>  <button className='signUp m-2 p-1 rounded-2'>Sign In</button></Link>
            </form>
            
        </div>
        </div>
    )
}

export default SignUp;
