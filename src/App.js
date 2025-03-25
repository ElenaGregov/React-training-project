import React, { useEffect, useState, } from "react";
import  "./styles/App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.jsx";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import PostIdPage from "./pages/PostIdPage.jsx";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
            <BrowserRouter>
                <Navbar setIsAuth={setIsAuth}/>
                <Routes>
                    <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
                    <Route path="/about" element={isAuth ? <About/> : <Navigate to="/login"/>}/>
                    <Route path="/posts" element={isAuth ? <Posts/> : <Navigate to="/login"/>}/>
                    <Route path="/posts/:id" element={isAuth ? <PostIdPage/> : <Navigate to="/login"/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;