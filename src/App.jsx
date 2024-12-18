
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage'
import NavBar from './components/navBar'
import Footer from './components/Footer'
import LoginPage from './Pages/LoginPage'
import ReservationPage from './Pages/ReservationPage'
import ContactPage from './Pages/ContactPage'
import MiniGamePage from './Pages/MiniGamePage'
import PostApocalyptiquePage from './Pages/PostApocalyptiquePage'
import HorreurPage from './Pages/HorreurPage'
import ProfilPage from './Pages/ProfilPage'
import ScienceFiction from './Pages/ScienceFictionPage'
import ProfilPageAdmin from './Pages/ProfilPageAdmin'
import Fantastique from './Pages/FantastiquePage'
import Magie from './Pages/MagiePage'
import WowPage from './Pages/WowPage'
import LolPage from './Pages/LolPage'
import MysterePage from './Pages/MysterePage'
import MecaniquePage from './Pages/MecaniquePage'
import EnquetePage from './Pages/EnquetePage'
import AdminLogin from './Pages/AdminLogin'


function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          <Route path='/mini-game' element={<MiniGamePage></MiniGamePage>}></Route>
          <Route path='/enquetepage' element={<EnquetePage></EnquetePage>}></Route>
          <Route path='/horreur' element={<HorreurPage></HorreurPage>}></Route>
          <Route path='/post-apocalyptique' element={<PostApocalyptiquePage></PostApocalyptiquePage>}></Route>
          <Route path='/reservation' element={<ReservationPage></ReservationPage>}></Route>
          <Route path='/profil' element={<ProfilPage></ProfilPage>}></Route>
          <Route path='/magie' element={<Magie></Magie>}></Route>
          <Route path='/sciencefiction' element={<ScienceFiction></ScienceFiction>}></Route>
          <Route path='/fantastique' element={<Fantastique></Fantastique>}></Route>
          <Route path='/profilPageAdmin' element={<ProfilPageAdmin></ProfilPageAdmin>}></Route>
          <Route path='/wowpage' element={<WowPage></WowPage>}></Route>
          <Route path='/lolpage' element={<LolPage></LolPage>}></Route>
          <Route path='/mysterepage' element={<MysterePage></MysterePage>}></Route>
          <Route path='/mecaniquepage' element={<MecaniquePage></MecaniquePage>}></Route>
         
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     
    </>
  )
}

export default App
