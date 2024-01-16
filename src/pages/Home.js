import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [error, setError] = useState("")
const [appointments, setAppointments] = useState([])
const [appo_id,setAppo_id] = useState()
const [customers_id, setCustomers_id] = useState(localStorage.getItem('id'))
const [name, setName] = useState(localStorage.getItem('userName'))
const [token, setToken] = useState(localStorage.getItem('token'))
const [msg, setMsg] = useState("")
console.log(appo_id);
  const fetchAppointments = async () => {
   
    const response = await axios
      .get("http://127.0.0.1:8000/api/appo/show")
      .catch((err) => {
      });
      console.log(response.data.message);
      setAppointments(response.data.message)
};

const bookCall= async (w) => {
   w.preventDefault();
  const response = await axios
    .post("http://127.0.0.1:8000/api/book",{customers_id,appo_id},{headers:{Authorization:`Bearer ${token}`}})
    .catch((err) => {
      console.log("Err: ", err.response.data.message);
      setError(err.response.data.message)
    });
    console.log(response);
    setMsg(response.data)
};

const logout =(w)=>{
  w.preventDefault();
  localStorage.removeItem('id')
  localStorage.removeItem('userName')
  localStorage.removeItem('token')

}


  useEffect(() => {
    fetchAppointments();
    
  }, [])

console.log(customers_id);
console.log(token);

console.log(name);


     return (
    <div className='container'>
     
        <div className='navbar-container'>
          <div className='wrapper'>
            
          <Link to="/" style={{fontWeight:"bold", textDecoration:"none",color:"rgb(48, 119, 224)"}} onClick={()=>window.location.reload()}> <p className='logo'>
            The Elderly <br/> Home's Club
            </p></Link> 

            <div className='vertical'/>

            {token? <div style={{display: "flex",alignItems:"center",justifyContent:"space-between",padding:"0px 10vw 0px 0px",cursor:"pointer"}}>
              
               <h2 style={{color:"black"}}>Hello {name}  </h2>  
              
                <h1 className='pages' onClick={(e)=>{logout(e); window.location.reload()}}>
                Logout
              </h1>
              </div>
           : 
            <div style={{display: "flex",alignItems:"center",justifyContent:"space-between",padding:"0px 10vw 0px 0px"}}>
                          <Link to="/Login" style={{fontWeight:"bold", textDecoration:"none",color:"black"}}><h1 className='pages'>
                Login
            </h1></Link>
            <Link to="/Signup" style={{fontWeight:"bold", textDecoration:"none",color:"black"}}><h1 className='pages'>
                SignUp
            </h1></Link>
            </div>

            }



            <div className='vertical2'/>

            <img src={"./photos/Untitled.png"} />
          </div>
        </div>
        <hr/>
        <h1  className='text'>Our expertise at <br/> your service</h1>


      <div className='Appointment-wrapper'>
        <h2>Appointments</h2>
        <hr className='Appointment-h2'/>
          
        <div id='25'>
            
            <div className='Appointments-container'> 
            <h3>SAT - WENS</h3> 
            <h3>8AM - 9AM</h3>
            <button className='buttonBook'   onClick={(e) =>{setAppo_id('25'); bookCall(e);}}  >book<br/>now</button>
            
            </div>
               <hr className='Appointment-h2'/>
            </div>
        {appointments.map((item)=>(
          <div key={item.id}  >
            
          <div className='Appointments-container'> 
          <h3>{item.start_day} - {item.end_day}</h3> 
          <h3>{item.start_time} - {item.end_time}</h3>
          <button className='buttonBook'   onClick={(e) =>{setAppo_id(item.id); bookCall(e);}}  >book<br/>now</button>
          
          </div>
             <hr className='Appointment-h2'/>
          </div>

          
        ))}
      <div style={{display:"flex",justifyContent:"center",fontWeight:"900"}}>{msg!==""? "Appointment " + (msg):undefined}</div> 
      {msg!==""? <></> : <div style={{display:"flex",justifyContent:"center",fontWeight:"900"}}>{error!==""? (error) + "    please login" :undefined}</div> }


      </div>

    </div>
  )


}

export default Home