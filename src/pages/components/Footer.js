import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Left: Logo */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <Image
              src={require("../../assets/logo.jpeg")}
              alt="Gopuram Finance Logo"
              fluid
              style={{ maxHeight: "150px" }}
            />
          </Col>

          {/* Right: Heading + Address + Phone */}
          <Col md={6} className="">
            <h5 className="mb-2">முகவரி</h5>
            <p className="mb-1">
              60, ஹாஜியார் காம்ப்ளக்ஸ், உசிலை ரோடு, பேரையூர் - 625 703
            </p>
            <h5 className="mb-2">தொடர்புக்கு</h5>
            <p className="mb-0"> +91 96006 28220</p>
          </Col>
        </Row>

        <hr className="bg-light mt-3" />

        <Row>
          <Col className="text-center">
            &copy; {currentYear} கோபுரம் பைனான்ஸ். அனைத்து உரிமைகளும்
            பாதுகாக்கப்பட்டுள்ளன.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
