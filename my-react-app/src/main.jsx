import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello from './Hello.jsx'
import './index.css'
import MyInput from './MyInput.jsx'
// import Lista from './Lista.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello/>
    {/* <Lista/> */}
    <MyInput/>
  </React.StrictMode>,
)
