import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";
import CommentContainer from "../components/interactiveComments/CommentContainer";
import NavBar from "../components/common/NavBar";
import ScrollToAElement from "../components/common/ScrollToAElement";
import { Fragment } from "react";

export default function InteractiveComments() {
  return (
    <Fragment>
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
                gridRow: "1",
                gridColumn: "1 /span 6",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#EEEEEE",
                  margin: "10% 40% 0 60%",
                  width: "10px",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
        </div>
      </Container>

      <ScrollToAElement querySelectorValue="#back-to-top-anchor">
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollToAElement>
    </Fragment>
  );
}
