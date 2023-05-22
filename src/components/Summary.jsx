import { useSelector } from "react-redux";

export const Summary = () => {
  const { form } = useSelector((state) => state);
  const { StepsDataLoading, StepsData } = form;
  return StepsDataLoading ? (
    <div>...Loading </div>
  ) : (
    <div>
      Summary
      <div>
        {StepsData.map(
          (step) =>
            form[step.component] && (
              <div key={step.component}>
                <div> Descripcion: {step.description}</div>
                <div> Valor {form[step.component].value}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
