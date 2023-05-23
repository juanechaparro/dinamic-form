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
    screen.debug();
    const input = screen.getByRole("textbox");
    expect(input).toBeTruthy();
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
