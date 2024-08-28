import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const CustomNavbar = function () {

  const location = useLocation() // torna un oggetto

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/menu' className={location.pathname === '/'? 'nav-link active' : 'nav-link'}>Menu</Link>
            <Link to='/booking' className='nav-link'>Prenotazioni</Link>
            <Link to='/contact' className='nav-link'>Contattaci</Link>
            <Link to='/admin' className={location.pathname === '/'? 'nav-link active' : 'nav-link'}>Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
