import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ConditionSwitcher = ({ conditions }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="text-center">
      {/* Buttons */}
      <div className="d-flex justify-content-center my-3">
        {conditions.map((cond, index) => (
          <Button
            key={index}
            variant={activeIndex === index ? "danger" : "outline-danger"}
            className="mx-2"
            onClick={() => handleClick(index)}
          >
            {cond.label}
          </Button>
        ))}
      </div>

      {/* Active Image */}
      <div className="mt-3">
        <img
          src={conditions[activeIndex].image}
          alt={conditions[activeIndex].label}
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default ConditionSwitcher;
