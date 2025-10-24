import LabelValuePair from "../LabelValuePair/LabelValuePair";
import { Li, Ul } from "../ui";
import type {
  DefinitionData,
  DefinitionListProps,
} from "./DefinitionList.types";

const DefinitionList = ({ data }: DefinitionListProps) => {
  return (
    <Ul variant="callout">
      {data.map(
        ({ name, type, description }: DefinitionData, index: number) => (
          <Li variant="callout" key={index}>
            {type ? (
              <LabelValuePair
                strongText={`${name} (${type})`}
                text={description}
              />
            ) : (
              <LabelValuePair strongText={name} text={description} />
            )}
          </Li>
        )
      )}
    </Ul>
  );
};

export default DefinitionList;
