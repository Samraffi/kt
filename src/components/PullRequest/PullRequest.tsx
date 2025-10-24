import Box from "../Box/Box";
import Card from "../Card/Card";
import Container from "../Container/Container";
import H1 from "../H1/H1";
import SectionContainer from "../SectionContainer/SectionContainer";
import SimpleSection from "../SimpleSection/SimpleSection";
import Typography from "../Typography/Typography";
import { Phase, PullRequestProps } from "./PullRequest.types";

import styles from "./PullRequest.module.scss";

const PullRequest = ({
  mainTitle,
  definition,
  companyProcess,
  phases,
  benefits,
}: PullRequestProps) => {
  const { title, points } = benefits;
  return (
    <Container>
      <Box>
        <Card>
          <H1>{mainTitle}</H1>
          <Typography className={"definition"} text={definition} />

          <SectionContainer tag="h2" title={companyProcess.title}>
            <Typography
              className={styles.text}
              text={companyProcess.description}
            />
          </SectionContainer>

          <SectionContainer
            tag="h2"
            title="Основные этапы работы с Pull Requests"
          >
            {phases.map(({ title, points }: Phase, index: number) => (
              <SimpleSection
                key={index}
                variant="subSection"
                tag="h3"
                title={title}
                data={points}
              />
            ))}
          </SectionContainer>

          <SimpleSection tag="h2" title={title} data={points} />
        </Card>
      </Box>
    </Container>
  );
};

export default PullRequest;
