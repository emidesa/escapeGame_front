
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage'
import NavBar from './components/navBar'
import Footer from './components/Footer'
import LoginPage from './Pages/LoginPage'
import ReservationPage from './Pages/ReservationPage'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/reservation' element={<ReservationPage></ReservationPage>}></Route>
         
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     
    </>
  )
}

export default App
