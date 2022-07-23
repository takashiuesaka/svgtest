import React from 'react';
import SVGCircle from './SVGCircle';
import './App.css';

const App = () => {

  return (
    <svg width="500" height="100vh" style={{ backgroundColor: "lightblue" }}>
      <SVGCircle x={100} y={50} r={40} stroke="white" strokeWidth="5" fill="yellow" />
      <SVGCircle x={100} y={150} r={40} stroke="white" strokeWidth="5" fill="yellow" />
      <rect x="10" y="200" width="380" height="180" rx="10" ry="10" fill="#e74c3c" stroke="navy" strokeWidth="10" />
    </svg>
  );
}


export default App;
