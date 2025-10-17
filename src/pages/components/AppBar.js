import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AppBar = () => {
  return (
    <>
      <>
        <div className="mark-bg">
          <div>
            <Container fluid>
              <Row className="py-2">
                <Col lg="4" xs="4" sm="4" className="align-self-center  ">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src={require("../../assets/logo.jpeg")}
                        className="img-fluid gpay"
                        alt="gpay"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg="8" className="align-self-center "></Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    </>
  );
};

export default AppBar;
