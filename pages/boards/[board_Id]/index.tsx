import FreeBoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import FreeBoardComments from "../../../src/components/units/boards/comments/BoardComment.container";
import EditBoardCommentList from "../../../src/components/units/boards/EditComments/EditDeleteComment.container";

export default function BoardDetailPage() {
  return (
    <div>
      <div>
        <meta property="og:title" content="제목 테스트입니다." />
        <meta property="og:description" content="자유게시판입니다." />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmp7sE1ggI4_L7NGZWcQT9EyKaqKLeQ5RBg&usqp=CAU"
        />
      </div>
      <div>
        <FreeBoardDetail />
        <FreeBoardComments />
        <EditBoardCommentList />
      </div>
    </div>
  );
}
