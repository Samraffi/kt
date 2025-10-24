import { TaskData } from "../ui/OutputConsole/OutputConsole.types";

export type SandboxMenuElement = {
  topic: string | null;
  relatedCommands: string[];
};

export type SandboxMenu = SandboxMenuElement[];

export type SandboxMenuDataProps = {
  consoleData: TaskData[];
};
