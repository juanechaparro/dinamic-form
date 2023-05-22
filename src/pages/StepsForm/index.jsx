import { useDispatch, useSelector } from "react-redux";
import { FormField } from "./FormField";
import { Link } from "react-router-dom";
import { Summary } from "../../components/Summary";
import { uiOpenModal } from "../../redux/actions/ui";
import { SummaryModal } from "../../components/SummaryModal";
import { updateFormField } from "../../redux/actions/form";

export const StepsForm = ({
  component,
  path,
  order,
  description,
  type,
  options,
}) => {
  const dispatch = useDispatch();
  const fieldValue = useSelector((state) => {
    const fieldState = state.form[component];
    return fieldState ? fieldState.value : "";
  });
  const { StepsPaths, StepsPathsLoading } = useSelector((state) => state.form);
  const stepsLength = StepsPathsLoading ? 0 : Object.keys(StepsPaths).length;
  const validate = (value) => {
    if (value.length < 1) {
      return "El campo debe tener al menos 1 caracteres";
    }
    return "";
  };
  const onFieldChange = (fieldName, value) => {
    dispatch(updateFormField(fieldName, value));
  };
  const openModal = () => {
    dispatch(uiOpenModal());
  };
  return StepsPathsLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      Paso {order} de {stepsLength}
      {component === "SummaryStep" ? (
        <Summary />
      ) : (
        <>
          <FormField
            fieldName={component}
            description={description}
            type={type}
            options={options}
            value={fieldValue}
            validate={validate}
            onFieldChange={onFieldChange}
          />
          {order > 1 ? (
            <Link to={StepsPaths[order - 1]}>Paso Anterior </Link>
          ) : null}
          {order < stepsLength ? (
            <Link to={StepsPaths[order + 1]}>Siguiente paso</Link>
          ) : null}
          <button onClick={openModal}>Abrir Resumen</button>
          <Summary />
          <SummaryModal />
        </>
      )}
    </div>
  );
};
