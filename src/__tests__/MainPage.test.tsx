import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { I18nextProvider } from "react-i18next";

import MainPage from "../pages/MainPage/MainPage";
import i18n from "../utils/i18n";

describe("MainPage", () => {
  test.skip("should navigate to the hr email when clicking on the link", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MainPage />
      </I18nextProvider>
    );
    const mailtoLink = screen.getByRole("link", { name: /hr@pluhsoft.com/i });
    expect(mailtoLink).toHaveAttribute("href", "mailto:hr@pluhsoft.com");

    fireEvent.click(mailtoLink);

    expect(mailtoLink).toHaveAttribute("href", "mailto:hr@pluhsoft.com");
  });
});
