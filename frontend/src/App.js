import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Home from './router/home';
import Layout from './router/layout';
import React from 'react';

function App() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState("");

//   const signInWithGoogle = async () => {
//     try {
//         const response = await fetch('http://localhost:3001/auth');
//     } catch (error) {
//         console.error('Error:', error);
//     };
//   }

//   const signInWithEmail = async () => {
//     try{
//         fetch('http://localhost:3001/auth/gmail', {
//             method: 'POST', // Phương thức POST
//             headers: {
//                 'Content-Type': 'application/json', // Định dạng dữ liệu
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password
//             })
//         })
//     }catch(err){
//         console.error(err);
//     }
//   }

//   return (
//     <div>
//         <input 
//             placeholder="email"
//             onChange={(e) => setEmail(e.target.value)}
//         />
//         <input 
//             placeholder="password"
//             onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={signInWithEmail}></button>
//     </div>);
// }

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