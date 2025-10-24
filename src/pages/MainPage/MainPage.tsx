import {
  AboutMain,
  ApplicationMain,
  InternshipMain,
  // ProjectsMain,
  TopMain,
} from "../../components";
import Container from "../../components/Container/Container";

function MainPage() {
  return (
    <Container>
      <TopMain />
      <AboutMain />
      {/* <ProjectsMain /> */}
      <InternshipMain />
      <ApplicationMain />
    </Container>
  );
}

export default MainPage;
