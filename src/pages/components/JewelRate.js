import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

const JewelRate = () => {
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
                  <h2 className="bold pt-3 text-center head-text">
                    இன்றைய அடகு விலை விவரங்கள்
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div data-aos="fade-up" className="box-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={10} sm={12}>
                <div className="box shadow-sm">
                  <ol className="box-list">
                    <li className="para-text">1 பவ்ன் = 100</li>
                    <li className="para-text">1 கிராம் = 100</li>
                    <li className="para-text">22 கேரட் = 100</li>
                    <li className="para-text">21 கேரட் = 100</li>
                    <li className="para-text">20 கேரட் = 100</li>
                    <li className="para-text">19 கேரட் = 100</li>
                    <li className="para-text">18 கேரட் = 100</li>
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

export default JewelRate;
