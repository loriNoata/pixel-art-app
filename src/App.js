import React from 'react';
import logo from './logo.svg';
import './App.css';
import   HeaderSelector  from './main/headerSelector/component/header'; 
import Canvas from './main/canvasArea/component/canvas'
import SketchColorPicker from './main/colorPicker/component/colorPicker'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
        <HeaderSelector />
      
      </header>
      <SketchColorPicker />
     pick your color:  <Canvas />
    
    </div>
  );
}

export default App;
