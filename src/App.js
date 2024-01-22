import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import U from './works/rabota';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<U/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
