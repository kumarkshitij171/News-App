import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route, } from "react-router-dom"

const App =()=> {
  // in react if we have to use env variable then the environment variable starts with REACT_APP_ (this is a must when using Create React App).
  const apikey = process.env.REACT_APP_NEWS_API_KEY
  return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key='general' pageSize={12} country='in' apikey={apikey} category={'general'} />} />
            <Route exact path="/general" element={<News key='general' pageSize={12} country='in' apikey={apikey} category={'general'} />} />
            <Route exact path="/business" element={<News key='business' pageSize={12} country='in' apikey={apikey} category={'business'} />} />
            <Route exact path="/entertainment" element={<News key='entertainment' pageSize={12} country='in' apikey={apikey} category={'entertainment'} />} />
            <Route exact path="/health" element={<News key='health' pageSize={12} country='in' apikey={apikey} category={'health'} />} />
            <Route exact path="/science" element={<News key='science' pageSize={12} country='in' apikey={apikey} category={'science'} />} />
            <Route exact path="/sports" element={<News key='sports' pageSize={12} country='in' apikey={apikey} category={'science'} />} />
            <Route exact path="/technology" element={<News key='technology' pageSize={12} country='in' apikey={apikey} category={'technology'} />} />
          </Routes>
        </BrowserRouter>

      </>
    )
  
}
export default App