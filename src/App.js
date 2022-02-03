import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import Product from "./Pages/Product";

function App() {
    return (
        <div className="flex bg-[#5840BB] ">
            <Sidebar />
            <div className="bg-white m-6 p-12 rounded-3xl outline-dashed outline-2 h-screen">
                <Router>
                    <Routes>
                        <Route path={"/"} element={<Dashboard />}></Route>
                        <Route
                            path={"/dashboard"}
                            element={<Dashboard />}
                        ></Route>
                        <Route path="/order" element={<Order />}></Route>
                        <Route path="/product" element={<Product />}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
