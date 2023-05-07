import nccWallpaper from "../assets/images/ncc_wallpaper.jpg";
import CustomAppBar from "../components/AppBar";
import { Benefits } from "../components/Benefits";
import benefits from "../assets/resource/menu.js";
import { Container, Box, Paper, useMediaQuery, useTheme } from "@mui/material";

function Home() {
  const showImage = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  return (
    <Box>
      <CustomAppBar activePage={"Home"}></CustomAppBar>
      <Box sx={{ position: "relative" }}>
        {showImage ? (
          <Box
            component="img"
            className="ncc-logo"
            sx={{
              aspectRatio: 1,
              width: "100%",
              margin: 0,
              padding: 0,
              zIndex: -1,
            }}
            src={nccWallpaper}
            alt="ncc wallpaper"
          />
        ) : (
          <Box
            backgroundColor={secondaryMain}
            sx={{
              aspectRatio: 1,
              width: "100%",
              height: "30vh",
            }}
          />
        )}
      </Box>
      <Container
        maxWidth="xl"
        top="39vw"
        sx={{
          left: 0,
          right: 0,
          position: "absolute",
          marginTop: -4,
        }}
      >
        <Paper elevation={4}>
          <Box sx={{ padding: 1 }}>
            {showImage ? (
              <Box />
            ) : (
              <Box
                component="img"
                borderRadius={"4px"}
                sx={{
                  aspectRatio: 1,
                  width: "100%",
                  margin: 0,
                  padding: 0,
                  zIndex: -1,
                }}
                src={nccWallpaper}
                alt="ncc wallpaper"
              />
            )}
          </Box>
          <Container className="page-container">
            <Benefits></Benefits>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
}

export default Home;
