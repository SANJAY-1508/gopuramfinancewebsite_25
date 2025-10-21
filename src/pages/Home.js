import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ConditionSwitcher from "./components/ConditionSwitcher";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 500,
      duration: 3000,
      easing: "ease",
      mirror: true,
    });
  }, []);

  const conditions = [
    {
      label: "Condition 1",
      image: require("../assets/condition_01.jpeg"),
    },
    {
      label: "Condition 2",
      image: require("../assets/condition_02.jpeg"),
    },
  ];

  return (
    <>
      <div className="over">
        <AppBar />
        <img
          src={require("../assets/banner_01.jpeg")}
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
                    கோபுரம் பைனான்ஸ்
                  </h2>
                  <h5 className="bold pt-3 text-center head-text-2">
                    தங்க நகை அடகு கடைக்கு வரவேற்கிறோம்!
                  </h5>
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
                    <li className="para-text">
                      எங்களிடம் தங்கம் இன்றைய கிராம் விலைக்கு பெறப்படும்
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

export default Home;
