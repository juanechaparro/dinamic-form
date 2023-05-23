import { render, fireEvent, screen } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import { FormField } from "../../pages/StepsForm/FormField";
import { createStore } from "redux";
import { store } from "../../redux/store";

// jest.mock("react-redux");
/* const store = createStore(() => ({
  form: {
    name: {
      value: "",
      error: "",
    },
  },
})); */
describe("FormField", () => {
  test("renderiza correctamente el componente", () => {
    render(
      <Provider store={store}>
        <FormField
          fieldName="name"
          value="hola"
          type="text"
          options={[]}
          validate={() => {}}
          onFieldChange={() => {}}
          name="Name"
        />
      </Provider>
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeTruthy();
  });
  test("se llama onFieldChange al realizar cambios en el campo de entrada", () => {
    const onFieldChangeMock = jest.fn();

    render(
      <Provider store={store}>
        <FormField
          fieldName="name"
          value=""
          type="text"
          options={[]}
          validate={() => {}}
          onFieldChange={onFieldChangeMock}
          name="Name"
        />
      </Provider>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Value" } });

    expect(onFieldChangeMock).toHaveBeenCalledTimes(1); // Verificar que la función simulada se llamó una vez
    expect(onFieldChangeMock).toHaveBeenCalledWith("name", "New Value"); // Verificar los argumentos pasados a la función simulada
  });

  test("renderiza correctamente un input de número", () => {
    render(
      <Provider store={store}>
        <FormField
          fieldName="floor"
          value={0}
          type="number"
          options={[1, 50]}
          validate={() => {}}
          onFieldChange={() => {}}
          name="floor"
        />
      </Provider>
    );

    const input = screen.getByRole("spinbutton");
    expect(input).toBeTruthy();
  });
  test("renderiza correctamente un input de checkbox", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <FormField
          fieldName="hobbies"
          value={[]}
          type="checkbox"
          options={[
            { name: "Reading", value: "reading" },
            { name: "Sports", value: "sports" },
          ]}
          validate={() => {}}
          onFieldChange={() => {}}
          name="Hobbies"
        />
      </Provider>
    );

    const readingCheckbox = getByLabelText("Reading");
    const sportsCheckbox = getByLabelText("Sports");
    expect(readingCheckbox).toBeTruthy();
    expect(sportsCheckbox).toBeTruthy();
  });
});
