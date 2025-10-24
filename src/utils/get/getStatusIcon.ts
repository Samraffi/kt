import { CommandStatus } from "../../components/ui/OutputConsole/OutputConsole.types";

export const getStatusIcon = (type: CommandStatus) => {
  if (type === "success" || type === "ok") return "✅";
  else if (type === "error") return "❌";

  return "⏳";
};
