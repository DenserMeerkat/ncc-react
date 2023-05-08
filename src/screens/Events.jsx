import nccWallpaper from "../assets/images/ncc_wallpaper.jpg";
import CustomAppBar from "../components/AppBar/AppBar";
import Batch from "../components/Batch";
import { eventList } from "../assets/resource/events";
import EventCard from "../components/EventCard/EventCard";
import { Container, Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import Flex from "../utils/Flex";

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
        sx={{
          left: 0,
          right: 0,
          position: "absolute",
          marginTop: -4,
        }}
      >
        <Paper elevation={4}>
          <Box padding={3}>
            <EventCards></EventCards>
          </Box>
        </Paper>
      </Container>
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
