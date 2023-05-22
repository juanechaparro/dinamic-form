import { CheckboxInput } from "./CheckboxInput";
import { NumberInput } from "./NumberInput";

export const FormField = ({
  fieldName,
  value,
  type,
  options,
  validate,
  onFieldChange,
}) => {
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

    if (validate) {
      const error = validate(newValue, type, options);
      onFieldChange(`${fieldName}Error`, error);
    }
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
          />
        );
      default:
        const textError = validate ? validate(value) : "";
        return (
          <div>
            <input type={type} value={value} onChange={handleChange} />
            {textError && <span className="error-message">{textError}</span>}
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
