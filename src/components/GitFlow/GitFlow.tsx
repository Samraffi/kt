import Card from "../Card/Card";
import Container from "../Container/Container";
import DefinitionList from "../DefinitionList/DefinitionList";
import H1 from "../H1/H1";
import SectionContainer from "../SectionContainer/SectionContainer";
import Typography from "../Typography/Typography";
import { GitFlowProps } from "./GitFlow.types";

const GitFlow = ({ mainTitle, definition, branches }: GitFlowProps) => {
  return (
    <Container>
      <Card>
        <H1>{mainTitle}</H1>
        <Typography className={"definition"} text={definition} />

        <SectionContainer tag="h2" title="Основные ветки">
          <DefinitionList data={branches} />
        </SectionContainer>
      </Card>
    </Container>
  );
};

export default GitFlow;
