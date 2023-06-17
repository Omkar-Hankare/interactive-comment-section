import { Box, Typography, Button } from "@mui/material";
import {
  StyledUserInfoBox,
  StyledUserInfoBoxSxProp,
} from "../../styles/components/interactiveComments/CommentContainer.styles";
import ReplyIcon from "@mui/icons-material/Reply";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const UserInfo = ({
  userName,
  lastModified,
}: {
  userName: string;
  lastModified: any;
}) => {
  return (
    <StyledUserInfoBox sx={StyledUserInfoBoxSxProp}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <AccountCircleIcon width={2} />
        <Typography>
          <b>{userName}</b>
        </Typography>
        <Typography variant="body2">Last modified: {lastModified}</Typography>
      </Box>
      <Button startIcon={<ReplyIcon />}>
        <Typography variant="body2">Reply</Typography>
      </Button>
    </StyledUserInfoBox>
  );
};
