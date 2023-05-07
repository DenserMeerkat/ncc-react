import nccWallpaper from "../assets/images/ncc_wallpaper.jpg";
import CustomAppBar from "../components/AppBar";
import Batch from "../components/Batch";
import EventCard from "../components/EventCard";
import { Container, Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import Flex from "../utils/Flex";

function Alumni() {
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  return (
    <Box>
      <CustomAppBar activePage={"Alumni"}></CustomAppBar>
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
          <Container>
            <Box paddingTop={3} paddingBottom={3}>
              <Flex flexWrap={"wrap"} justifyContent={"center"}></Flex>
            </Box>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
}

export default Alumni;
