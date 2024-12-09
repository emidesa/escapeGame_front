
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage'
import NavBar from './components/navBar'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
         
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
