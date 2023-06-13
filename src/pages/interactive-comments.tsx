import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";
import ScrollTop from "../components/common/ScrollToAElement";
import CommentContainer from "../components/interactiveComments/CommentContainer";
import NavBar from "../components/common/NavBar";
import ScrollToAElement from "../components/common/ScrollToAElement";
import SubCommentContainer from "../components/interactiveComments/SubCommentContainer";

export default function InteractiveComments() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar title="Interactive Comment Section" />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="xl">
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>

        {/* ////////////_____Interactive Comment Section starts______/////////// */}
        <div>
          <CommentContainer isSeparateComment={true} />
          <Box sx={{ display: "grid", gap: 2 }}>
            <Box
              sx={{
                width: "5%",
                backgroundColor: "#EEEEEE",
                ml: "50%",
                mt: "10%",
              }}
            ></Box>
            <Box>
              <SubCommentContainer />
              <SubCommentContainer />
              <SubCommentContainer />
            </Box>
          </Box>
        </div>
      </Container>

      <ScrollToAElement querySelectorValue="#back-to-top-anchor">
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollToAElement>
    </React.Fragment>
  );
}
