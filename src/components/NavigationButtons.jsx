import React from "react";

const NavigationButtons = ({ onPrevious, onNext }) => {
  return (
    <div className="navigation-buttons">
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default NavigationButtons;
