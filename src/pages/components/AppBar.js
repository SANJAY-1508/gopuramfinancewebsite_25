import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AppBar = () => {
  const [rates, setRates] = useState({
    gold: { perGram: 0, perPawn: 0 },
    silver: { perGram: 0, perKg: 0 },
  });
  const [loading, setLoading] = useState(true);

  const API_KEY = "fde38ef2e6c76183b5ada516f86bc435"; // Your key

  // Premium factors for Indian retail (adjust as needed)
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
          // Spot prices per oz in INR
          const goldPerOz = parseFloat(
            data.rates.INRXAU || (data.rates.XAU ? 1 / data.rates.XAU : 0)
          );
          const silverPerOz = parseFloat(
            data.rates.INRXAG || (data.rates.XAG ? 1 / data.rates.XAG : 0)
          );

          // Spot per gram
          const OZS_TO_GRAMS = 31.1035;
          let goldPerGram = (goldPerOz / OZS_TO_GRAMS).toFixed(2);
          let silverPerGram = (silverPerOz / OZS_TO_GRAMS).toFixed(2);

          // Apply Indian retail premium
          goldPerGram = (parseFloat(goldPerGram) * GOLD_PREMIUM).toFixed(2);
          silverPerGram = (parseFloat(silverPerGram) * SILVER_PREMIUM).toFixed(
            2
          );

          // Gold Pawn (8g)
          const goldPerPawn = (parseFloat(goldPerGram) * 8).toFixed(2);
          // Silver Kg
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
        // Current retail fallback (Oct 17, 2025)
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
    <div className="mark-bg py-2">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={2} xs={4} sm={4} className="d-flex align-items-center">
            <img
              src={require("../../assets/logo.jpeg")}
              className="img-fluid gpay"
              alt="Logo"
              style={{ maxHeight: "60px" }}
            />
          </Col>
          <Col lg={8} xs={4} sm={4} className="text-center">
            <h4 className="appbar-title">
              💰 கோபுரம் பைனான்ஸ் நகை அடகு கடை 💍
            </h4>
          </Col>
          <Col
            lg={2}
            xs={4}
            sm={4}
            className="d-flex flex-row align-items-end gap-2"
          >
            <Card className="blink-card text-center">
              <Card.Body className="p-2">
                <h6 className="fw-bold text-dark">Gold</h6>
                <p className="mb-1">1g = ₹{rates.gold.perGram}</p>
                <p className="mb-0">1 Pawn = ₹{rates.gold.perPawn}</p>
              </Card.Body>
            </Card>
            {/* <Card className="blink-card text-center">
              <Card.Body className="p-2">
                <h6 className="fw-bold text-dark">Silver</h6>
                <p className="mb-1">1g = ₹{rates.silver.perGram}</p>
                <p className="mb-0">1kg = ₹{rates.silver.perKg}</p>
              </Card.Body>
            </Card> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppBar;
