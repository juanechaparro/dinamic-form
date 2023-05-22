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
