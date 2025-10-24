import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
} from "@xyflow/react";

const GraphControls = () => {
  return (
    <>
      <Controls />
      <MiniMap />
      <Background variant={BackgroundVariant.Dots} />
    </>
  );
};

export default GraphControls;
