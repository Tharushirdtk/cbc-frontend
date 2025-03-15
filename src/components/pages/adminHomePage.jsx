import { Link, Route, Routes } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { FaBox, FaClipboardList, FaUsers } from "react-icons/fa";
import AdminProductPage from "./admin/adminProductPage";

export default function AdminHomePage() {
    return (
        <div className="bg-blue-200 w-full h-screen flex">
            <div className="w-[20%] h-screen bg-blue-800 flex flex-col items-center py-4">
                <Link className="flex flex-row items-center space-x-2 text-white py-2 text-xs hover:bg-blue-700 w-full justify-center" to="/admin/dashboard">
                    <GoGraph />
                    Dashboard
                </Link>
                <Link className="flex flex-row items-center space-x-2 text-white py-2 text-xs hover:bg-blue-700 w-full justify-center" to="/admin/products">
                    <FaBox  /> 
                     Products
                </Link>
                <Link className="flex flex-row items-center space-x-2 text-white py-2 text-xs hover:bg-blue-700 w-full justify-center" to="/admin/orders">
                    <FaClipboardList />
                   Orders
                </Link>
                <Link className="flex flex-row items-center space-x-2 text-white py-2 text-xs hover:bg-blue-700 w-full justify-center" to="/admin/customers">
                    <FaUsers />
                     Customers
                </Link>
            </div>
            <div className="w-[78%] h-screen bg-red-300">
                <Routes path="/*">
                <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
                <Route path="/products" element={<AdminProductPage/>}></Route>
                <Route path="/orders" element={<h1>Orders</h1>}></Route>
                <Route path="/customers" element={<h1>Customers</h1>}></Route>


                </Routes>
            </div>
        </div>
    );
}
