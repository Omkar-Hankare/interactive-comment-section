import { Box, Paper, styled } from "@mui/material";

export const StyledCommentPaper = styled(Paper)`
  @media only screen and (max-width: 450px) {
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
  @media only screen and (max-width: 450px) {
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
  @media only screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledUserInfoBoxSxProp = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mt: "8px",
};
