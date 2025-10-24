import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { I18nextProvider } from "react-i18next";

import ApplicationMain from "../components/ApplicationMain/ApplicationMain";
import i18n from "../utils/i18n";

describe("ApplicationForm Validation", () => {
  it("should display validation errors for all fields when they are empty", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ApplicationMain />
      </I18nextProvider>
    );

    const submitButton = screen.getByRole("button", {
      name: /Submit|Отправить/i,
    });

    await userEvent.click(submitButton);

    expect(
      screen.getByText(
        /Specify the email address|Укажите адрес электронной почты/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Enter a name|Укажите имя/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Describe the problem|Опишите проблему/i)
    ).toBeInTheDocument();
  });
});
