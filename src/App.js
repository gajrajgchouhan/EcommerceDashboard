import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/index";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Product from "./pages/Product";

function App() {
    return (
        <div className="flex bg-[#5840BB]">
            <Sidebar />
            <div className="bg-white m-6 p-12 rounded-3xl outline-dashed outline-2 h-screen">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/product" element={<Product />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
