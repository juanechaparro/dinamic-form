import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { render } from "@testing-library/react";
import { Summary } from "../../components/Summary";

describe("pruebas en Summary", () => {
  test("Renderización correcta del componente", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Summary />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
