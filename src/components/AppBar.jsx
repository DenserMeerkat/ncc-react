import nccLogo from "../assets/images/ncc_logo.png";
import { useState } from "react";
import {
  Container,
  Box,
  AppBar,
  Typography,
  Paper,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import MenuItems from "./MenuItems";
import ClickAwayListener from "@mui/base/ClickAwayListener";

function CustomAppBar(props) {
  const activePage = props.activePage;
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const showBurgerMenu = useMediaQuery("(min-width: 768px)");
  const backgroundColor = "white";

  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  // const red = "#ef5350";
  // const deepBlue = "#2D3092";
  // const lightBlue = "#00AEEF";
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Container>
          <Paper
            elevation={24}
            sx={{
              border: "1px solid #cfcfcf",
              marginTop: 2,
              padding: 1,
              display: "flex",
              alignItems: "center",
              borderRadius: 1,
              backgroundColor: { backgroundColor },
            }}
          >
            <Box
              component="img"
              className="ncc-logo"
              sx={{ aspectRatio: 1, height: 35, marginLeft: 2 }}
              src={nccLogo}
              alt="ncc logo"
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  marginLeft: 2,
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="h6"
                  fontWeight={"bold"}
                  fontSize={isNonMobileScreens ? 19 : 18}
                  letterSpacing={0.1}
                >
                  {isNonMobileScreens ? <>National Cadet Corps </> : <>NCC </>}
                </Typography>
                <Typography
                  component="h1"
                  variant="h6"
                  letterSpacing={0.1}
                  fontSize={isNonMobileScreens ? 18 : showBurgerMenu ? 16 : 14}
                >
                  &nbsp;|&nbsp;Anna University
                </Typography>
              </Box>
              {showBurgerMenu ? (
                // <MenuItemss />
                <MenuItems
                  direction="row"
                  width="auto"
                  activePage={activePage}
                />
              ) : (
                <IconButton
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                  <Menu />
                </IconButton>
              )}
              {/* MOBILE NAV */}
              {!isNonMobileScreens && isMobileMenuToggled && (
                <ClickAwayListener
                  onClickAway={() =>
                    setIsMobileMenuToggled(!isMobileMenuToggled)
                  }
                >
                  <Box
                    position="fixed"
                    top="1rem"
                    right="1rem"
                    bottom="1rem"
                    height="19rem"
                    zIndex="10"
                    maxWidth="200px"
                    minWidth="180px"
                    borderRadius={1}
                    backgroundColor={backgroundColor}
                    boxShadow={4}
                  >
                    {/* CLOSE ICON */}
                    <Box display="flex" justifyContent="flex-end" p={1}>
                      <IconButton
                        onClick={() =>
                          setIsMobileMenuToggled(!isMobileMenuToggled)
                        }
                      >
                        <Close />
                      </IconButton>
                    </Box>

                    {/* MENU ITEMS */}
                    <Box
                      display="flex"
                      justifyContent="flex-start"
                      pr={1}
                      pl={1}
                    >
                      <MenuItems
                        direction="column"
                        width="100%"
                        activePage={activePage}
                      />
                      {/* <MenuItemss /> */}
                    </Box>
                  </Box>
                </ClickAwayListener>
              )}
            </Box>
          </Paper>
        </Container>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;
