import React from 'react';
import PersistentDrawerLeft from './Menu.js';
// import logo from './logo.svg';
import './App.css';
import CardsFactory from './CardsFactory.js';

function App() {
  return (
   <div><PersistentDrawerLeft cards={<CardsFactory/>}/></div>
  );
}
export default App;
