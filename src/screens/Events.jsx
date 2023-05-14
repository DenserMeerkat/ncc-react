import nccWallpaper from "../assets/images/ncc_wallpaper.jpg";
import CustomAppBar from "../components/AppBar/AppBar";
import Footer from "../components/Footer/Footer";
import Batch from "../components/Batch";
import { eventList } from "../assets/resource/events";
import EventCard from "../components/Cards/EventCard";
import { Container, Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import Flex from "../utils/Flex";
import Padding from "../utils/Padding";

function Events() {
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  return (
    <Box>
      <CustomAppBar activePage={"Events"}></CustomAppBar>
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
          <Padding paddingTop={2} />
          <Padding padding={3}>
            <EventCards></EventCards>
          </Padding>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}

const EventCards = () => {
  const items = eventList.map((item) => {
    return (
      <EventCard
        key={item.id}
        title={item.title}
        date={item.date}
        location={item.location}
        description={item.description}
        imgList={item.imgList}
        fileURL={item.fileURL}
      />
    );
  });
  return (
    <Flex flexWrap={"wrap"} justifyContent={"center"} gap={4}>
      {items}
    </Flex>
  );
};

export default Events;
