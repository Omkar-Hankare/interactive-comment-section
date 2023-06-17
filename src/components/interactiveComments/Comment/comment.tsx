import { Box } from "@mui/material";
import React from "react";
import {
  StyledCommentPaper,
  StyledCommentPaperSxProp,
} from "../../../styles/components/interactiveComments/CommentContainer.styles";
import { UserInfo } from "./UserInfo";
import { VoteBox } from "./VoteBox";
import { ICommentInfo } from "@/src/configs/types/interactiveComments.types";

const Comment = ({ commentData }: { commentData: ICommentInfo }) => {
  const { content, userName, lastModified, votes } = commentData;
  return (
    <StyledCommentPaper elevation={4} sx={StyledCommentPaperSxProp}>
      <VoteBox votes={votes} />
      <Box sx={{ flexGrow: 1 }}>
        <UserInfo lastModified={lastModified} userName={userName} />
        <Box sx={{ my: 2 }}>{content}</Box>
      </Box>
    </StyledCommentPaper>
  );
};

export default Comment;
