import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StepsForm } from "../../pages/StepsForm";
import { store } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
describe("pruebas en StepsForm", () => {
  test("renderiza correctamente el componente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <StepsForm />
        </MemoryRouter>
      </Provider>
    );
    screen.debug();
  });
});
