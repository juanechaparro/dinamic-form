import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StepsComponent } from './components/StepsComponent';
import steps from '../data.json';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {steps.map((step) => (
        <Route
          key={step.path}
          path={step.path}
          element={<StepsComponent step={step} />}
        />
      ))}
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
