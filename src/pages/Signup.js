import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css';
import './Home.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [phone_number, setPhone_number] = useState("")
  const [age, setAge] = useState()
  const [error, setError] = useState([])

  const sendNewUserInfo = async (w) => {
    w.preventDefault()
    const response = await axios
      .post("http://127.0.0.1:8000/api/customer/signup",{name,email,password,phone_number,address,age})
      .catch((err) => {
        console.log(err.response.data)
        setError(err.response.data)
      });


  };

  useEffect(() => {
  }, [])


  return (
    <div className='container'>
    <div className='navbar-container'>
    <div className='wrapper'>
        
      <Link to="/" style={{fontWeight:"bold", textDecoration:"none",color:"rgb(48, 119, 224)"}}> <p className='logo'>
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
    <div>
          
          <div className='Form-ContainerSign' style={{background:"black"}}>
          <div className='WelcomeText'>Sign up Page</div>
          <div className='InputContainerSign'>
            <input className='StyledInput' type="text" placeholder="Name" value={name} onChange={(e) =>{setName(e.target.value)}}/>
            <input className='StyledInput' type="text" placeholder="E-mail" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
            <input className='StyledInput' type="password" placeholder="Password"  value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
            <input className='StyledInput' type="number" placeholder="Age" value={age} onChange={(e) =>{setAge(e.target.value)}} />
            <input className='StyledInput' type="text" placeholder="Address" value={address} onChange={(e) =>{setAddress(e.target.value)}}/>
            <input className='StyledInput' type="number" placeholder="Phone" value={phone_number} onChange={(e) =>{setPhone_number(e.target.value)}}/>
          </div>
          <div style={{}}>{error!==""? (error):undefined}</div> 
          <div className='ButtonContainer'>
            <button className='StyledButton' onClick={(e)=>{sendNewUserInfo(e); }}  style={{background:"white",color:"black"}}>Creat Account</button>
          </div>
        </div>
        
    </div>

</div>

  )
}

export default Signup