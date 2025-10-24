import Box from "../Box/Box";
import Card from "../Card/Card";
import H1 from "../H1/H1";
import H3 from "../H3/H3";
import LabelValuePair from "../LabelValuePair/LabelValuePair";
import SectionContainer from "../SectionContainer/SectionContainer";
import SimpleSection from "../SimpleSection/SimpleSection";
import Typography from "../Typography/Typography";
import type { BoardProps, BoardType } from "./Board.types";

import styles from "./Board.module.scss";

const Board = ({
  mainTitle,
  description,
  functions,
  boardTypes,
  context,
}: BoardProps) => {
  return (
    <Box>
      <Card>
        <H1>{mainTitle}</H1>
        <Typography className={"definition"} text={description} />

        {functions && (
          <SimpleSection tag="h2" title="Функции доски" data={functions} />
        )}

        <SectionContainer tag="h2" title={"Типы досок"}>
          {boardTypes.map(
            ({ type, goal, structure, features }: BoardType, index: number) => (
              <div key={index} className={styles.boardType}>
                <H3>{type}</H3>
                <LabelValuePair strongText={"Цель"} text={goal} />
                <LabelValuePair strongText={"Структура"} text={structure} />
                <LabelValuePair strongText={"Особенности"} text={features} />
              </div>
            )
          )}
        </SectionContainer>

        {context && (
          <div className={styles.boardContext}>
            <Typography text={context} />
          </div>
        )}
      </Card>
    </Box>
  );
};

export default Board;
