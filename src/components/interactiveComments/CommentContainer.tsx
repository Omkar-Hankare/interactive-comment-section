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
  let comment = {
    content: "p",
    username: "p_c",
    lastmodifed: "p_lm",
    children: [
      {
        content: "c1",
        username: "c1",
        lastmodifed: "c1",
        children: [
          {
            content: "cc1",
            username: "cc1",
            lastmodifed: "cc1",
            children: [
              {
                content: "ccc1",
                username: "ccc1",
                lastmodifed: "ccc1",
                children: [],
              },
              {
                content: "ccc2",
                username: "ccc2",
                lastmodifed: "ccc2",
                children: [],
              },
            ],
          },
          {
            content: "cc2",
            username: "cc2",
            lastmodifed: "cc2",
            children: [],
          },
        ],
      },
      {
        content: "c2",
        username: "c2",
        lastmodifed: "c2",
        children: [],
      },
    ],
    // children: [],
  };

  function random(co: {
    content: any;
    username: any;
    lastmodifed: any;
    children: any;
  }) {
    const { content, username, lastmodifed, children } = co;

    return (
      <Box sx={{ borderLeftStyle: "solid", pt: 3, pl: 3 }}>
        <Box sx={{}}>
          <Paper
            elevation={4}
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              p: 3,
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
                  <Typography>
                    {" "}
                    <b>{username}</b>
                  </Typography>
                  <Typography variant="body2">{lastmodifed}</Typography>
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

          {children?.map(
            (child: {
              content: any;
              username: any;
              lastmodifed: any;
              children: any;
            }) => {
              return random(child);
            }
          )}
        </Box>
      </Box>
    );
  }

  let x = random(comment);

  return !!x ? x : <></>;
};

export default CommentContainer;
