import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";
import CommentContainer from "../components/interactiveComments/CommentContainer";
import NavBar from "../components/common/NavBar";
import ScrollToAElement from "../components/common/ScrollToAElement";
import { Fragment, useMemo, useState } from "react";
import { COMMENTS } from "../configs/constants/interactiveComments.constants";
import { ICommentInfo } from "../configs/types/interactiveComments.types";

export default function InteractiveComments() {
  const [listOfComments, setListOfComments] =
    useState<ICommentInfo[]>(COMMENTS);

  const renderedComments = useMemo(
    () =>
      listOfComments.map((comment) => {
        return <CommentContainer key={comment.id} singleComment={comment} />;
      }),
    [listOfComments]
  );

  return (
    <Fragment>
      <CssBaseline />
      <NavBar title="Interactive Comment Section" />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="xl" sx={{ backgroundColor: "#FAF0E4" }}>
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20rem",
            backgroundColor: "#FAF0E4",
            border: "2px dotted black",
          }}
        >
          <h1>Some Awesome Content</h1>
        </Box>

        {/* ////////////_____Interactive Comment Section starts______/////////// */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 5 }}>
          {renderedComments}
        </Box>
      </Container>

      <ScrollToAElement querySelectorValue="#back-to-top-anchor">
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollToAElement>
    </Fragment>
  );
}
