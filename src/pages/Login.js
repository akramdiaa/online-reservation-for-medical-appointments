import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
import './Home.css';
import axios from 'axios';

const Login = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [error, setError] = useState("")

  const loginCall = async (w) => {
    w.preventDefault();

    const response = await axios
      .post("http://127.0.0.1:8000/api/customer/login ",{email,password})
      .then((response) => {
       
          localStorage.setItem("id", response.data.user.id);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userName", response.data.user.name);

      })
      .catch((err) => {
        console.log("Err: ", err.response.data.error);
        setError(err.response.data.error)
      });
    

};


  useEffect(() => {
      
  }, [])
  console.log(token);

  return (
    <div className='container' >
        <div className='navbar-container'>
          <div className='wrapper'>
            
          <Link to="/" style={{fontWeight:"bold", textDecoration:"none",color:"black"}} > <p className='logo'>
            The Elderly <br/> Home's Club
            </p></Link>

            <div className='vertical'/>

            <Link to="/Login" style={{fontWeight:"bold", textDecoration:"none",color:"black"}}><h1 className='pages'>
                Login
            </h1></Link>
            <Link to="/Signup" style={{fontWeight:"bold", textDecoration:"none",color:"black"}}><h1 className='pages'>
                SignUp
            </h1></Link>

            <div className='vertical2'/>

            <img src={"./photos/Untitled.png"} />
          </div>
        </div>
        <hr/>

           <form>
                <div className='Form-Container' style={{background:"black"}}>
                <div className='WelcomeText'>Login Page</div>
                <div className='InputContainer'>
                  <input className='StyledInput' value={email} type="text" placeholder="Email" onChange={(e) =>{setEmail(e.target.value)}}/>
                  <input className='StyledInput' value={password} type="password" placeholder="Password"  onChange={(e) =>{setPassword(e.target.value)}}/>
                </div>
               <div style={{}}>{error!==""? (error):undefined}</div> 
                <div className='ButtonContainer'>
                  <button className='StyledButton' onClick={(e)=>{loginCall(e)}}  style={{background:"white",color:"black"}}>Login</button>
                </div>
              </div>
          </form>

    </div>

  )
}

export default Login