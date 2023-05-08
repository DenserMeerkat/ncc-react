import {
  Box,
  Typography,
  useTheme,
  Button,
  Paper,
  Card,
  Modal,
} from "@mui/material";
import { Launch } from "@mui/icons-material";
import React from "react";
import Flex from "../../utils/Flex";
import EventModal from "./EventModal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import { alpha } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const EventCard = (props) => {
  const title = props.title;
  const date = props.date;
  const location = props.location;
  const description = props.description;
  const imgList = props.imgList;
  const fileURL = props.fileURL;
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const images = imgList.map((img) => {
    return (
      <div>
        <Box
          component="img"
          sx={{
            objectFit: "cover",
            width: "105%",
          }}
          src={img.imageURL}
          alt={img.caption}
        />
      </div>
    );
  });
  return (
    <div>
      <Card
        elevation={3}
        onClick={handleOpen}
        sx={{
          ":hover": {
            boxShadow: 20,
          },
        }}
      >
        <Box
          overflow={"hidden"}
          borderRadius={"4px"}
          maxWidth={"400px"}
          bgcolor={alpha(secondaryMain, 0.05)}
        >
          <Box>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              emulateTouch={false}
              swipeable={false}
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              stopOnHover={true}
            >
              {images}
            </Carousel>
          </Box>
          <Box padding={1} paddingLeft={2} paddingRight={2}>
            <Typography variant="h6" component={"h4"} color="initial">
              {title}
            </Typography>
            <Flex gap={3} justifyContent={"flex-end"}>
              <Typography variant="h6" component={"h4"} fontSize={16}>
                {location}
              </Typography>
              <Typography variant="h6" component={"h4"} fontSize={16}>
                {date}
              </Typography>
            </Flex>
            <Box padding={1}></Box>
            {/* <Flex justifyContent={"flex-end"}>
              <Button variant="text">
                <Typography
                  variant="h6"
                  component={"h4"}
                  fontSize={16}
                  textTransform={"none"}
                >
                  Open
                </Typography>
              </Button>
            </Flex> */}
          </Box>
        </Box>
      </Card>
      <EventModal
        title={title}
        location={location}
        date={date}
        description={description}
        imgList={imgList}
        fileURL={fileURL}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default EventCard;
