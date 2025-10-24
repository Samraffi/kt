import { render, screen } from "@testing-library/react";

import PrivatePackages from "../components/PrivatePackages/PrivatePackages";
import { PrivatePackagesProps } from "../components/PrivatePackages/PrivatePackages.types";

export const PRIVATE_PACKAGES_MOCK: PrivatePackagesProps = {
  mainTitle: "Приватные пакеты/артефакты",
  definition:
    "Приватные пакеты — это закрытые программные компоненты для внутреннего использования в компании.",
  features: [
    {
      title: "Безопасность",
      description: "Контроль доступа к коду и данным.",
    },
    {
      title: "Управление версиями",
      description: "Централизованное управление зависимостями.",
    },
  ],
  platforms: [
    {
      name: "GitHub Packages",
      description: "Интегрирован с GitHub.",
      advantages: "Простота использования.",
    },
    {
      name: "JFrog Artifactory",
      description: "Универсальное хранилище для разных типов пакетов.",
      advantages: "Гибкость и автоматизация.",
    },
  ],
  artifactTypes: [
    "Библиотеки кода (npm, Maven, PyPI).",
    "Docker-образы для контейнеров.",
    "Вспомогательные утилиты и скрипты.",
  ],
  process: [
    "Публикация: Разработчики загружают пакеты в репозиторий.",
    "Версионирование: Управление версиями для совместимости.",
    "Использование: Другие проекты подключают пакеты как зависимости.",
  ],
  whenToUse: [
    "Когда код содержит конфиденциальную информацию.",
    "Для совместной работы команд над общими компонентами.",
    "Когда нужен строгий контроль над зависимостями.",
  ],
  summary: {
    title: "Кратко",
    points: [
      "Приватные пакеты — код для внутреннего использования.",
      "Преимущества: безопасность, контроль версий.",
      "Примеры платформ: GitHub Packages, JFrog Artifactory.",
    ],
  },
};

describe("Компонент PrivatePackages", () => {
  test("Корректно отображает заголовок", () => {
    render(<PrivatePackages {...PRIVATE_PACKAGES_MOCK} />);

    const titleElement = screen.getByTestId("main-title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(PRIVATE_PACKAGES_MOCK.mainTitle);
  });
});
