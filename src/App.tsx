import React from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import ExploreTopBooks from './components/ExploreTopBooks';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </div>
  );
}

export default App;
