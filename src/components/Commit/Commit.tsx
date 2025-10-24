import Card from "../Card/Card";
import Container from "../Container/Container";
import H1 from "../H1/H1";
import SectionContainer from "../SectionContainer/SectionContainer";
import SimpleSection from "../SimpleSection/SimpleSection";
import Typography from "../Typography/Typography";
import { CommitProps } from "./Commit.types";

const Commit = ({
  mainTitle,
  definition,
  location,
  badPractice,
  goodPractice,
  purpose,
  conclusion,
}: CommitProps) => {
  return (
    <Container>
      <Card>
        <H1>{mainTitle}</H1>
        <Typography className={"definition"} text={definition} />

        <SimpleSection
          tag="h2"
          title={"Локальный и удаленный коммит"}
          data={location}
        />

        <SectionContainer tag="h2" title="Практики возврата к изменениям">
          <SimpleSection
            variant="subSection"
            tag="h3"
            title={"Плохая практика"}
            data={badPractice}
          />
          <SimpleSection
            variant="subSection"
            tag="h3"
            title={"Хорошая практика"}
            data={goodPractice}
          />
        </SectionContainer>

        <SimpleSection
          tag="h2"
          title={"Для чего нужен коммит"}
          data={purpose}
        />

        <SectionContainer tag="h2" title={conclusion.title}>
          <Typography className={"mt-15"} text={conclusion.description} />
        </SectionContainer>
      </Card>
    </Container>
  );
};

export default Commit;
