import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';


function CustomNavBar() {
    return (
        <>

            <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#221f1f' }}>
                <Container fluid>
                    <Navbar.Brand href="#void">
                        <img src="/logo_netflix.png" alt="cover" style={{ width: "100px", height: "55px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Link href="#void" className="fw-bold" active>Home</Nav.Link>
                            <Nav.Link href="#void" className="fw-bold">TV Shows</Nav.Link>
                            <Nav.Link href="#void" className="fw-bold">Movies</Nav.Link>
                            <Nav.Link href="#void" className="fw-bold">Recently Added</Nav.Link>
                            <Nav.Link href="#void" className="fw-bold">My List</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-search icons"></i>
                            <div id="kids" className="fw-bold">KIDS</div>
                            <i className="bi bi-bell icons"></i>
                            <i className="bi bi-person-circle icons"></i>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className='px-4'>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <h2 className="mb-4">TV Shows</h2>
                        <div className="btn-group" role="group">
                            <Dropdown className="ms-4 mt-1">
                                <Dropdown.Toggle type="button" className="btn btn-secondary btn-sm dropdown-toggle rounded-0" data-bs-toggle="dropdown"
                                    aria-expanded="false" style={{ backgroundColor: "#221f1f" }}>
                                    Genres
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu border-0">
                                    <Dropdown.Item className='border-bottom-0'><a className="dropdown-item border-0" href="#void">Comedy</a></Dropdown.Item>
                                    <Dropdown.Item className='border-bottom-0'><a className="dropdown-item border-0" href="#void">Drama</a></Dropdown.Item>
                                    <Dropdown.Item><a className="dropdown-item" href="#void">Thriller</a></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div>
                        <i className="bi bi-grid icons"></i>
                        <i className="bi bi-grid-3x3 icons"></i>
                    </div>
                </div>

            </Container>


        </>
    )
}

export default CustomNavBar;