import { Box, Typography, useTheme, Card } from "@mui/material";
import React from "react";
import Flex from "../../utils/Flex";
import Padding from "../../utils/Padding";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import { alpha } from "@mui/material";

const BatchCards = (props) => {
  const key = props.year;
  const year = props.year;
  const csuo = props.csuo;
  const csm = props.csm;
  const cuo1 = props.cuo1;
  const cuo2 = props.cuo2;
  const cuo3 = props.cuo3;
  const cqms = props.cqms;
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  const primaryLight = theme.palette.primary.light;
  const green = "rgb(30, 200, 0)";
  return (
    <div key={key}>
      <Flex flexWrap="wrap">AnoC</Flex>
    </div>
  );
};

export default BatchCards;
