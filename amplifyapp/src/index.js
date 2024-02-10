import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Specs from './pages/Specs'
import Info from './pages/Info'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/specs" element={<Specs/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);