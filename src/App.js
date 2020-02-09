import React from 'react';
import logo from './logo.svg';
import './App.css';

//import HeaderSelector  from './main/headerSelector/component/header'; 
//import Canvas from './main/canvasArea/component/canvas'; 
//import SketchColorPicker from './main/colorPicker/component/colorPicker'; 
import StepsCount from './antDesign/Steps/component/steps'
import FundingAgent from './antDesign/fundingAgent/component/fundingAgent'
 
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      
    <StepsCount />  
    <FundingAgent />
 
    </div>
  );
}

export default App;
