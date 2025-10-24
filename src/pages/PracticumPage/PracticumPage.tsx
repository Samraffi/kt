import Board from "../../components/Board/Board";
import CodeReview from "../../components/CodeReview/CodeReview";
import Container from "../../components/Container/Container";
import PullRequest from "../../components/PullRequest/PullRequest";
import Readme from "../../components/Readme/Readme";
import SandboxMenu from "../../components/SandboxMenu/SandboxMenu";
import Sprint from "../../components/Sprint/Sprint";
import { BOARD_DATA } from "../../constans/processes/board";
import { CODEREVIEW_DATA } from "../../constans/processes/codeReview";
import { PULL_REQUEST_DATA } from "../../constans/processes/pullRequest";
import { README_SECTIONS_DATA } from "../../constans/processes/readme";
import { SPRINT_DATA } from "../../constans/processes/sprint";

const PracticumPage = () => {
  return (
    <Container>
      <Readme {...README_SECTIONS_DATA} />
      <SandboxMenu />
      <Board {...BOARD_DATA} />
      <CodeReview {...CODEREVIEW_DATA} />
      <Sprint {...SPRINT_DATA} />
      <PullRequest {...PULL_REQUEST_DATA} />
    </Container>
  );
};

export default PracticumPage;
