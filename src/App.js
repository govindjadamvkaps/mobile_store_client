import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/registrations" element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
