import { render, screen } from "@testing-library/react";

import SshInfo from "../components/SshInfo/SshInfo";
import { SshInfoProps } from "../components/SshInfo/SshInfo.types";

export const SSH_DATA_MOCK: SshInfoProps = {
  mainTitle: "SSH Connect Guide",
  description: "A simplified guide to establishing an SSH connection.",
  setup_steps: [
    {
      title: "Generate Key",
      commands: ["ssh-keygen -t rsa -b 2048 -C 'test@example.com'"],
    },
    {
      title: "Configure",
      middleContent: "Add the following to your SSH config file:",
      commands: ["nano ~/.ssh/config"],
      contentTemplate: [
        "Host my-server",
        "Hostname 192.168.1.100",
        "User testuser",
        "IdentityFile ~/.ssh/id_rsa",
      ],
    },
    {
      title: "Test",
      commands: ["ssh my-server"],
    },
  ],
};

describe("Компонент SshInfo", () => {
  test("Корректно отображает заголовок", () => {
    render(<SshInfo {...SSH_DATA_MOCK} />);

    const titleElement = screen.getByTestId("main-title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(SSH_DATA_MOCK.mainTitle);
  });
});
