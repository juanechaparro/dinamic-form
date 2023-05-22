export const CheckboxInput = ({ options, fieldName, handleChange, value }) => {
  return (
    <>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="checkbox"
            id={`${fieldName}_${option.value}`}
            name={fieldName}
            value={option.value}
            checked={value.includes(option.value)}
            onChange={handleChange}
          />
          <label htmlFor={`${fieldName}_${option.value}`}>{option.name}</label>
        </div>
      ))}
    </>
  );
};
