import Box from "../Box/Box";
import Card from "../Card/Card";
import DefinitionList from "../DefinitionList/DefinitionList";
import H1 from "../H1/H1";
import LabelValuePair from "../LabelValuePair/LabelValuePair";
import SectionContainer from "../SectionContainer/SectionContainer";
import SimpleSection from "../SimpleSection/SimpleSection";
import Typography from "../Typography/Typography";
import {
  CodeReviewDataProps,
  CodeReviewSection,
  CodeReviewSubsection,
} from "./CodeReview.types";

const CodeReview = ({
  mainTitle,
  definition,
  mainGoal,
  stages,
  sections,
}: CodeReviewDataProps) => {
  return (
    <Box>
      <Card>
        <H1>{mainTitle}</H1>
        <Typography className={"definition"} text={definition} />
        <LabelValuePair
          className="mb-30"
          align="center"
          strongText={"Основная цель"}
          text={mainGoal}
        />

        <SectionContainer tag="h2" title={stages.title}>
          {stages.subsections &&
            stages.subsections.map(
              ({ title, steps }: CodeReviewSubsection, subIndex: number) => (
                <SectionContainer
                  key={subIndex}
                  variant="subSection"
                  testId="subSection"
                  tag="h3"
                  title={title}
                >
                  <DefinitionList data={steps} />
                </SectionContainer>
              )
            )}
        </SectionContainer>

        {sections.map(({ title, items }: CodeReviewSection, index) => (
          <SimpleSection key={index} tag="h2" title={title} data={items} />
        ))}
      </Card>
    </Box>
  );
};

export default CodeReview;
