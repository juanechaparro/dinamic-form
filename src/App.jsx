import { Routes, Route } from "react-router-dom";
import { StepsForm } from "./pages/StepsForm";
import { Home } from "./pages/Home/Index";
import steps from "../data.json";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setStepsData, setStepsPaths } from "./redux/actions/form";
import { getOrderPathMap } from "./utils";
import { Footer } from "./components/Footer";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStepsData(steps));
    dispatch(setStepsPaths(getOrderPathMap(steps)));
  }, [dispatch]);
  useLocalStorage(steps);
  return (
    <div className="container">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {steps.map((step) => (
            <Route
              key={step.path}
              path={step.path}
              element={<StepsForm {...step} />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
