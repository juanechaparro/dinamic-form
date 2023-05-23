import { render, fireEvent } from "@testing-library/react";
import { useSelector } from "react-redux";
import { FormField } from "../../pages/StepsForm/FormField";

jest.mock("react-redux");

describe("pruebas en FormField.jsx", () => {
  test("renderiza correctamente un input de texto", () => {
    useSelector.mockReturnValue({ form: { name: { error: "" } } });

    const { getByLabelText } = render(
      <FormField
        fieldName="name"
        value=""
        type="text"
        options={[]}
        validate={() => {}}
        onFieldChange={() => {}}
        name="Name"
      />
    );

    const input = getByLabelText("Name");
    expect(input).toBeTruthy();
  });

  test("renderiza correctamente un input de número", () => {
    useSelector.mockReturnValue({ form: { age: { error: "" } } });

    const { getByLabelText } = render(
      <FormField
        fieldName="age"
        value={0}
        type="number"
        options={[]}
        validate={() => {}}
        onFieldChange={() => {}}
        name="Age"
      />
    );

    const input = getByLabelText("Age");
    expect(input).toBeInTheDocument();
  });

  test("renderiza correctamente un input de checkbox", () => {
    useSelector.mockReturnValue({ form: { hobbies: { error: "" } } });

    const { getByLabelText } = render(
      <FormField
        fieldName="hobbies"
        value={[]}
        type="checkbox"
        options={[
          { label: "Reading", value: "reading" },
          { label: "Sports", value: "sports" },
        ]}
        validate={() => {}}
        onFieldChange={() => {}}
        name="Hobbies"
      />
    );

    const readingCheckbox = getByLabelText("Reading");
    const sportsCheckbox = getByLabelText("Sports");

    fireEvent.click(readingCheckbox);
    fireEvent.click(sportsCheckbox);

    expect(readingCheckbox.checked).toBe(true);
    expect(sportsCheckbox.checked).toBe(true);
  });
});
