import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import CustomNavBar from './components/CustomNavbar';
import { Container } from 'react-bootstrap';
import CustomFooter from './components/CustomFooter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvShows from './components/TvShows';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <CustomNavBar />
        </header>
        <main>
          <Container fluid className='px-4' >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tvshows' element={<TvShows />} />
              <Route path='/movie-details/:movieId' element={<MovieDetails/>} />
            </Routes>      
            <CustomFooter />
          </Container>
        </main>
      </div>
    </BrowserRouter >
  );
}

export default App;
