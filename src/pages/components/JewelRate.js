import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBar from "./AppBar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

const JewelRate = () => {
  const [rates, setRates] = useState({
    perGram24k: 0,
    perPawn24k: 0,
    perGram23k: 0,
    perGram22k: 0,
    perGram21k: 0,
    perGram20k: 0,
    perGram19k: 0,
    perGram18k: 0,
  });
  const [loading, setLoading] = useState(true);

  const API_KEY = "fde38ef2e6c76183b5ada516f86bc435";
  const GOLD_PREMIUM = 1.12;

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 500,
      duration: 3000,
      easing: "ease",
      mirror: true,
    });

    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=INR&currencies=XAU,XAG`
        );
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        const data = await response.json();

        if (data.success) {
          const goldPerOz = parseFloat(data.rates.XAU || 0);
          const OZS_TO_GRAMS = 31.1035;
          let goldPerGram24k = (
            (goldPerOz / OZS_TO_GRAMS) *
            GOLD_PREMIUM
          ).toFixed(2);

          const goldPerPawn24k = (parseFloat(goldPerGram24k) * 8).toFixed(2);

          // Calculate for different carats (assuming per gram prices)
          const fractions = {
            "23k": 23 / 24,
            "22k": 22 / 24,
            "21k": 21 / 24,
            "20k": 20 / 24,
            "19k": 19 / 24,
            "18k": 18 / 24,
          };

          const calculatedRates = {
            perGram24k: goldPerGram24k,
            perPawn24k: goldPerPawn24k,
            perGram23k: (parseFloat(goldPerGram24k) * fractions["23k"]).toFixed(
              2
            ),
            perGram22k: (parseFloat(goldPerGram24k) * fractions["22k"]).toFixed(
              2
            ),
            perGram21k: (parseFloat(goldPerGram24k) * fractions["21k"]).toFixed(
              2
            ),
            perGram20k: (parseFloat(goldPerGram24k) * fractions["20k"]).toFixed(
              2
            ),
            perGram19k: (parseFloat(goldPerGram24k) * fractions["19k"]).toFixed(
              2
            ),
            perGram18k: (parseFloat(goldPerGram24k) * fractions["18k"]).toFixed(
              2
            ),
          };

          setRates(calculatedRates);
        } else {
          throw new Error(data.error?.message || "API failed");
        }
      } catch (error) {
        console.error("Error:", error);
        // Fallback values (based on your original fallback)
        const fallbackPerGram24k = 13277;
        const fallbackPerPawn24k = (fallbackPerGram24k * 8).toFixed(2);
        const fallbackRates = {
          perGram24k: fallbackPerGram24k.toFixed(2),
          perPawn24k: fallbackPerPawn24k,
          perGram23k: ((fallbackPerGram24k * 23) / 24).toFixed(2),
          perGram22k: ((fallbackPerGram24k * 22) / 24).toFixed(2),
          perGram21k: ((fallbackPerGram24k * 21) / 24).toFixed(2),
          perGram20k: ((fallbackPerGram24k * 20) / 24).toFixed(2),
          perGram19k: ((fallbackPerGram24k * 19) / 24).toFixed(2),
          perGram18k: ((fallbackPerGram24k * 18) / 24).toFixed(2),
        };
        setRates(fallbackRates);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <>
        <div className="over">
          <AppBar />
          <div className="text-center py-5 para-text">
            <h4>Loading rates...</h4>
          </div>
          <Footer />
        </div>
      </>
    );
  }

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
              <Col lg={6} md={10} sm={12}>
                <div className="box shadow-sm">
                  <ul className="box-list">
                    <li className="para-text">
                      1 பவ்ன் (24k) = ₹{rates.perPawn24k}
                    </li>
                    <li className="para-text">
                      1 கிராம் (24k) = ₹{rates.perGram24k}
                    </li>
                    <li className="para-text">
                      24 கேரட் (1 கிராம்) = ₹{rates.perGram24k}
                    </li>
                    <li className="para-text">
                      23 கேரட் (1 கிராம்) = ₹{rates.perGram23k}
                    </li>
                    <li className="para-text">
                      22 கேரட் (1 கிராம்) = ₹{rates.perGram22k}
                    </li>
                    <li className="para-text">
                      21 கேரட் (1 கிராம்) = ₹{rates.perGram21k}
                    </li>
                    <li className="para-text">
                      20 கேரட் (1 கிராம்) = ₹{rates.perGram20k}
                    </li>
                    <li className="para-text">
                      19 கேரட் (1 கிராம்) = ₹{rates.perGram19k}
                    </li>
                    <li className="para-text">
                      18 கேரட் (1 கிராம்) = ₹{rates.perGram18k}
                    </li>
                  </ul>
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
