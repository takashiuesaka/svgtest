import React from 'react';
import './App.css';

const App = () => {

  const onClick = () => {
    alert("Hi!")
  }
  return (
    <svg width="200" height="200" style={{ backgroundColor: "lightblue" }}>
      <SVGCircle y={50} />
      <SVGCircle y={150} />
    </svg>
  );
}

type cy = {
  y: number
}
const SVGCircle = (arg: cy) => {
  const onClick = () => {
    alert("Hi!")
  }
  return (
    <circle cx="100" cy={arg.y} r="40" stroke="white" stroke-width="5" fill="yellow" onClick={onClick} />
  )
}

export default App;
