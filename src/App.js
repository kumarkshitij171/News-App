import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route, } from "react-router-dom"

export default class App extends Component {
  apikey = process.env.REACT_APP_API_KEY
  render() {
    return (
      <>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key='general' pageSize={12} country='in' apikey={this.apikey} category={'general'} />} />
            <Route exact path="/general" element={<News key='general' pageSize={12} country='in' apikey={this.apikey} category={'general'} />} />
            <Route exact path="/business" element={<News key='business' pageSize={12} country='in' apikey={this.apikey} category={'business'} />} />
            <Route exact path="/entertainment" element={<News key='entertainment' pageSize={12} country='in' apikey={this.apikey} category={'entertainment'} />} />
            <Route exact path="/health" element={<News key='health' pageSize={12} country='in' apikey={this.apikey} category={'health'} />} />
            <Route exact path="/science" element={<News key='science' pageSize={12} country='in' apikey={this.apikey} category={'science'} />} />
            <Route exact path="/sports" element={<News key='sports' pageSize={12} country='in' apikey={this.apikey} category={'science'} />} />
            <Route exact path="/technology" element={<News key='technology' pageSize={12} country='in' apikey={this.apikey} category={'technology'} />} />
          </Routes>
        </BrowserRouter>

      </>
    )
  }
}
