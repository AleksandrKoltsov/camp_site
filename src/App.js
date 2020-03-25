import React from 'react';
import PersistentDrawerLeft from './components/Menu.js';
// import logo from './logo.svg';
import './App.css';
import CardsFactory from './components/CardsFactory.js';

function App() {
  return (
   <div><PersistentDrawerLeft cards={<CardsFactory/>}/></div>
  );
}
export default App;
