import { Provider } from "react-redux";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { store } from "../../redux/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Summary } from "../../components/Summary";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
describe("pruebas en Summary", () => {
  const mockStore = configureStore([]);
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
  test("llama sendForm cuando 'Enviar' es seleccionado", () => {
    const store = mockStore({
      form: {
        StepsDataLoading: false,
        StepsData: [],
      },
    });
    const sendFormMock = jest.fn();
    const closeModalMock = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Summary
            lastStep={true}
            sendForm={sendFormMock}
            closeModal={closeModalMock}
          />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByText("Enviar");
    expect(input).toBeTruthy();
    // console.log(input);
    fireEvent.click(input);

    expect(mockedUseNavigate).toHaveBeenCalledWith("/");
    expect(closeModalMock).not.toHaveBeenCalled();
  });
  test("renderiza correctamente cuando lastStep es false", () => {
    const store = mockStore({
      form: {
        StepsDataLoading: false,
        StepsData: [],
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Summary lastStep={false} style={{ width: "300px" }} />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByText("Cerrar");
    expect(input).toBeTruthy();
  });
});
