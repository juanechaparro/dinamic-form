import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StepsForm } from "../../pages/StepsForm";
import { store } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
describe("pruebas en StepsForm", () => {
  test("renderiza correctamente el componente", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <StepsForm
            component="FullName"
            order={1}
            description="Nombre y apellidos del cliente"
            type="text"
            id={1}
            name="Nombre completo"
          />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
