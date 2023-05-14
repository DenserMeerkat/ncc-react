import React from "react";
import { Box } from "@mui/material";

const Padding = (props) => {
  return (
    <Box
      padding={props.padding}
      paddingBottom={props.paddingBottom}
      paddingTop={props.paddingTop}
      paddingLeft={props.paddingLeft}
      paddingRight={props.paddingRight}
    >
      {props.children}
    </Box>
  );
};

Padding.defaultProps = {
  padding: 0,
};

export default Padding;
