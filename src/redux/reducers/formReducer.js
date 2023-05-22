import types from "../types";

const initialState = {
  StepsData: [],
  StepsPaths: {},
  StepsDataLoading: true,
  StepsPathsLoading: true,
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FORM_FIELD:
      return {
        ...state,
        [action.payload.fieldName]: {
          ...state[action.payload.fieldName],
          value: action.payload.value,
        },
      };
    case types.SET_FORM_FIELD_ERROR:
      return {
        ...state,
        [action.payload.fieldName]: {
          ...state[action.payload.fieldName],
          error: action.payload.error,
        },
      };
    case types.SET_STEPS_DATA:
      return {
        ...state,
        StepsData: action.payload,
        StepsDataLoading: false,
      };
    case types.SET_STEPS_PATHS:
      return {
        ...state,
        StepsPaths: action.payload,
        StepsPathsLoading: false,
      };
    default:
      return state;
  }
};

export default formReducer;
