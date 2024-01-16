import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import Signup from "./pages/Signup";






const App = () => {





  return(

   
    <Router>

    
      
      <Routes>
      
      <Route  exact path='/' element={ <Home/>} />
      <Route  exact path='/Login' element={ <Login/>} />
      <Route  exact path='/Signup' element={ <Signup/>} />
      <Route path="*" element={<Navigate to='/' replace />}/>

    </Routes>

        
      

    </Router>


  

  )
};

export default App;