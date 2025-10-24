import React from "react";

import Box from "../Box/Box";
import Card from "../Card/Card";
import Container from "../Container/Container";
import H1 from "../H1/H1";
import H3 from "../H3/H3";
import LabelValuePair from "../LabelValuePair/LabelValuePair";
import SectionContainer from "../SectionContainer/SectionContainer";
import SimpleSection from "../SimpleSection/SimpleSection";
import Typography from "../Typography/Typography";
import { Phase, SprintProps } from "./Sprint.types";

import styles from "./Sprint.module.scss";

const Sprint: React.FC<SprintProps> = ({
  mainTitle,
  definition,
  phases,
  characteristics,
  role,
}) => {
  const { title, list } = characteristics;
  return (
    <Container>
      <Box>
        <Card>
          <H1>{mainTitle}</H1>
          <Typography className={"definition"} text={definition} />

          <SectionContainer tag="h2" title="Основные этапы спринта">
            {phases.map(
              (
                { title, time, goal, process, result }: Phase,
                index: number
              ) => (
                <div key={index} className={styles.phase}>
                  <H3 className={"fw-500"}>{title}</H3>
                  <Typography className={"gray italic"} text={`(${time})`} />
                  <LabelValuePair strongText={"Цель"} text={goal} />
                  <LabelValuePair strongText={"Процесс"} text={process} />
                  <LabelValuePair strongText={"Результат"} text={result} />
                </div>
              )
            )}
          </SectionContainer>

          <SimpleSection tag="h2" title={title} data={list} />
          <SimpleSection tag="h2" title={role.title} data={role.list} />
        </Card>
      </Box>
    </Container>
  );
};

export default Sprint;
