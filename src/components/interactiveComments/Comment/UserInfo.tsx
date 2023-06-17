import { Box, Typography, Button } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import Image from "next/image";
import {
  StyledUserInfoBox,
  StyledUserInfoBoxSxProp,
} from "@/src/styles/components/interactiveComments/CommentContainer.styles";

export const UserInfo = ({
  userName,
  lastModified,
  user,
}: {
  user: any;
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

  let png = user?.image?.png;
  let webp = user?.image?.webp;

  return (
    <StyledUserInfoBox sx={StyledUserInfoBoxSxProp}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Image
          width={50}
          height={50}
          src={webp}
          alt={`Image of user: ${userName}`}
        />
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
