export type TextContent = {
  title: string;
  content: string;
};

export type VersionProps = {
  mainTitle: string;
  patch: TextContent;
  minor: TextContent;
  tag: TextContent;
};
