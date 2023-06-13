import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const CommentContainer = ({
  isSeparateComment,
}: {
  isSeparateComment: boolean;
}) => {
  const widthpercent = isSeparateComment ? 1 : 0.93;

  return (
    <Box sx={{ display: "flex" }}>
      <Paper
        elevation={4}
        sx={{
          width: { widthpercent },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          p: 3,
          ml: isSeparateComment ? 0 : "7%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            borderStyle: "initial",
            borderWidth: "2px",
            borderRadius: 5,
            p: 1,
            backgroundColor: "#F1F6F9",
            boxShadow: "0px 0px 10px -3px rgba(0,0,0,0.75)",
          }}
        >
          <Button sx={{ minWidth: 3, color: "black" }}>
            <AddIcon sx={{ cursor: "pointer" }} />
          </Button>
          <Typography>Votes</Typography>
          <Button sx={{ minWidth: 3, color: "black" }}>
            <RemoveIcon sx={{ cursor: "pointer" }} />
          </Button>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "8px",
            }}
          >
            <Box sx={{ display: "flex", gap: "16px" }}>
              <AccountCircleIcon />
              <Typography>User name</Typography>
              <Typography>Last updated</Typography>
            </Box>
            <Button startIcon={<ReplyIcon />}>
              <Typography variant="body2">Reply</Typography>
            </Button>
          </Box>

          <Box sx={{ my: 2 }}>
            {[...new Array(1)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CommentContainer;
