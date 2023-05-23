import types from "../types";

export const updateFormField = (fieldName, value) => ({
  type: types.UPDATE_FORM_FIELD,
  payload: {
    fieldName,
    value,
  },
});
export const setFormFieldError = (fieldName, error) => ({
  type: types.SET_FORM_FIELD_ERROR,
  payload: {
    fieldName,
    error,
  },
});
export const setStepsData = (stepsData) => ({
  type: types.SET_STEPS_DATA,
  payload: stepsData,
});
export const setStepsPaths = (stepsPaths) => ({
  type: types.SET_STEPS_PATHS,
  payload: stepsPaths,
});

export const clearForm = () => ({
  type: types.CLEAR_FORM,
});
