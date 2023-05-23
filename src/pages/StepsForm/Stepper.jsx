import "../../styles/Stepper.css";
import PropTypes from "prop-types";
export const Stepper = ({ currentStep, totalSteps }) => {
  return (
    <div className="stepper">
      {[...Array(totalSteps)].map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber <= currentStep;
        const circleStyle = {
          backgroundColor: isActive ? "#8004fc" : "transparent",
          color: isActive ? "#fff" : "#8004fc",
        };

        return (
          <div className="step" key={stepNumber}>
            <div className="circle" style={circleStyle}>
              {isActive ? stepNumber : ""}
            </div>
            {stepNumber < totalSteps && (
              <div className={`line ${isActive ? "active" : ""}`} />
            )}
          </div>
        );
      })}
      <div className="step-label">{`${currentStep}/${totalSteps}`}</div>
    </div>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};
