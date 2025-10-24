import { TaskData } from "../../components/ui/OutputConsole/OutputConsole.types";
import {
  COMMAND_INPUT_EXAMPLE,
  COMMAND_INPUT_PROMPT,
  TASK_INDEX_ZERO_PADDING_THRESHOLD,
  TASK_LIST_DOUBLE_SEPARATOR,
  TASK_LIST_ITEM_INDENT,
  TASK_LIST_LINE_SEPARATOR,
  TASK_LIST_SEPARATOR_LINE,
  TASK_NUMBER_SEPARATOR,
  TASK_NUMBER_ZERO_PAD,
  TASK_SELECTION_PROMPT,
} from "../../constans/console";

const getStringTaskList = (data: TaskData[]) => {
  return data
    .map((element, idx) => {
      const numberPrefix =
        idx < TASK_INDEX_ZERO_PADDING_THRESHOLD
          ? `${TASK_NUMBER_ZERO_PAD}${idx + 1}${TASK_NUMBER_SEPARATOR}`
          : `${idx}${TASK_NUMBER_SEPARATOR}`;
      return `${TASK_LIST_ITEM_INDENT}${numberPrefix} ${element.task}`;
    })
    .join(TASK_LIST_LINE_SEPARATOR);
};

export const getTaskSelectionView = (data: TaskData[]) => {
  return [
    { type: "text" as const, content: TASK_SELECTION_PROMPT },
    { type: "text" as const, content: "\n\n" },
    { type: "text" as const, content: TASK_LIST_SEPARATOR_LINE },
    { type: "text" as const, content: "\n\n" },
    { type: "text" as const, content: `${getStringTaskList(data)}` },
    { type: "text" as const, content: TASK_LIST_DOUBLE_SEPARATOR },
    {
      type: "strong" as const,
      content: `${COMMAND_INPUT_PROMPT} (например, ${COMMAND_INPUT_EXAMPLE}):`,
    },
  ];
};
