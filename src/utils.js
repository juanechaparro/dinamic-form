export const getOrderPathMap = (stepsData) => {
  const orderPathMap = {};

  stepsData.forEach((item) => {
    const { order, path } = item;
    orderPathMap[order] = path;
  });

  return orderPathMap;
};
const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? false : "Correo electrónico inválido";
};
const validateNumber = (value, options) => {
  const [min, max] = options;
  const numberRegex = /^\d+$/;
  if (!numberRegex.test(value)) {
    return "Solo se permiten números";
  }
  if (min && value < min) {
    return `El valor mínimo es ${min}`;
  }
  if (max && value > max) {
    return `El valor máximo es ${max}`;
  }
  return false;
};
const validateText = (value) => {
  return value.length > 3
    ? false
    : "Este campo es requerido y debe ser mayor a 3 caracteres";
};

export const validate = (value, type, options) => {
  switch (type) {
    case "email":
      return validateEmail(value);
    case "number":
      return validateNumber(value, options);
    case "text":
      return validateText(value);
    default:
      return false;
  }
};
