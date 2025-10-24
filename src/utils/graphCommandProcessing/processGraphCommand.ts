import { ProcessGraphCommand } from "../../components/ui/GraphLearning/types/process.types";

import { checkGraphCommandPermission } from "./checkGraphCommandPermission";
import { graphCommandParser } from "./graphCommandParser";

const processGraphCommand: ProcessGraphCommand = ({
  inputValue,
  selectedTopic,
  learningStage,
}) => {
  const type = graphCommandParser(inputValue, selectedTopic).type;

  const topicName = selectedTopic.topic;

  return {
    status: {
      type,
      isAllowed: checkGraphCommandPermission(type, learningStage),
      topicName,
    },
    messagePayload: {
      selectedTopic,
      topicName,
      learningStage,
    },
    selectedTopicByNumber: type === "SELECT_TOPIC" ? selectedTopic : null,
  };
};

export { processGraphCommand };
