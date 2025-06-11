import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const areactElement=React.createElement(
    'a',
    {
        href:'www.google.com',
        target:'_blank'
    },
    'click to visit google'
)
createRoot(document.getElementById('root')).render(
 
    
    <App/>
  
)
