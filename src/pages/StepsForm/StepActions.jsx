import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const StepActions = ({
  order,
  StepsPaths,
  stepsLength,
  nextStep,
  openModal,
}) => {
  return (
    <div className="button-container">
      {order > 1 ? (
        <Link className={"button button-prev"} to={StepsPaths[order - 1]}>
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
  );
};

StepActions.propTypes = {
  order: PropTypes.number,
  StepsPaths: PropTypes.object,
  stepsLength: PropTypes.number,
  nextStep: PropTypes.func,
  openModal: PropTypes.func,
};
