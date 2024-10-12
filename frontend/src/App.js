import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './router/home';
import Layout from './router/layout';
import React from 'react';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;