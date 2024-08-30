import { useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";

function HiddenSection() {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Button onClick={handleClick} variant={show ? 'warning' : 'success'}> {show ? 'NASCONDI' : 'MOSTRA'}</Button>
                    </Col>
                    {show &&
                        <Row className="mt-4">
                            <Col className="d-flex justify-content-center">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    }
                </Row>
            </Container>
        </>
    )
}

export default HiddenSection;