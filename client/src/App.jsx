import './App.css'
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as autService from './services/authService'
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
import AuthContext from './context/authContext';
import Logout from './components/logout/Logout';
import ErrorBoundary from './components/errorBoundries';
import AuthGuard from './components/guards/AuthGuard';

function App() {
  const navigate= useNavigate()
  const [auth, setAuth] = useState(()=> {
    localStorage.removeItem('accessToken');
    return {}
  });
  const loginSubmitHandler = async (values) => {

    const result = await autService.login(values.email, values.password);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken)
    navigate('/');
  };

  const registerSubmitHandler = async (values) => {
    const result = await autService.register(values.email, values.password, values.username);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken)
    navigate('/');
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken')
    navigate('/')
  }
  const values = { 
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthtenticated: !!auth.accessToken,
   };
  return (
    <ErrorBoundary>
   <AuthContext.Provider value={values}>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/teams' element={<TeamList />}/>
    <Route path='/aboutus' element={<About />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/league' element={<League />}/>
    <Route path='/login' element={<Login />}/>
    
    
    <Route path='/teams/:teamId' element={<TeamDetails />} />
    <Route element={<AuthGuard />}>
    <Route path='/registerteam' element={<RegisterTeam />} />
    <Route path='/logout' element={<Logout />} />
    </Route>
    </Routes>
    <Footer />
   </AuthContext.Provider>
   </ErrorBoundary>
  )
}

export default App
