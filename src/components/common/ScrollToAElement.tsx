import { useScrollTrigger, Fade, Box } from "@mui/material";
import React from "react";

interface Props {
  window?: Window;
  children: React.ReactElement;
  querySelectorValue: string;
}

function ScrollToAElement(props: Props) {
  const { children, window, querySelectorValue } = props;

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(querySelectorValue);

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default ScrollToAElement;
