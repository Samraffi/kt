export const LEARNING_TASKS = [
  {
    topic: "Commit",
    task: "Добавить все файлы в staging area",
    correctCommand: "git add .",
    theory: `Команда 'git add .' добавляет все измененные файлы в staging area (индекс), подготавливая их к коммиту. Точка (.) означает 'все файлы в текущей директории'.`,
    hints: [
      "Используйте команду git add",
      "Для добавления всех файлов используйте точку (.)",
    ],
  },
  {
    topic: "Commit",
    task: "Создать коммит (откроется редактор для сообщения)",
    correctCommand: "git commit",
    theory:
      "Команда 'git commit' создает новый коммит с изменениями из staging area. Без флага -m откроется текстовый редактор для написания подробного сообщения коммита.",
    hints: [
      "Используйте команду git commit",
      "Без дополнительных флагов откроется редактор",
    ],
  },
  {
    topic: "Commit",
    task: "Создать коммит с сообщением о новой функции",
    correctCommand:
      "git commit -m 'feat: добавление новой функции #номер_задачи'",
    theory:
      "Флаг -m позволяет указать сообщение коммита прямо в командной строке. Префикс 'feat:' следует conventional commits для обозначения новой функции. #номер_задачи связывает коммит с задачей в трекере.",
    hints: [
      "Используйте флаг -m для сообщения",
      "Формат: git commit -m 'тип: описание #задача'",
      "Для новой функции используйте префикс 'feat:'",
    ],
  },
  {
    topic: "Commit",
    task: "Изменить последний коммит",
    correctCommand: "git commit --amend",
    theory:
      "Команда 'git commit --amend' позволяет изменить последний коммит: добавить забытые файлы или исправить сообщение. Важно: не используйте для уже отправленных (push) коммитов!",
    hints: [
      "Используйте git commit с флагом --amend",
      "Эта команда изменяет последний коммит",
    ],
  },
  {
    topic: "Commit",
    task: "Посмотреть историю коммитов",
    correctCommand: "git log",
    theory:
      "Команда 'git log' показывает историю коммитов в обратном хронологическом порядке. Для каждого коммита отображается хэш, автор, дата и сообщение.",
    hints: [
      "Используйте команду git log",
      "Эта команда показывает историю коммитов",
    ],
  },
  {
    topic: "Commit",
    task: "Проверить текущее состояние репозитория",
    correctCommand: "git status",
    theory:
      "Команда 'git status' показывает текущее состояние рабочей директории и staging area: измененные файлы, файлы готовые к коммиту, неотслеживаемые файлы и текущую ветку.",
    hints: [
      "Используйте команду git status",
      "Эта команда показывает состояние репозитория",
    ],
  },

  // === Git Flow ===
  {
    topic: "Git Flow",
    task: "Создать и переключиться на новую ветку для функции",
    correctCommand: "git checkout -b feature/my-feature",
    theory:
      "Команда 'git checkout -b' создает новую ветку и сразу переключается на нее. Префикс 'feature/' - это convention для веток с новыми функциями в Git Flow.",
    hints: [
      "Используйте git checkout с флагом -b",
      "Формат: feature/название-функции",
    ],
  },
  {
    topic: "Git Flow",
    task: "Отправить ветку с функцией на удаленный репозиторий",
    correctCommand: "git push origin feature/my-feature",
    theory:
      "Команда 'git push origin feature/my-feature' отправляет локальную ветку на удаленный репозиторий (origin). Это необходимо для создания Pull Request или для backup.",
    hints: [
      "Используйте git push",
      "Укажите удаленный репозиторий (origin) и название ветки",
    ],
  },
  {
    topic: "Git Flow",
    task: "Переключиться на ветку develop",
    correctCommand: "git checkout develop",
    theory:
      "Команда 'git checkout develop' переключает рабочую директорию на ветку develop. В Git Flow develop - это основная ветка для разработки.",
    hints: ["Используйте git checkout", "Укажите название ветки: develop"],
  },
  {
    topic: "Git Flow",
    task: "Слить ветку с функцией в текущую ветку",
    correctCommand: "git merge feature/my-feature",
    theory:
      "Команда 'git merge' объединяет указанную ветку с текущей. Коммиты из feature/my-feature будут добавлены в текущую ветку (обычно develop или main).",
    hints: ["Используйте git merge", "Укажите название ветки для слияния"],
  },

  // === Приватные пакеты ===
  {
    topic: "Приватные пакеты",
    task: "Установить зависимости из package-lock.json",
    correctCommand: "npm ci",
    theory:
      "Команда 'npm ci' (clean install) устанавливает зависимости точно по package-lock.json, удаляя node_modules. Быстрее и надежнее чем 'npm install' для CI/CD.",
    hints: ["Используйте npm ci", "Эта команда делает чистую установку"],
  },
  {
    topic: "Приватные пакеты",
    task: "Опубликовать пакет в приватный registry",
    correctCommand: 'npm publish --registry "ссылка"',
    theory:
      "Флаг --registry позволяет указать альтернативный npm registry для публикации. Используется для публикации приватных пакетов в корпоративный registry.",
    hints: ["Используйте npm publish", "Добавьте флаг --registry с URL"],
  },

  // === SSH Connection Setup ===
  {
    topic: "SSH Connection Setup",
    task: "Перейти в домашнюю директорию",
    correctCommand: "cd ~",
    theory:
      "Символ ~ (тильда) в Unix-системах обозначает домашнюю директорию текущего пользователя. Команда 'cd ~' переводит вас в /home/username.",
    hints: [
      "Используйте команду cd",
      "Тильда (~) означает домашнюю директорию",
    ],
  },
  {
    topic: "SSH Connection Setup",
    task: "Создать директорию .ssh",
    correctCommand: "mkdir .ssh",
    theory:
      "Команда 'mkdir' создает новую директорию. Папка .ssh используется для хранения SSH ключей и конфигурации. Точка в начале делает директорию скрытой.",
    hints: ["Используйте команду mkdir", "Название директории: .ssh"],
  },
  {
    topic: "SSH Connection Setup",
    task: "Перейти в директорию .ssh",
    correctCommand: "cd .ssh",
    theory:
      "После создания директории .ssh нужно перейти в нее для дальнейшей настройки SSH. Команда 'cd .ssh' переводит вас в эту директорию.",
    hints: ["Используйте команду cd", "Название директории: .ssh"],
  },
  {
    topic: "SSH Connection Setup",
    task: "Создать файл config",
    correctCommand: "touch config",
    theory:
      "Команда 'touch' создает пустой файл. Файл config в .ssh используется для хранения настроек SSH соединений (хосты, пользователи, ключи).",
    hints: ["Используйте команду touch", "Название файла: config"],
  },
  {
    topic: "SSH Connection Setup",
    task: "Сгенерировать SSH ключ RSA",
    correctCommand: "ssh-keygen -t rsa -b 4096 -C 'your-email@example.com'",
    theory:
      "ssh-keygen генерирует пару SSH ключей. Флаги: -t rsa (тип RSA), -b 4096 (размер 4096 бит), -C 'email' (комментарий для идентификации ключа).",
    hints: [
      "Используйте команду ssh-keygen",
      "Укажите тип (-t rsa), размер (-b 4096) и комментарий (-C)",
    ],
  },
  {
    topic: "SSH Connection Setup",
    task: "Открыть файл config для редактирования",
    correctCommand: "nano config",
    theory:
      "Команда 'nano' открывает текстовый редактор для редактирования файлов. В файле config можно настроить алиасы для SSH подключений.",
    hints: ["Используйте текстовый редактор nano", "Укажите имя файла: config"],
  },
  {
    topic: "SSH Connection Setup",
    task: "Вывести содержимое публичного ключа",
    correctCommand: "cat name_of_pc_to_name_of_server.pub",
    theory:
      "Команда 'cat' выводит содержимое файла в терминал. Публичный ключ (.pub) нужно скопировать и добавить на сервер для авторизации.",
    hints: ["Используйте команду cat", "Укажите файл с расширением .pub"],
  },
  {
    topic: "SSH Connection Setup",
    task: "Открыть для редактирования файл authorized_keys на сервере",
    correctCommand: "nano .ssh/authorized_keys",
    theory:
      "Файл authorized_keys хранит публичные ключи, которым разрешен доступ к серверу. Каждый ключ на отдельной строке.",
    hints: ["Используйте nano", "Путь: .ssh/authorized_keys"],
  },
  {
    topic: "SSH Connection Setup",
    task: "Подключиться к серверу по SSH",
    correctCommand: "ssh <server-name>",
    theory:
      "Команда 'ssh' устанавливает защищенное соединение с удаленным сервером. Если настроен config файл, можно использовать короткое имя вместо user@host.",
    hints: ["Используйте команду ssh", "Укажите имя сервера из config"],
  },

  // === Версия ===
  {
    topic: "Версия",
    task: "Создать аннотированный тег меткой v1.0.0 с именем 'Release version 1.0.0'",
    correctCommand: 'git tag -a v1.0.0 -m "Release version 1.0.0"',
    theory:
      "git tag создает тег (метку) на текущем коммите. Флаг -a создает аннотированный тег (с метаданными), -m добавляет сообщение. Используется для маркировки релизов.",
    hints: [
      "Используйте git tag с флагом -a",
      "Добавьте сообщение через -m",
      "Формат версии: v1.0.0",
    ],
  },
  {
    topic: "Версия",
    task: "Отправить тег на удаленный репозиторий",
    correctCommand: "git push origin v1.0.0",
    theory:
      "По умолчанию 'git push' не отправляет теги. Нужно явно указать тег для отправки: 'git push origin v1.0.0' или использовать --tags для всех тегов.",
    hints: ["Используйте git push", "Укажите origin и название тега"],
  },
];
