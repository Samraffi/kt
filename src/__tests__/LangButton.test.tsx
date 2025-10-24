import { fireEvent, render, screen } from "@testing-library/react";
import { within } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import LangButton from "../components/ui/LangButton/LangButton";
import i18n from "../utils/i18n";

describe("LangButton", () => {
  test("should change language to ru when selecting RU in dropdown", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangButton />
      </I18nextProvider>
    );

    const toggle = screen.getByRole("button", { name: /ru|en/i });
    fireEvent.click(toggle);
    const list = screen.getByRole("list");
    const ruOption = within(list).getByText(/^ru$/i);
    fireEvent.click(ruOption);

    expect(i18n.language).toBe("ru");
  });

  test("should change language to en when selecting EN in dropdown", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangButton />
      </I18nextProvider>
    );

    const toggle = screen.getByRole("button", { name: /ru|en/i });
    fireEvent.click(toggle);
    const list = screen.getByRole("list");
    const enOption = within(list).getByText(/^en$/i);
    fireEvent.click(enOption);

    expect(i18n.language).toBe("en");
  });
});
