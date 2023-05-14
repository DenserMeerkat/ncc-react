import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Flex from "../utils/Flex";

const Title = (props) => {
  const title = props.title;
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  return (
    <Flex gap={1} alignItems={"flex-start"}>
      <Box
        height={"24px"}
        width={"4px"}
        borderRadius={"4px"}
        bgcolor={secondaryMain}
      />
      <Typography component={"h3"} variant="h4" fontSize={18} fontWeight={600}>
        {title}
      </Typography>
    </Flex>
  );
};

export default Title;
