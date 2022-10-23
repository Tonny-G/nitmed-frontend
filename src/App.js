import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import {useState} from 'react'
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

import Donate from "./components/Donate/Donate";
import Order from "./components/Order/Order";
import About from "./components/About/About";

function App() {
const [user, setUser]= useState(null)



  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path = "/" element = {user ? <Home setUser = {setUser}/> : <Login/>}/>
             <Route path="/login" element={user ? <Home setUser = {setUser}/>:<Login setUser = {setUser}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/donate' exact element={<Donate/>}/>
           <Route path='/order' exact element={<Order/>}/>
           <Route path='/about' exact element={<About/>}/>

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
