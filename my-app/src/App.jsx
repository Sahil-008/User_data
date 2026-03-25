import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

function APP(){
    return(
        <BrowserRouter>
        <nav>
            <Link to="/"> Home</Link> |
            <Link to = "/users">users</Link>
        </nav>
        <Routes>
            <Route path= "/"element={<Home/>}/>
            <Route path ="/Users" element ={<Users />}/>

        </Routes>
        
        
        </BrowserRouter>
    );
}
export default APP;