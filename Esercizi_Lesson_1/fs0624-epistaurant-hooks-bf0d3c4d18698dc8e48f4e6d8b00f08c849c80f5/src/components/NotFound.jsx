import { Button, Col, Container, Row } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'

function NotFound () {

    const navigate = useNavigate();
    return(
        <>
        <Container>
            <Row>
                <Col>
                <p> NOT FOUND</p>
                <Button variant="success" onClick={() => {navigate('/')}}> Homepage</Button>
                </Col>
            </Row>

        </Container>
        </>

    )
}

export default NotFound;