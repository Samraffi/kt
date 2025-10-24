import { Li, Ul } from "../ui";
import type { SimpleListProps } from "./SimpleList.types";

const SimpleList = ({ data }: SimpleListProps) => {
  return (
    <Ul variant="callout">
      {data.map((item: string, index: number) => (
        <Li variant="callout" key={index}>
          {item}
        </Li>
      ))}
    </Ul>
  );
};

export default SimpleList;
