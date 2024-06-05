import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar } from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import FetchData from './components/FetchData';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/general' element={<FetchData cat='general' />}/>
        <Route path='/business' element={<FetchData cat='business' />}/>
        <Route path='/entertainment' element={<FetchData cat='entertainment' />}/>
        <Route path='/health' element={<FetchData cat='health' />}/>
        <Route path='/science' element={<FetchData cat='science' />}/>
        <Route path='/sports' element={<FetchData cat='sports' />}/>
        <Route path='/technology' element={<FetchData cat='technology' />}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
