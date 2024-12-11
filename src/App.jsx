
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage'
import NavBar from './components/navBar'
import Footer from './components/Footer'
import LoginPage from './Pages/LoginPage'
import ReservationPage from './Pages/ReservationPage'
import ContactPage from './Pages/ContactPage'
import MiniGamePage from './Pages/MiniGamePage'
import AtHomePage from './Pages/AtHomePage'
import PostApocalyptiquePage from './Pages/PostApocalyptiquePage'
import HorreurPage from './Pages/HorreurPage'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          <Route path='/mini-game' element={<MiniGamePage></MiniGamePage>}></Route>
          <Route path='/athome' element={<AtHomePage></AtHomePage>}></Route>
          <Route path='/horreur' element={<HorreurPage></HorreurPage>}></Route>
          <Route path='/post-apocalyptique' element={<PostApocalyptiquePage></PostApocalyptiquePage>}></Route>
          <Route path='/reservation' element={<ReservationPage></ReservationPage>}></Route>
         
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     
    </>
  )
}

export default App
