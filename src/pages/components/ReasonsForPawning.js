import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

const ReasonForPawning = () => {
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
                    அடகு வைப்பதற்கான முக்கிய காரணிகள்
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
                    <li className="para-text">
                      இன்றைய கிராம் விலைக்கு நீங்கள் அடகு வைக்கலாம்{" "}
                    </li>
                    <li className="para-text">
                      உயர்தரமான தங்க டெஸ்டிங் மெஷினில் வைத்து சோதனை செய்து
                      உங்கள் தங்க நகைக்கு ஏற்றவாறு பணம் கொடுக்கப்படும்
                    </li>
                    <li className="para-text">
                      அணைத்து வகையான வரவு மற்றும் செலவு கணக்குகள் உங்கள் வங்கி
                      கணக்கில் வைக்கப்படும்
                    </li>
                    <li className="para-text">
                      டிஜிட்டல் முறையில் மிகவும் துல்லியமாக கணக்கிடப்படும்
                    </li>
                    <li className="para-text">
                      எங்களிடம் நகை அடகு வைப்பவருக்கு வாரக்கடன்கள், மாதக்கடன்கள்
                      அனைத்தும் நகையின் பெயரில் தரப்படும்
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

export default ReasonForPawning;
