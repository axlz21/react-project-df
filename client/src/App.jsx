import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import About from './components/aboutus/About';
import Register from './components/register/Register';
import League from './components/league/League';
import Login from './components/login/Login';
import TeamList from './components/teamList/teamList';
import TeamDetails from './components/teamList/TeamDetails';
import RegisterTeam from './components/register/RegisterTeam';
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
    <Route path='/registerteam' element={<RegisterTeam />} />
    <Route path='/teams/:teamId' element={<TeamDetails />} />
    </Routes>
    <Footer />
   </>
  )
}

export default App
