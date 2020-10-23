import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        teste
        <Header />
        <SearchBar />
        <AddMovie />
      </div>
    </BrowserRouter>
  );
}

export default App;
