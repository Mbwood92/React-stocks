import './index.css'
import './App.css'
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import Nav from './components/Nav'


function App () {
  
  
  
  
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/stocks' element={<Dashboard/>} />
        <Route path='/stocks/:symbol/' element={<Stock/>} />

      </Routes>


    </div>
  )
}

export default App;
