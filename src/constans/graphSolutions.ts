// Define the correct solutions for each graph topic
// Each solution specifies the expected connections between workflow steps

export interface ExpectedConnection {
  from: string; // Source step (from workflow array)
  to: string; // Target step (from workflow array)
  label: string; // Expected connection label
  hint?: string; // Hint to show if connection is missing or incorrect
}

export interface GraphSolution {
  topic: string;
  expectedConnections: ExpectedConnection[];
  description: string;
}

export const GRAPH_SOLUTIONS: GraphSolution[] = [
  {
    topic: "Kanban Board",
    description: "Правильная последовательность задач на Kanban доске",
    expectedConnections: [
      {
        from: "To Do - Задачи для выполнения",
        to: "In Progress - Задачи в работе",
        label: "Следующий этап",
        hint: "Задачи из To Do должны переходить в In Progress когда начинается работа",
      },
      {
        from: "In Progress - Задачи в работе",
        to: "Code Review - Проверка кода",
        label: "Код ревью",
        hint: "После завершения разработки код должен пройти ревью",
      },
      {
        from: "Code Review - Проверка кода",
        to: "Testing - Тестирование",
        label: "Тестирование",
        hint: "После успешного ревью код переходит на тестирование",
      },
      {
        from: "Testing - Тестирование",
        to: "Done - Завершенные задачи",
        label: "Завершить",
        hint: "После успешного тестирования задача считается выполненной",
      },
    ],
  },
  {
    topic: "Scrum Board",
    description: "Правильная последовательность задач в Scrum спринте",
    expectedConnections: [
      {
        from: "To Do - Бэклог спринта",
        to: "In Progress - Задачи в разработке",
        label: "Начать спринт",
        hint: "Задачи из бэклога переходят в разработку в начале спринта",
      },
      {
        from: "In Progress - Задачи в разработке",
        to: "Code Review - Проверка кода",
        label: "Code Review",
        hint: "Разработанный код должен пройти проверку командой",
      },
      {
        from: "Code Review - Проверка кода",
        to: "Testing - Тестирование",
        label: "Тестирование",
        hint: "После ревью код проходит тестирование QA",
      },
      {
        from: "Testing - Тестирование",
        to: "Done - Завершенные задачи",
        label: "Готово к релизу",
        hint: "Протестированные задачи переходят в Done и готовы к релизу",
      },
    ],
  },
  {
    topic: "Git Flow",
    description: "Правильная модель ветвления Git Flow",
    expectedConnections: [
      {
        from: "develop - Интеграционная ветка",
        to: "feature/* - Новые функции",
        label: "Создать ветку",
        hint: "Feature ветки создаются от develop для разработки новых функций",
      },
      {
        from: "feature/* - Новые функции",
        to: "develop - Интеграционная ветка",
        label: "Merge в main",
        hint: "Завершенные feature ветки вливаются обратно в develop",
      },
      {
        from: "develop - Интеграционная ветка",
        to: "release/* - Подготовка релиза",
        label: "Создать релиз",
        hint: "Release ветки создаются от develop для подготовки к релизу",
      },
      {
        from: "release/* - Подготовка релиза",
        to: "main - Стабильная версия",
        label: "Merge в main",
        hint: "Готовый релиз вливается в main для продакшн версии",
      },
      {
        from: "main - Стабильная версия",
        to: "hotfix/* - Критические исправления",
        label: "Создать ветку",
        hint: "Hotfix ветки создаются от main для быстрых исправлений",
      },
      {
        from: "hotfix/* - Критические исправления",
        to: "main - Стабильная версия",
        label: "Merge в main",
        hint: "Hotfix вливается обратно в main и develop",
      },
    ],
  },
  {
    topic: "CI/CD Pipeline",
    description: "Правильная последовательность этапов CI/CD пайплайна",
    expectedConnections: [
      {
        from: "Source - Исходный код",
        to: "Build - Сборка приложения",
        label: "Сборка",
        hint: "Исходный код сначала компилируется и собирается",
      },
      {
        from: "Build - Сборка приложения",
        to: "Test - Автоматические тесты",
        label: "Автотесты",
        hint: "После сборки запускаются автоматические тесты",
      },
      {
        from: "Test - Автоматические тесты",
        to: "Deploy to Dev - Развертывание в dev",
        label: "Deploy в dev",
        hint: "После успешных тестов приложение деплоится в dev окружение",
      },
      {
        from: "Deploy to Dev - Развертывание в dev",
        to: "Deploy to Staging - Развертывание в staging",
        label: "Deploy в staging",
        hint: "После тестирования в dev переходим к staging окружению",
      },
      {
        from: "Deploy to Staging - Развертывание в staging",
        to: "Deploy to Production - Развертывание в продакшн",
        label: "Deploy в production",
        hint: "После финального тестирования в staging деплоим в продакшн",
      },
    ],
  },
  {
    topic: "Testing Strategy",
    description: "Правильная стратегия тестирования (пирамида тестов)",
    expectedConnections: [
      {
        from: "Unit Tests - Модульные тесты",
        to: "Integration Tests - Интеграционные тесты",
        label: "Integration тесты",
        hint: "Сначала пишутся unit тесты, затем интеграционные тесты",
      },
      {
        from: "Integration Tests - Интеграционные тесты",
        to: "E2E Tests - End-to-End тесты",
        label: "E2E тесты",
        hint: "После интеграционных тестов проводятся E2E тесты",
      },
      {
        from: "E2E Tests - End-to-End тесты",
        to: "Performance Tests - Тесты производительности",
        label: "Performance тесты",
        hint: "После функциональных тестов проверяется производительность",
      },
      {
        from: "Performance Tests - Тесты производительности",
        to: "Security Tests - Тесты безопасности",
        label: "Security тесты",
        hint: "Финальный этап - проверка безопасности приложения",
      },
    ],
  },
  {
    topic: "Code Review Process",
    description: "Правильный процесс проверки кода",
    expectedConnections: [
      {
        from: "Create PR - Создание Pull Request",
        to: "Automated Checks - Автоматические проверки",
        label: "Автоматические проверки",
        hint: "После создания PR запускаются автоматические проверки (линтеры, тесты)",
      },
      {
        from: "Automated Checks - Автоматические проверки",
        to: "Peer Review - Ревью коллег",
        label: "Peer Review",
        hint: "После прохождения автопроверок код проверяют коллеги",
      },
      {
        from: "Peer Review - Ревью коллег",
        to: "Address Feedback - Исправление замечаний",
        label: "Исправить замечания",
        hint: "Найденные замечания должны быть исправлены",
      },
      {
        from: "Address Feedback - Исправление замечаний",
        to: "Approve & Merge - Одобрение и слияние",
        label: "Approve",
        hint: "После исправлений PR одобряется и вливается в основную ветку",
      },
    ],
  },
];

// Helper function to get solution for a specific topic
export const getGraphSolution = (topic: string): GraphSolution | undefined => {
  return GRAPH_SOLUTIONS.find((solution) => solution.topic === topic);
};

// Helper function to normalize step names for comparison
export const normalizeStepName = (stepName: string): string => {
  return stepName.trim().toLowerCase();
};
