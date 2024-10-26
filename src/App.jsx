import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Course from './pages/Course'
import Instructor from './pages/Instructor'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import InTouch from './Component/InTouch'
import Contect from './pages/Contact'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/Instructor' element={<Instructor/>}/>
        <Route path='/Contact' element={<Contect/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
