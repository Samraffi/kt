import CLIMessage from "../CLIMessage/CLIMessage";
import CLIRow from "../CLIRow/CLIRow";
import { CLILogItem, CLILogProps } from "./CLILog.types";

const CLILog = ({ data }: CLILogProps) => {
  const messageType = (type: CLILogItem["type"]) =>
    `message${type.charAt(0).toUpperCase() + type.slice(1)}`;

  return (
    <>
      {data
        .filter((item) => {
          if (!item.showCommandList) return false;
          return true;
        })
        .map(({ type, message, ...props }, index) => {
          const text = "text" in props ? props.text : "$console@demo:~$";
          const className = "className" in props ? props.className : undefined;

          return (
            <CLIRow key={index} text={text} className={className}>
              <CLIMessage className={messageType(type)} message={message} />
            </CLIRow>
          );
        })}
    </>
  );
};

export default CLILog;
