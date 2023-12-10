import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import TeamList from './components/teamList/teamList';
import About from './components/aboutus/About';
import Register from './components/register/Register';
import League from './components/league/League';
import Login from './components/login/Login';
function App() {
 
  return (
   <>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/teams' element={<TeamList />}/>
    <Route path='/aboutus' element={<About />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/league' element={<League />}/>
    <Route path='/login' element={<Login />}/>
    </Routes>
    <Footer />
   </>
  )
}

export default App
