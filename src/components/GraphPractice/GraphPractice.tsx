import GraphLearningPractice from "../GraphLearningPractice/GraphLearningPractice";
import { GraphPracticeDataProps } from "./GraphPractice.types";

const GraphPractice = ({ title }: Pick<GraphPracticeDataProps, "title">) => {
  return <GraphLearningPractice title={title} />;
};

export default GraphPractice;
