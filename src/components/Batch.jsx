import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Tabs,
  Box,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { buttonClasses } from "@mui/base/Button";
import { tabClasses } from "@mui/base/Tab";
import { alpha } from "@mui/material";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { batches } from "../assets/resource/batch";
import ItemCard from "./Cards/ItemCard";
import Flex from "../utils/Flex";
import Padding from "../utils/Padding";

export default function Batch() {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const primary = theme.palette.primary.light;
  const secondary = theme.palette.secondary.light;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      orientation={isNonMobileScreens ? "vertical" : "horizontal"}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
  });

  const StyledTab = styled(Tab)`
    font-family: IBM Plex Sans, sans-serif;
    color: ${secondary};
    font-weight: 500;
    margin: 6px 0.2rem;
    min-height: 20px;
    border-radius: 8px;
    padding: 8px 6px;
    border: 1px solid transparent;
    &:hover {
      color: ${secondary};
      border: 1px solid ${secondary};
    }

    &:focus {
      color: ${secondary};
      outline: 2px solid ${alpha(secondary, 1)};
    }

    &.${tabClasses.selected} {
      background-color: ${alpha(secondary, 0.9)};
      color: #fff;
      font-size: 0.9rem;
      font-weight: 600;
    }

    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        sx={{ backgroundColor: "transparent" }}
      >
        {value === index && <Box>{children}</Box>}
      </Box>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  const tabs = batches.map((batch, index) => {
    return (
      <StyledTab key={index} value={index} label={batch.year.substring(5, 9)} />
    );
  });
  const tabViews = batches.map((batch, index) => {
    return (
      <TabPanel
        key={batch.year}
        value={value}
        index={index}
        dir={theme.direction}
      >
        <Flex flexWrap="wrap" justifyContent="center" gap={2}>
          <ItemCard
            key={batch.csuo.name}
            name={batch.csuo.name}
            rank={batch.csuo.rank}
            img={batch.csuo.img}
            desc={batch.csuo.desc}
            plat={batch.csuo.plat}
          />
          <Flex
            flexWrap={"wrap"}
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <ItemCard
              key={batch.cuo1.name}
              name={batch.cuo1.name}
              rank={batch.cuo1.rank}
              img={batch.cuo1.img}
              desc={batch.cuo1.desc}
              plat={batch.cuo1.plat}
            />
            <ItemCard
              key={batch.cuo2.name}
              name={batch.cuo2.name}
              rank={batch.cuo2.rank}
              img={batch.cuo2.img}
              desc={batch.cuo2.desc}
              plat={batch.cuo2.plat}
            />
            <ItemCard
              key={batch.cuo3.name}
              name={batch.cuo3.name}
              rank={batch.cuo3.rank}
              img={batch.cuo3.img}
              desc={batch.cuo3.desc}
              plat={batch.cuo3.plat}
            />
          </Flex>
          <Flex
            flexWrap={"wrap"}
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <ItemCard
              key={batch.csm.name}
              name={batch.csm.name}
              rank={batch.csm.rank}
              img={batch.csm.img}
              desc={batch.csm.desc}
              plat={batch.csm.plat}
            />
            <ItemCard
              key={batch.cqms.name}
              name={batch.cqms.name}
              rank={batch.cqms.rank}
              img={batch.cqms.img}
              desc={batch.cqms.desc}
              plat={batch.cqms.plat}
            />
          </Flex>
        </Flex>
      </TabPanel>
    );
  });
  return (
    <Box
      display={"flex"}
      flexDirection={isNonMobileScreens ? "row" : "column"}
      justifyContent={"space-between"}
      backgroundColor={"transparent"}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          textTransform: "none",
        }}
      >
        {tabs}
      </StyledTabs>
      <SwipeableViews
        sx={{ backgroundColor: "transparent" }}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabViews}
      </SwipeableViews>
    </Box>
  );
}
