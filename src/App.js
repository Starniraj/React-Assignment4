import './App.css';
import Home from './components/assingnMents4/home';
import Student from './components/assingnMents4/student';
import Contact from './components/assingnMents4/contact';
import React from 'react';
import NavigationBar from './components/assingnMents4/navigationBar';
import {BrowserRouter, Routes,Route} from 'react-router-dom'




function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavigationBar/>
     <Routes>
     {/* <Route path="/" element={<LandingPage/>}/> */}
     <Route path="/home" element={<Home/>}/>
     <Route path="/student" element={<Student/>}/>
     <Route path="/contact" element={<Contact/>}/>


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
