import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  //getStepsData();
  const { StepsPaths, StepsPathsLoading } = useSelector((state) => state.form);
  console.log(StepsPaths);

  return (
    <div>
      Home
      {StepsPathsLoading ? (
        <div>Loading...</div>
      ) : (
        <Link to={StepsPaths[1]}>Completar información del inmueble</Link>
      )}
    </div>
  );
};
