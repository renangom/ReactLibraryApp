import React from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import ExploreTopBooks from './components/ExploreTopBooks';
import Carousel from './components/Carousel';
import Heros from './components/Heros';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
    </div>
  );
}

export default App;
