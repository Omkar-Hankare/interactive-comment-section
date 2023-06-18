import { Box, Input, Paper, TextareaAutosize, styled } from "@mui/material";

export const StyledCommentPaper = styled(Paper)`
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  /* display: flex;
    flex-direction: row; */
`;

export const StyledCommentPaperSxProp = {
  width: 1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 2,
  p: 3,
};

export const StyledVoteBox = styled(Box)`
  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
  /* display: flex;
    flex-direction: row; */
`;
export const StyledVoteBoxSxProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
  borderRadius: 5,
  p: 1,
  backgroundColor: "#ebebeb",
};

export const StyledUserInfoBox = styled(Box)`
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    > div > div {
      flex-direction: column;
      align-items: flex-start;
    }
    > div {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const replyBtnSxProps = {
  color: "#4942E4",
  display: "flex",
  alignItems: "center",
  gap: 1,
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#7f7ae0",
    color: "#ffffff",
  },
  borderRadius: 3,
  px: 2,
  py: 1,
};

export const StyledUserInfoBoxSxProp = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mt: "8px",
};

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  min-height: 2rem;
  padding: 1rem;
  font-size: 1.1rem;

  border: 2px solid #a6a3e4;
  :focus {
    border: 2px solid #4942e4;
    outline: none !important;
  }
`;
