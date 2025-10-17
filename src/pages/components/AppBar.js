import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AppBar = () => {
  return (
    <div className="mark-bg py-2">
      <Container fluid>
        <Row className="align-items-center">
          {/* Left: Logo */}
          <Col lg={2} xs={4} sm={4} className="d-flex align-items-center">
            <img
              src={require("../../assets/logo.jpeg")}
              className="img-fluid gpay"
              alt="Logo"
              style={{ maxHeight: "60px" }}
            />
          </Col>

          {/* Center: Tamil Title */}
          <Col lg={8} xs={4} sm={4} className="text-center">
            <h4 className="appbar-title">கோபுரம் பைனான்ஸ் நகை அடகு கடை</h4>
          </Col>

          {/* Right: Animated Box */}
          <Col lg={2} xs={4} sm={4} className="d-flex justify-content-end">
            <Card className="blink-card text-center">
              <Card.Body className="p-2">
                <p className="mb-1 fw-bold">1 gram = 8000</p>
                <p className="mb-0 fw-bold">1 pawn = 97.500</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppBar;
