import React from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import ExploreTopBooks from './components/ExploreTopBooks';
import Carousel from './components/Carousel';
import Heros from './components/Heros';
import LibraryServices from './components/LibraryServices';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </div>
  );
}

export default App;
