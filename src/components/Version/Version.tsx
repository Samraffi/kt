import Card from "../Card/Card";
import Container from "../Container/Container";
import H1 from "../H1/H1";
import SectionContainer from "../SectionContainer/SectionContainer";
import Typography from "../Typography/Typography";
import { VersionProps } from "./Version.types";

const Version = ({ mainTitle, patch, minor, tag }: VersionProps) => {
  return (
    <Container>
      <Card>
        <H1>{mainTitle}</H1>

        <SectionContainer tag="h2" title={patch.title}>
          <Typography text={patch.content} />
        </SectionContainer>

        <SectionContainer tag="h2" title={minor.title}>
          <Typography text={minor.content} />
        </SectionContainer>

        <SectionContainer tag="h2" title={tag.title}>
          <Typography text={tag.content} />
        </SectionContainer>
      </Card>
    </Container>
  );
};

export default Version;
