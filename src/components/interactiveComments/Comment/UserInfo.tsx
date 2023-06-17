import { Box, Typography, Button } from "@mui/material";
import {
  StyledUserInfoBox,
  StyledUserInfoBoxSxProp,
} from "../../../styles/components/interactiveComments/CommentContainer.styles";
import ReplyIcon from "@mui/icons-material/Reply";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const UserInfo = ({
  userName,
  lastModified,
}: {
  userName: string;
  lastModified: any;
}) => {
  /**
   * Handles the click event of the reply button.
   * Displays an alert message.
   * @returns {void}
   */
  function onReplyBtnClick(): void {
    alert("Hehe, it doesn't matter");
  }

  return (
    <StyledUserInfoBox sx={StyledUserInfoBoxSxProp}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <AccountCircleIcon width={2} />
        <Typography>
          <b>{userName}</b>
        </Typography>
        <Typography variant="body2">Last modified: {lastModified}</Typography>
      </Box>
      <Button onClick={onReplyBtnClick} startIcon={<ReplyIcon />}>
        <Typography variant="body2">Reply</Typography>
      </Button>
    </StyledUserInfoBox>
  );
};
