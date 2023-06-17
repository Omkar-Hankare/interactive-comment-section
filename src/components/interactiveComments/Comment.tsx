import { Box } from "@mui/material";
import React from "react";
import {
  StyledCommentPaper,
  StyledCommentPaperSxProp,
} from "../../styles/components/interactiveComments/CommentContainer.styles";
import { VoteBox } from "./VoteBox";
import { UserInfo } from "./UserInfo";

const Comment = ({
  userName,
  lastModified,
  votes,
  content,
}: {
  userName: any;
  lastModified: any;
  votes: number;
  content: string;
}) => {
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
