import React from "react";
import './App.css';
import Logo from "./Logo";
import Header from "./Header";
import Gallery from "./Gallery";
import Principal from "./Principal";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Logo/>
      <Header/>
      <Gallery/>
      <Principal/>
      <Contact/>
      
    </div>
  );
}

export default App;
