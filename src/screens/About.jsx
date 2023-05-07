import nccWallpaper from "../assets/images/ncc_wallpaper.jpg";
import CustomAppBar from "../components/AppBar";
import Batch from "../components/Batch";
import { Container, Box, Paper, useMediaQuery, useTheme } from "@mui/material";

function About() {
  const showImage = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  return (
    <Box>
      <CustomAppBar activePage={"About"}></CustomAppBar>
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
        sx={{
          left: 0,
          right: 0,
          position: "absolute",
          marginTop: -4,
        }}
      >
        <Paper elevation={4}>
          <Batch></Batch>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;
