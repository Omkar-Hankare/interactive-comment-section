import { Box } from "@mui/material";
import React, { useState } from "react";
import {
  StyledCommentPaper,
  StyledCommentPaperSxProp,
} from "../../../styles/components/interactiveComments/CommentContainer.styles";
import { UserInfo } from "./UserInfo";
import { VoteBox } from "./VoteBox";
import { ICommentInfo } from "@/src/configs/types/interactiveComments.types";
import ReplyBox from "./ReplyBox";

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
