import {
  StyledCommentPaper,
  StyledCommentPaperSxProp,
  StyledTextareaAutosize,
  StyledUserInfoBox,
  replyBtnSxProps,
} from "@/src/styles/components/interactiveComments/CommentContainer.styles";
import { Box, Button, TextareaAutosize } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReplyIcon from "@mui/icons-material/Reply";

const ReplyBox = ({
  commentData,
  setIsReplyBoxVisible,
}: {
  commentData: any;
  setIsReplyBoxVisible: (e: boolean) => void;
}) => {
  const { content, userName, lastModified, votes, user } = commentData;

  const [replyValue, setReplyValue] = useState<string>(`@${userName} `);

  function onInputChange(e: any) {
    setReplyValue(e?.target?.value);
  }

  return (
    <StyledCommentPaper
      elevation={4}
      sx={{ ...StyledCommentPaperSxProp, mt: 2 }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <StyledUserInfoBox
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "8px",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Image
              width={50}
              height={50}
              src={"/images/avatars/image-ramsesmiron.png"}
              alt={`Image of user: ${userName}`}
            />
            <Box sx={{ flexGrow: 1 }}>
              <StyledTextareaAutosize
                value={replyValue}
                minRows={3}
                onInput={onInputChange}
              />
            </Box>
          </Box>
          <Box sx={replyBtnSxProps}>
            <ReplyIcon />
            <b>Send a Reply</b>
          </Box>
          <Button
            sx={{
              border: "1px solid #4942E4",
              color: "#4942E4",
              textTransform: "none",
            }}
            onClick={() => setIsReplyBoxVisible(false)}
          >
            Cancel
          </Button>
        </StyledUserInfoBox>
      </Box>
    </StyledCommentPaper>
  );
};

export default ReplyBox;
