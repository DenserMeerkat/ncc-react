import * as React from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Box, Tab, useTheme, useMediaQuery } from "@mui/material";
import { buttonClasses } from "@mui/base/Button";
import { tabClasses } from "@mui/base/Tab";
import { alpha } from "@mui/material";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

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
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <p>{children}</p>
          </Box>
        )}
      </Box>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <Box
      display={"flex"}
      flexDirection={isNonMobileScreens ? "row" : "column"}
      sx={{ width: "90%", margin: "auto" }}
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
          minWidth: 0,
        }}
      >
        <StyledTab value={0} label="2021" />
        <StyledTab value={1} label="2020" />
        <StyledTab value={2} label="2019" />
        <StyledTab value={3} label="2018" />
        <StyledTab value={4} label="2017" />
        <StyledTab value={5} label="2016" />
      </StyledTabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}></TabPanel>
      </SwipeableViews>
    </Box>
  );
}
