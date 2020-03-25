import React from 'react';
import MainPage from './components/MainPage.js';
// import logo from './logo.svg';
import './App.css';
import CardsFactory from './components/CardsFactory.js';
import SwipeableTextMobileStepper from './components/Slider.js';

function App() {
  return (
  <div><PersistentDrawerLeft cards={<CardsFactory/>} slider={<SwipeableTextMobileStepper/>}/></div>
  );
}
export default App;
