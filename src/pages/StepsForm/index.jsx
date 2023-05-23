import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FormField } from "./FormField";
import { useNavigate } from "react-router-dom";
import { Summary } from "../../components/Summary";
import { uiOpenModal } from "../../redux/actions/ui";
import { SummaryModal } from "../../components/SummaryModal";
import { setFormFieldError, updateFormField } from "../../redux/actions/form";
import { validate } from "../../utils";
import "../../styles/StepsForm.css";
import { Stepper } from "./Stepper";
import Swal from "sweetalert2";
import { StepActions } from "./StepActions";
export const StepsForm = ({
  component,
  order,
  description,
  type,
  options,
  name,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fieldValue = useSelector((state) => {
    const fieldState = state.form[component]?.value;
    return fieldState ? fieldState : "";
  });
  const { StepsPaths, StepsPathsLoading } = useSelector((state) => state.form);
  const stepsLength = StepsPathsLoading ? 0 : Object.keys(StepsPaths).length;

  const onFieldChange = (fieldName, value) => {
    dispatch(updateFormField(fieldName, value));
  };
  const openModal = () => {
    dispatch(uiOpenModal());
  };
  const nextStep = () => {
    const validation = validate(fieldValue, type, options);
    if (validation) {
      dispatch(setFormFieldError(`${component}`, validation));
      Swal.fire({
        title: "Error!",
        text: validation,
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    } else {
      dispatch(setFormFieldError(`${component}`, ""));
      localStorage.setItem(component, fieldValue);
      navigate(StepsPaths[order + 1]);
    }
  };
  if (StepsPathsLoading) {
    return <div>Loading...</div>;
  } else
    return (
      <>
        {component === "SummaryStep" ? (
          <Summary lastStep={true} />
        ) : (
          <main className="stepsForm_container">
            <section className="steps-form_fields-container">
              <Stepper currentStep={order} totalSteps={stepsLength} />
              <SummaryModal />
              <FormField
                fieldName={component}
                description={description}
                type={type}
                options={options}
                name={name}
                value={fieldValue}
                validate={validate}
                onFieldChange={onFieldChange}
              />
              <StepActions
                nextStep={nextStep}
                openModal={openModal}
                order={order}
                stepsLength={stepsLength}
                StepsPaths={StepsPaths}
              />
            </section>
            <section className="desktop">
              <Summary />
            </section>
          </main>
        )}
      </>
    );
};

StepsForm.propTypes = {
  component: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
  options: PropTypes.array,
  name: PropTypes.string,
};
