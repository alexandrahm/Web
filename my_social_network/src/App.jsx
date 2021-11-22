import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}  />
            
          <Route exact path="/admin" element={<Admin/>} />
            
        </Routes>
    </Router>  
    </div> 
  );
}

export default App;
