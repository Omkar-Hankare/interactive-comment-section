import ReplyBox from "@/src/components/interactiveComments/Comment/ReplyBox";
import { UserInfo } from "@/src/components/interactiveComments/Comment/UserInfo";
import { VoteBox } from "@/src/components/interactiveComments/Comment/VoteBox";
import { ICommentInfo } from "@/src/configs/types/interactiveComments.types";
import {
  StyledCommentPaper,
  StyledCommentPaperSxProp,
} from "@/src/styles/components/interactiveComments/CommentContainer.styles";
import { Box } from "@mui/material";
import { useState } from "react";

const Comment = ({ commentData }: { commentData: ICommentInfo }) => {
  const { content, userName, lastModified, votes, user } = commentData;

  const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);
  function createAReply() {
    setIsReplyBoxVisible(true);
    console.log(user);
  }

  return (
    <>
      <StyledCommentPaper elevation={4} sx={StyledCommentPaperSxProp}>
        <VoteBox votes={votes} />
        <Box sx={{ flexGrow: 1 }}>
          <UserInfo
            createAReply={createAReply}
            user={user}
            lastModified={lastModified}
            userName={userName}
          />
          <Box sx={{ my: 2 }}>{content}</Box>
        </Box>
      </StyledCommentPaper>
      {isReplyBoxVisible ? (
        <ReplyBox
          setIsReplyBoxVisible={setIsReplyBoxVisible}
          commentData={commentData}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Comment;
