export type RenderContentNodeProps = {
  type: "text" | "strong" | "italic";
  content:
    | string
    | {
        type: RenderContentNodeProps["type"];
        content: RenderContentNodeProps["content"];
      }[];
};
