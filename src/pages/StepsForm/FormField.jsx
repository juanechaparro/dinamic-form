import { CheckboxInput } from "./CheckboxInput";
import { NumberInput } from "./NumberInput";
import { useSelector } from "react-redux";

export const FormField = ({
  fieldName,
  value,
  type,
  options,
  validate,
  onFieldChange,
}) => {
  const fieldError = useSelector((state) => {
    const fieldState = state.form[`${fieldName}Error`]?.value;
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

    // if (validate) {
    //   const error = validate(newValue, type, options);
    //   onFieldChange(`${fieldName}Error`, error);
    // }
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
          <div>
            <input
              type={type}
              value={value}
              onChange={handleChange}
              className={`form-input ${fieldError ? "input-error" : ""}`}
            />
            {fieldError && <span className="error-message">{fieldError}</span>}
          </div>
        );
    }
  };

  return (
    <div>
      <label htmlFor={fieldName}>{fieldName}</label>
      {renderInput()}
    </div>
  );
};
