import {
  AboutCompanyServices,
  AboutContacts,
  AboutWhyUs,
} from "../../components";
import Container from "../../components/Container/Container";

import styles from "./AboutPage.module.scss";

function AboutPage() {
  return (
    <Container>
      <div className={styles.about}>
        <div className={styles.about__container}>
          <AboutCompanyServices />
          <AboutWhyUs />
          <AboutContacts />
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;
