import Card from "../Card/Card";
import Container from "../Container/Container";
import H1 from "../H1/H1";
import LabelValuePair from "../LabelValuePair/LabelValuePair";
import SectionContainer from "../SectionContainer/SectionContainer";
import SimpleSection from "../SimpleSection/SimpleSection";
import Typography from "../Typography/Typography";
import {
  Feature,
  Platform,
  PrivatePackagesProps,
} from "./PrivatePackages.types";

const PrivatePackages = ({
  mainTitle,
  definition,
  features,
  platforms,
  artifactTypes,
  process,
  whenToUse,
  summary,
}: PrivatePackagesProps) => {
  const { title, points } = summary;
  return (
    <Container>
      <Card>
        <H1>{mainTitle}</H1>
        <Typography className={"definition"} text={definition} />

        <SectionContainer tag="h2" title="Основные особенности и преимущества">
          {features.map(({ title, description }: Feature, index: number) => (
            <SectionContainer
              key={index}
              variant="subSection"
              tag="h3"
              title={title}
            >
              <Typography className={"mt-5"} text={description} />
            </SectionContainer>
          ))}
        </SectionContainer>

        <SectionContainer tag="h2" title="Популярные платформы и инструменты">
          {platforms.map(
            ({ name, description, advantages }: Platform, index: number) => (
              <SectionContainer
                key={index}
                variant="subSection"
                tag="h3"
                title={name}
              >
                <LabelValuePair strongText={"Описание"} text={description} />
                <LabelValuePair strongText={"Преимущества"} text={advantages} />
              </SectionContainer>
            )
          )}
        </SectionContainer>

        <SimpleSection
          tag="h2"
          title={"Типы артефактов и пакетов"}
          data={artifactTypes}
        />
        <SimpleSection tag="h2" title={"Процесс управления"} data={process} />
        <SimpleSection
          tag="h2"
          title={"Когда использовать приватные пакеты?"}
          data={whenToUse}
        />
        <SimpleSection tag="h2" title={title} data={points} />
      </Card>
    </Container>
  );
};

export default PrivatePackages;
