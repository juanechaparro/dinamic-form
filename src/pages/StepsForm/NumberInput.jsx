import PropTypes from "prop-types";
export const NumberInput = ({ value, handleChange, options, numberError }) => {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={options[0]}
        max={options[1]}
        className={`form-input ${numberError ? "input-error" : ""}`}
      />
      {numberError && <span className="error-message">{numberError}</span>}
    </div>
  );
};

NumberInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  numberError: PropTypes.string,
};
