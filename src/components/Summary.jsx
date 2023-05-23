import { useDispatch, useSelector } from "react-redux";
import "../styles/Summary.css";
import { uiCloseModal } from "../redux/actions/ui";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Summary = ({ lastStep = false }) => {
  const { form } = useSelector((state) => state);
  const { StepsDataLoading, StepsData } = form;
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(uiCloseModal());
  };
  const sendForm = () => {
    //validate all steps
    const StepsToComplete = [];
    StepsData.forEach((step) => {
      if (!form[step.component] && step.component !== "SummaryStep") {
        StepsToComplete.push(`Paso ${step.order} ${step.name} `);
      }
    });
    if (StepsToComplete.length > 0) {
      Swal.fire({
        title: "Error!",
        text: `Debe completar los siguientes pasos: ${StepsToComplete.join(
          ", "
        )}`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Formulario enviado!",
        text: "Gracias por completar el formulario",
        icon: "success",
        confirmButtonText: "Ok",
      });
      Navigate("/");
    }
  };
  return StepsDataLoading ? (
    <div className="summary-loading">...Loading</div>
  ) : (
    <div className={`summary ${lastStep ? "summary_lastStep" : ""}`}>
      <h2 className="summary-title">Resumen de datos :</h2>
      <div className="summary-content">
        {StepsData.map((step) => {
          const formData = form[step.component];
          const hasFormData = formData && formData.value;
          const hasError = formData && formData.error;

          return (
            hasFormData && (
              <div key={step.component} className="summary-step">
                <div className="summary-step-header">
                  <span className="summary-step-number">
                    Paso {step.order} {step.name} :
                  </span>
                  <span className="summary-step-value">{formData.value}</span>
                </div>
                {hasError && (
                  <div className="summary-error">Error: {formData.error}</div>
                )}
                <div className="summary-description">
                  Descripción: {step.description}
                </div>
              </div>
            )
          );
        })}
      </div>
      {lastStep ? (
        <button className="summary-send-button" onClick={sendForm}>
          Enviar
        </button>
      ) : (
        <button className="summary-close-button" onClick={closeModal}>
          Cerrar
        </button>
      )}
    </div>
  );
};
