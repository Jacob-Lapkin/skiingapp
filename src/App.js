import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Home from './views/home/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='home' element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
