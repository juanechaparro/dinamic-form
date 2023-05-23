import { CheckboxInput } from "./CheckboxInput";
import { NumberInput } from "./NumberInput";
import { useSelector } from "react-redux";
import "../../styles/FormField.css";
export const FormField = ({
  fieldName,
  value,
  type,
  options,
  validate,
  onFieldChange,
  name,
}) => {
  const fieldError = useSelector((state) => {
    const fieldState = state.form[`${fieldName}`]?.error;
    return fieldState ? fieldState : "";
  });
  const handleChange = (e) => {
    let newValue;
    if (type === "checkbox") {
      const checkboxValue = e.target.value;
      const isChecked = e.target.checked;
      if (isChecked) {
        newValue = [...value, checkboxValue];
      } else {
        newValue = value.filter((val) => val !== checkboxValue);
      }
    } else {
      newValue = e.target.value;
    }
    onFieldChange(fieldName, newValue);
  };

  const renderInput = () => {
    switch (type) {
      case "checkbox":
        return (
          <CheckboxInput
            options={options}
            fieldName={fieldName}
            handleChange={handleChange}
            value={value}
          />
        );

      case "number":
        return (
          <NumberInput
            value={value}
            handleChange={handleChange}
            options={options}
            error={fieldError}
          />
        );
      default:
        return (
          <>
            <input
              type={type}
              value={value}
              onChange={handleChange}
              className={`form-input ${fieldError ? "input-error" : ""}`}
            />
            {fieldError && <span className="error-message">{fieldError}</span>}
          </>
        );
    }
  };

  return (
    <div className="input-container">
      <label
        className={`input-label ${fieldError ? "label-error" : ""}`}
        htmlFor={fieldName}
      >
        {name}
      </label>
      {renderInput()}
    </div>
  );
};
