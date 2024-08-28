// RICORDIAMOCI DI INCLUDERE IN APP.JS IL FILE CSS DI BOOTSTRAP PRESENTE IN NODE_MODULES
// !!!
import 'bootstrap/dist/css/bootstrap.min.css'
// !!!
// INCLUDIAMO ANCHE LE BOOTSTRAP-ICONS
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import TableBooking from './components/TableBooking'
import BookingList from './components/BookingList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import PastaDetails from './components/PastaDetails'

function App() {
  return (
    <BrowserRouter>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <Routes>
          <Route path='/admin' element={<BookingList />} />
          <Route path='/booking' element={<TableBooking />} />
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/details/:pastaId' element={<PastaDetails />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>
    </BrowserRouter >
  )
}

export default App
