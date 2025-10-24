import Card from "../Card/Card";
import Container from "../Container/Container";
import H1 from "../H1/H1";
import SectionContainer from "../SectionContainer/SectionContainer";
import Typography from "../Typography/Typography";
import type { SshInfoProps } from "./SshInfo.types";

import styles from "./SshInfo.module.scss";

const SshInfo = ({ mainTitle, description, setup_steps }: SshInfoProps) => {
  return (
    <Container>
      <Card>
        <H1>{mainTitle}</H1>
        <Typography className={"definition"} text={description} />

        {setup_steps.map(
          (
            { title, startContent, commands, middleContent, contentTemplate },
            index
          ) => {
            return (
              <SectionContainer
                tag="h2"
                title={`Шаг ${index + 1}: ${title}`}
                key={index}
              >
                {startContent && (
                  <Typography className="gray" text={startContent} />
                )}

                <pre className={styles.codeBlock}>
                  {commands.map((text, text_index) => (
                    <code key={text_index}>{text}</code>
                  ))}
                </pre>
                {middleContent && (
                  <Typography className="gray" text={middleContent} />
                )}

                {contentTemplate && (
                  <pre className={styles.codeBlock}>
                    {contentTemplate.map((text, text_index) => (
                      <code key={text_index}>{text}</code>
                    ))}
                  </pre>
                )}
              </SectionContainer>
            );
          }
        )}
      </Card>
    </Container>
  );
};

export default SshInfo;
