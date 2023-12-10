import './App.css'
import Home from './components/home/Home';
import Navbar from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
function App() {
 
  return (
   <>
   <Navbar />
  
   <h1>Hello from react!</h1>
   <Home></Home>
   <Footer />
   </>
  )
}

export default App
