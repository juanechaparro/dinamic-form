import { useDispatch, useSelector } from "react-redux";
import { FormField } from "./FormField";
import { Link, useNavigate } from "react-router-dom";
import { Summary } from "../../components/Summary";
import { uiOpenModal } from "../../redux/actions/ui";
import { SummaryModal } from "../../components/SummaryModal";
import { setFormFieldError, updateFormField } from "../../redux/actions/form";
import { validate } from "../../utils";
import "../../styles/StepsForm.css";
import Stepper from "./Stepper";
import Swal from "sweetalert2";
export const StepsForm = ({
  component,
  path,
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
  //   dispatch(updateFormField(`${component}Error`, validation));
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
              <div className="button-container">
                {order > 1 ? (
                  <Link
                    className={"button button-prev"}
                    to={StepsPaths[order - 1]}
                  >
                    <span className="button-icon">←</span> Atras
                  </Link>
                ) : null}
                {order < stepsLength ? (
                  <button className="button" onClick={nextStep}>
                    Siguiente <span className="button-icon">→</span>
                  </button>
                ) : null}
                <button className="button mt-10 mobile" onClick={openModal}>
                  Abrir Resumen
                </button>
              </div>
            </section>
            <section className="desktop">
              <Summary />
            </section>
          </main>
        )}
      </>
    );
};
