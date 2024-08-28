import { Button, Col, Row } from "react-bootstrap";

function CustomFooter() {
    return (
        <>
            <Row className="justify-content-center mt-5">
                <Col xs={6}>
                    <Row>
                        <Col className="mb-2">
                            <i className="bi bi-facebook footer-icon"></i>
                            <i className="bi bi-instagram footer-icon"></i>
                            <i className="bi bi-twitter-x footer-icon"></i>
                            <i className="bi bi-youtube footer-icon"></i>
                        </Col>
                    </Row>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
                        <Col>
                            <Row>
                                <Col className="footer-links">
                                    <p>
                                        <a href="#void" alt="footer link">Audio and Subtitles</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Media Center</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Privacy</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Contact us</a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="footer-links">
                                    <p>
                                        <a href="#void" alt="footer link">Audio Description</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Investor Relations</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Legal Notices</a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="footer-links">
                                    <p>
                                        <a href="#void" alt="footer link">Help Center</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Jobs</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Cookie Preferences</a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="footer-links">
                                    <p>
                                        <a href="#void" alt="footer link">Gift Cards</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Terms of Use</a>
                                    </p>
                                    <p>
                                        <a href="#void" alt="footer link">Corporate Information</a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                    <Row>
                        <Col className="mb-2">
                            <Button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
                                Service Code
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2 mt-2 copyright">
                            © 1997-2023 Netflix, Inc.
                        </Col>
                    </Row>
                </Col>
            </Row>



        </>
    )


}

export default CustomFooter;