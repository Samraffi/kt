import {
  InternshipCards,
  InternshipExpectations,
  InternshipForm,
  InternshipInfo,
  InternshipResults,
} from "../../components";
import Container from "../../components/Container/Container";

import styles from "./Internship.module.scss";

const Internship = () => {
  return (
    <Container>
      <div className={styles.internship}>
        <InternshipInfo />
        <InternshipExpectations />
        <InternshipCards />
        <InternshipResults />
        <InternshipForm />
      </div>
    </Container>
  );
};

export default Internship;
