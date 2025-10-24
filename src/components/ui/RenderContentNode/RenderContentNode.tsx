import { ReactNode } from "react";

import { RenderContentNodeProps } from "./RenderContentNode.types";

const RenderContentNode = ({ type, content }: RenderContentNodeProps) => {
  const wrapTag = (children: ReactNode) => {
    if (type === "strong") return <strong>{children}</strong>;
    if (type === "italic") return <i>{children}</i>;
    return <>{children}</>;
  };

  if (Array.isArray(content)) {
    return wrapTag(
      content.map((item, index) => <RenderContentNode key={index} {...item} />)
    );
  }

  return wrapTag(content);
};

export default RenderContentNode;
