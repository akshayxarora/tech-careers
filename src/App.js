import './App.css';
// import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header'
import Jobs from './components/Jobs';


function App() {
  return (
    <div className="App">
      <Header />
      <Jobs />
    </div >
  );
}

export default App;
