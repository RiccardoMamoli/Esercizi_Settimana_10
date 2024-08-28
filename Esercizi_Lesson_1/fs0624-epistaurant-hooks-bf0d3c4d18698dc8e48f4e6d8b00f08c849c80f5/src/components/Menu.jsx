import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import pastasciutte from '../data/menu.json'
import { useNavigate } from 'react-router-dom'

const Menu = () => {

    const navigate = useNavigate();

    return (
        <>
            <Container>


                {
                    pastasciutte.map((pasta) => {
                        return (
                            <Row className='justify-content-center'>
                                <Col xs={12} md={6}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={pasta.image} />
                                        <Card.Body>
                                            <Card.Title> {pasta.name} </Card.Title>
                                            <Card.Text>
                                                {pasta.description}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => navigate('/details/' + pasta.id)}>Vai ai dettagli</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        )
                    }) 
                }
            </Container>
        </>
    )
}

export default Menu;