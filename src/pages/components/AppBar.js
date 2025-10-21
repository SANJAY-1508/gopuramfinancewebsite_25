import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  const [rates, setRates] = useState({
    gold: { perGram: 0, perPawn: 0 },
    silver: { perGram: 0, perKg: 0 },
  });
  const [loading, setLoading] = useState(true);

  const API_KEY = "fde38ef2e6c76183b5ada516f86bc435"; // Your key

  const GOLD_PREMIUM = 1.12; // ~12% for gold
  const SILVER_PREMIUM = 1.23; // ~23% for silver

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=INR&currencies=XAU,XAG`
        );
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        const data = await response.json();

        if (data.success) {
          const goldPerOz = parseFloat(
            data.rates.INRXAU || (data.rates.XAU ? 1 / data.rates.XAU : 0)
          );
          const silverPerOz = parseFloat(
            data.rates.INRXAG || (data.rates.XAG ? 1 / data.rates.XAG : 0)
          );

          const OZS_TO_GRAMS = 31.1035;
          let goldPerGram = (goldPerOz / OZS_TO_GRAMS).toFixed(2);
          let silverPerGram = (silverPerOz / OZS_TO_GRAMS).toFixed(2);

          goldPerGram = (parseFloat(goldPerGram) * GOLD_PREMIUM).toFixed(2);
          silverPerGram = (parseFloat(silverPerGram) * SILVER_PREMIUM).toFixed(
            2
          );

          const goldPerPawn = (parseFloat(goldPerGram) * 8).toFixed(2);
          const silverPerKg = (parseFloat(silverPerGram) * 1000).toFixed(2);

          setRates({
            gold: { perGram: goldPerGram, perPawn: goldPerPawn },
            silver: { perGram: silverPerGram, perKg: silverPerKg },
          });
        } else {
          throw new Error(data.error?.message || "API failed");
        }
      } catch (error) {
        console.error("Error:", error);
        setRates({
          gold: { perGram: 13277, perPawn: (13277 * 8).toFixed(2) },
          silver: { perGram: 185, perKg: 185000 },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="mark-bg py-2">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <h4>Loading rates...</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="mark-bg">
      {/* Top Row: Logo, Heading, Prices */}
      <Container fluid>
        <Row className="align-items-center">
          {/* Logo */}
          <Col
            xs={12}
            sm={12}
            lg={3}
            className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2 mb-lg-0"
          >
            <img
              src={require("../../assets/logo.jpeg")}
              className="img-fluid logo-img"
              alt="Logo"
            />
          </Col>

          {/* Heading */}
          <Col xs={12} sm={12} lg={6} className="text-center my-2 my-lg-0">
            <h4 className="appbar-title">
              💰 கோபுரம் பைனான்ஸ் நகை அடகு கடை 💍
            </h4>
          </Col>

          {/* Gold / Silver Cards */}
          <Col
            xs={12}
            sm={12}
            lg={3}
            className="d-flex justify-content-center justify-content-lg-end gap-2 flex-wrap"
          >
            <Card className="blink-card text-center mb-2 mb-lg-0">
              <Card.Body className="p-2">
                <h6 className="fw-bold text-dark">தங்கம்</h6>
                <p className="mb-1 price-heading">
                  இன்றைய விற்பனை விலை (1 கிராம் )= ₹{rates.gold.perGram}
                </p>

                <p className="mb-0 price-heading">
                  இன்றைய அடகு விலை (1 கிராம் ) = ₹{rates.gold.perPawn}
                </p>
              </Card.Body>
            </Card>
            {/* <Card className="blink-card text-center mb-2 mb-lg-0">
              <Card.Body className="p-2">
                <h6 className="fw-bold text-dark">Silver</h6>
                <p className="mb-1">1g = ₹{rates.silver.perGram}</p>
                <p className="mb-0">1kg = ₹{rates.silver.perKg}</p>
              </Card.Body>
            </Card> */}
          </Col>
        </Row>
      </Container>

      {/* Bottom Container: NavLinks */}
      <Container fluid className="nav-container py-1">
        <Row>
          <Col xs={12} className="text-center">
            <Navbar expand="lg" className="p-0">
              <div className="d-lg-none d-flex justify-content-center w-100 mb-2">
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="mobile-menu-toggle"
                />
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-center"
              >
                <Nav className="custom-nav d-flex justify-content-center gap-3 flex-column flex-lg-row">
                  <Nav.Link
                    className="custom-nav-link"
                    as={NavLink}
                    exact
                    to={"/"}
                  >
                    முகப்பு
                  </Nav.Link>
                  <Nav.Link
                    className="custom-nav-link"
                    as={NavLink}
                    exact
                    to={"/about"}
                  >
                    எங்களை பற்றி
                  </Nav.Link>
                  <Nav.Link
                    className="custom-nav-link"
                    as={NavLink}
                    exact
                    to={"/ReasonsforPawning"}
                  >
                    அடகு வைப்பதற்கான காரணிகள்
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppBar;
