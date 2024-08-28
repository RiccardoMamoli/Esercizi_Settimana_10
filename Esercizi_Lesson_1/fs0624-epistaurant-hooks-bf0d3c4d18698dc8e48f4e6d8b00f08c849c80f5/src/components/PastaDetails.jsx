import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import pastasciutte from '../data/menu.json'
import { useEffect, useState } from "react";


const PastaDetails = () => {

    const navigate = useNavigate(); // torna una funziona
    const params = useParams(); // torna un oggetto
    const [pasta, setPasta] = useState{{}}
    const [isLoading, setIsLoading] =
    useEffect(() => {
        const pastaObj = pastasciutte.find((pasta) => pasta.id.toString() === params.pastaId)
    }) 

    return (

        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://placedog.net/500" />
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate('/')}> Torna in Homepage</Button>
                            </Card.Body> 
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PastaDetails;