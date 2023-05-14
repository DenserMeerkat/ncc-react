import nccWallpaper from "../assets/images/ncc_wallpaper.jpg";
import CustomAppBar from "../components/AppBar/AppBar";
import Footer from "../components/Footer/Footer";
import Batch from "../components/Batch";
import { Container, Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import Flex from "../utils/Flex";

function Gallery() {
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  return (
    <Box>
      <CustomAppBar activePage={"Gallery"}></CustomAppBar>
      <Box sx={{ position: "relative" }}>
        <Box
          backgroundColor={secondaryMain}
          sx={{
            aspectRatio: 1,
            width: "100%",
            height: "20vh",
          }}
        />
      </Box>
      <Container
        maxWidth="xl"
        top="39vw"
        sx={{ position: "relative", marginTop: -4, marginBottom: -4 }}
      >
        <Paper elevation={4}>
          <Container>
            <Box paddingTop={3} paddingBottom={3}>
              <Flex flexWrap={"wrap"} justifyContent={"center"}></Flex>
            </Box>
          </Container>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}

export default Gallery;
