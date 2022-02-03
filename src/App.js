import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Sidebar from "./component/Sidebar"
import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import Product from "./Pages/Product";

function App() {
    return (
        
        <Router>
            <Routes>
            <Route path="/" element={<Sidebar/>}></Route>
             <Route path="/dashboard" element={<Dashboard/>}></Route>
             <Route path="/order" element={<Order/>}></Route>
             <Route path="/product" element={<Product/>}></Route>
             
            </Routes>
             </Router>
       
            
            
       
    );
}

export default App;
