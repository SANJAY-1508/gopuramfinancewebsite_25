import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 500,
      duration: 3000,
      easing: "ease",
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className="over">
        <AppBar />
        <img
          src={require("../../assets/banner_01.jpeg")}
          className="img-fluid w-100"
          alt="product name"
          data-aos="flip-right"
        />
        {/* <Banner/> */}

        <div>
          <Container fluid>
            <Row>
              <Col lg="12" xs={12} className="py-1 align-self-center">
                <div data-aos="fade-right">
                  <h2 className="bold pt-3 text-center tamil-text">
                    எங்களை பற்றிய விவரங்கள்
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div data-aos="fade-up" className="reason-box-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={10} sm={12}>
                <div className="reason-box shadow-sm">
                  <ol className="reason-list">
                    <li>
                      நம்முடைய நிறுவனம் கடந்த 7 ஆண்டுகளாக செயல்பட்டு வருகிறது{" "}
                    </li>
                  </ol>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
