import FreeBoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import FreeBoardComments from "../../../src/components/units/boards/comments/BoardComment.container";
import EditBoardCommentList from "../../../src/components/units/boards/EditComments/EditDeleteComment.container";
import Head from "next/head";
import { request, gql } from "graphql-request";

export default function BoardDetailPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="제목 테스트입니다." />
        <meta property="og:description" content="자유게시판입니다." />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmp7sE1ggI4_L7NGZWcQT9EyKaqKLeQ5RBg&usqp=CAU"
        />
      </Head>
      <div>
        <FreeBoardDetail />
        <FreeBoardComments />
        <EditBoardCommentList />
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      contents
      title
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend05.codebootcamp.co.kr/graphql03",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );

  return {
    props: {
      data: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
