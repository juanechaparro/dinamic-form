import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFormField } from "../redux/actions/form";

export const useLocalStorage = (steps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    steps.forEach((step) => {
      const savedValue = localStorage.getItem(step.component);
      if (savedValue) {
        dispatch(updateFormField(step.component, savedValue));
      }
    });
  }, [dispatch, steps]);
};
