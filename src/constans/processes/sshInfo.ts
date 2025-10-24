export const SSHINFO_DATA = {
  mainTitle: "SSH Connection Setup",
  description:
    "Это руководство содержит пошаговую инструкцию по настройке SSH-подключения. Выполните следующие команды в терминале, чтобы сгенерировать ключ, настроить подключение и пройти аутентификацию на сервере.",
  setup_steps: [
    {
      title: "Сгенерировать ключ SSH",
      commands: [
        "cd ~",
        "mkdir .ssh",
        "cd .ssh",
        "touch config",
        'ssh-keygen -t rsa -b 4096 -C "name.lastname@outlook.com"',
      ],
    },
    {
      title: "Configure SSH",
      middleContent: "Fill the config file with the following:",
      commands: ["nano config"],
      contentTemplate: [
        "Host <server-name>",
        "Hostname ssh.dev.azure.com",
        "User <userName>",
        "Identity_file ~/.ssh/name_of_pc_to_name_of_server",
      ],
    },
    {
      title: "Добавить ключ на сервер",
      startContent: "Log in to the server and add the key to authorized_keys.",
      commands: [
        "cat name_of_pc_to_name_of_server.pub",
        "nano .ssh/authorized_keys",
      ],
    },
    {
      title: "Проверить соединение",
      commands: ["ssh <server-name>"],
    },
  ],
};
