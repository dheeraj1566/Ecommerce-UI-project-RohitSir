import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import './index.css';
import Home from './Components/Home';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',    
            element: <Register />, 
        },
        {
            path: '/login',  
            element: <Login />, 
        },
        {
            path: '/home',
            element:<Home/>
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};  

export default App;
