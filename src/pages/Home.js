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

        {/* <intro start */}
        <div className="padding">
          <Container>
            <Row>
              <Col lg="12">
                <h1
                  class=" bold text-center py-5 lg-font"
                  style={{ color: "Red", fontWeight: "bolder" }}
                >
                  கோபுரம் பைனான்ஸ் நகை அடகு கடை
                </h1>
              </Col>
              <Col lg="6" className="py-5" data-aos="fade-left">
                <img
                  src={require("../assets/home_01.jpeg")}
                  className="img-fluid"
                  alt="product name"
                />
              </Col>

              <Col lg="6" xs={12} className="py-1 align-self-center">
                <div data-aos="fade-right">
                  <h2 className="bold pt-3">
                    கோபுரம் பைனான்ஸ் நகை அடகு கடைக்கு வரவேற்கிறோம்!
                  </h2>

                  <p className="regular">
                    கோபுரம் நகை அடகு கடை – உங்கள் நகைகள் **பாதுகாப்பாக
                    வைக்கப்படும் நம்பகமான இடம்**. எங்கள் கடையில் உங்கள் பாணி
                    நகைகள், பொன்வெள்ளி, மோதிரங்கள், சங்கிலிகள் மற்றும் முக்கிய
                    நகைகளை நம்பகமாக **அடைவில் வைக்கலாம்**.
                  </p>

                  <p className="regular">
                    நாங்கள் **நகைகள் பாதுகாப்பு மற்றும் மதிப்பில் மிகுந்த
                    கவனம்** செலுத்துகிறோம். எங்கள் குழு ஒவ்வொரு நகையையும்
                    நுண்ணறிவுடன் பராமரித்து, வாடிக்கையாளர்களுக்கு **உயர்ந்த
                    நம்பகத்தன்மை மற்றும் சிறந்த சேவை** வழங்குகிறது.நாங்கள்
                    **நகைகள் பாதுகாப்பு மற்றும் மதிப்பில் மிகுந்த கவனம்**
                    செலுத்துகிறோம். எங்கள் குழு ஒவ்வொரு நகையையும் நுண்ணறிவுடன்
                    பராமரித்து, வாடிக்கையாளர்களுக்கு **உயர்ந்த நம்பகத்தன்மை
                    மற்றும் சிறந்த சேவை** வழங்குகிறது.
                  </p>

                  <p className="regular">
                    **எங்கள் சேவைகளில் உள்ள சிறப்புகள்:** - 24/7 பாதுகாப்பு
                    கண்காணிப்பு - நம்பகமான அடைவு அறைகள் - நகைகள் முழுமையாக
                    தனிப்பட்ட கட்டுப்பாட்டில் - வாடிக்கையாளர் தேவைக்கு ஏற்ப சேவை
                  </p>

                  <p className="regular">
                    வாடிக்கையாளர் திருப்தி எங்கள் முன்னுரிமை. எங்கள் நண்பரான
                    ஊழியர்கள் உங்கள் தேவையை புரிந்து, **சிறந்த மதிப்பில் உங்கள்
                    நகைகளை பாதுகாப்பாக வைக்க உதவுவர்**.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <intro end */}
        {/* products start */}
        <Container className="py-5 padding">
          <Row className="justify-content-center">
            <Col lg="12" xs={12} className="text-center py-3">
              <h2 className="bold">எங்களின் நிபந்தனைகள்</h2>
              <ConditionSwitcher conditions={conditions} />
            </Col>
          </Row>
        </Container>

        {/* products end */}

        <Footer />
      </div>
    </>
  );
};

export default Home;
