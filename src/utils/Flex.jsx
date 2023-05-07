import React from "react";
import { Box } from "@mui/material";

const Flex = (props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={props.flexDirection}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      flexWrap={props.flexWrap}
      gap={props.gap}
    >
      {props.children}
    </Box>
  );
};

Flex.defaultProps = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: 0,
};

export default Flex;
