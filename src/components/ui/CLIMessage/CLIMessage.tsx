import { Fragment } from "react/jsx-runtime";

import { normalizeMessagePayload } from "../../../utils/normalizeMessagePayload";

import RenderContentNode from "../RenderContentNode/RenderContentNode";
import { CLIMessageProps } from "./CLIMessage.types";

import styles from "./CLIMessage.module.scss";

const CLIMessage = ({ className, message }: CLIMessageProps) => {
  if (typeof message === "string")
    return <span className={styles[className]}>{message}</span>;

  if (Array.isArray(message)) {
    return (
      <span className={styles[className]}>
        {message.map((item, index) => (
          <Fragment key={index}>
            <RenderContentNode {...item} />
          </Fragment>
        ))}
      </span>
    );
  }

  if (normalizeMessagePayload(message)) {
    return <CLIMessage className={className} message={message.message} />;
  }

  return <span className={styles[className]}>Сообщение недоступно</span>;
};

export default CLIMessage;
