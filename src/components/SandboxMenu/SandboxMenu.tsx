import Box from "../Box/Box";
import CodingPractice from "../CodingPractice/CodingPractice";
import Container from "../Container/Container";
import GraphPractice from "../GraphPractice/GraphPractice";
import { Tabs } from "../ui";

function SandboxMenu() {
  return (
    <Container>
      <Box>
        <Tabs
          tabs={[
            {
              id: "console",
              label: "Консоль",
              content: <CodingPractice />,
            },
            {
              id: "graph",
              label: "Граф",
              content: <GraphPractice title={"Граф"} />,
            },
          ]}
        />
      </Box>
    </Container>
  );
}

export default SandboxMenu;
