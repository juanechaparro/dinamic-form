import PropTypes from "prop-types";
export const CheckboxInput = ({ options, fieldName, handleChange, value }) => {
  return (
    <>
      {options.map((option) => (
        <div key={option.value}>
          <input
            className="checkbox"
            type="checkbox"
            id={`${fieldName}_${option.value}`}
            name={fieldName}
            value={option.value}
            checked={value.includes(option.value)}
            onChange={handleChange}
          />
          <label
            className="checkbox-label"
            htmlFor={`${fieldName}_${option.value}`}
          >
            {option.name}
          </label>
        </div>
      ))}
    </>
  );
};

CheckboxInput.propTypes = {
  options: PropTypes.array,
  fieldName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
