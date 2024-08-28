import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import CustomNavBar from './components/CustomNavbar';
import CustomGallery from './components/CustomGallery';
import { Container } from 'react-bootstrap';
import CustomFooter from './components/CustomFooter';


function App() {
  return (
    <div className="App">
      <header>
        <CustomNavBar />
      </header>
      <main>
        <Container fluid className='px-4' >
          <CustomGallery saga={'Star Wars'} />
          <CustomGallery saga={'Harry Potter'} />
          <CustomGallery saga={'Avengers'} />
          <CustomFooter />
        </Container>
      </main>
    </div>
  );
}

export default App;
