import Login from "./pages/Login/Login";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} exact />
            
          {/* <Route path="/" element={<p></p>} /> */}
            
        </Routes>
    </Router>  
    </div> 
  );
}

export default App;
